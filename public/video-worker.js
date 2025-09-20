// public/video-worker.js
// Web Worker برای پردازش و پری‌لود ویدیوها

self.addEventListener('message', async (event) => {
    const { type, data } = event.data
  
    switch (type) {
      case 'PRELOAD_VIDEO':
        try {
          const { url, priority = 'normal' } = data
          console.log(`Preloading video: ${url} with priority: ${priority}`)
          
          // فتچ کردن ویدیو
          const response = await fetch(url, {
            mode: 'cors',
            cache: 'force-cache'
          })
          
          if (response.ok) {
            // تبدیل به blob برای استفاده بهتر
            const blob = await response.blob()
            const objectUrl = URL.createObjectURL(blob)
            
            // ارسال نتیجه به main thread
            self.postMessage({
              type: 'VIDEO_PRELOADED',
              data: {
                originalUrl: url,
                blobUrl: objectUrl,
                size: blob.size,
                type: blob.type
              }
            })
          } else {
            throw new Error(`Failed to fetch: ${response.status}`)
          }
        } catch (error) {
          self.postMessage({
            type: 'VIDEO_PRELOAD_ERROR',
            data: {
              url: data.url,
              error: error.message
            }
          })
        }
        break
      
      case 'PRELOAD_MULTIPLE_VIDEOS':
        try {
          const { urls, isSafari } = data
          console.log('Preloading multiple videos:', urls)
          
          const results = await Promise.allSettled(
            urls.map(async (url) => {
              const response = await fetch(url, {
                mode: 'cors',
                cache: 'force-cache'
              })
              
              if (response.ok) {
                const blob = await response.blob()
                const objectUrl = URL.createObjectURL(blob)
                return {
                  originalUrl: url,
                  blobUrl: objectUrl,
                  size: blob.size,
                  type: blob.type
                }
              }
              throw new Error(`Failed to fetch: ${response.status}`)
            })
          )
          
          const successful = results
            .filter(result => result.status === 'fulfilled')
            .map(result => result.value)
          
          const failed = results
            .filter(result => result.status === 'rejected')
            .map(result => result.reason)
          
          self.postMessage({
            type: 'MULTIPLE_VIDEOS_PRELOADED',
            data: {
              successful,
              failed,
              isSafari
            }
          })
        } catch (error) {
          self.postMessage({
            type: 'MULTIPLE_VIDEOS_ERROR',
            data: {
              error: error.message
            }
          })
        }
        break
      
      case 'CLEANUP_BLOBS':
        // پاک کردن blob URLs
        const { blobUrls } = data
        blobUrls.forEach(url => {
          try {
            URL.revokeObjectURL(url)
          } catch (error) {
            console.warn('Failed to revoke blob URL:', url)
          }
        })
        
        self.postMessage({
          type: 'BLOBS_CLEANED',
          data: { cleaned: blobUrls.length }
        })
        break
      
      default:
        console.warn('Unknown message type:', type)
    }
  })