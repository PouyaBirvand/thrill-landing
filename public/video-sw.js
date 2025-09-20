// public/video-sw.js
const CACHE_NAME = 'video-cache-v1'
const VIDEO_URLS = [
  '/animations/header_left_side.webm',
  '/animations/header_left_side.mov'
]

// نصب Service Worker
self.addEventListener('install', (event) => {
  console.log('Video Service Worker installing...')
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache')
      // پری‌کش کردن ویدیوها
      return cache.addAll(VIDEO_URLS.map(url => new Request(url, {
        mode: 'no-cors'
      })))
    }).catch(error => {
      console.log('Cache failed:', error)
    })
  )
  self.skipWaiting()
})

// فعال‌سازی Service Worker
self.addEventListener('activate', (event) => {
  console.log('Video Service Worker activating...')
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  return self.clients.claim()
})

// درخواست‌های fetch
self.addEventListener('fetch', (event) => {
  // فقط برای ویدیوها
  if (event.request.url.includes('/animations/')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          console.log('Serving video from cache:', event.request.url)
          return response
        }
        
        console.log('Fetching video from network:', event.request.url)
        return fetch(event.request).then((response) => {
          // کش کردن پاسخ
          if (response.status === 200) {
            const responseClone = response.clone()
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone)
            })
          }
          return response
        })
      })
    )
  }
})

// پیام‌رسانی با main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PRELOAD_VIDEOS') {
    console.log('Preloading videos via service worker...')
    
    // پری‌لود ویدیوها در background
    Promise.all(
      VIDEO_URLS.map(url => 
        fetch(url).then(response => {
          if (response.ok) {
            return caches.open(CACHE_NAME).then(cache => 
              cache.put(url, response.clone())
            )
          }
        }).catch(console.error)
      )
    ).then(() => {
      // اطلاع رسانی به main thread
      self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'VIDEOS_PRELOADED',
            success: true
          })
        })
      })
    })
  }
})