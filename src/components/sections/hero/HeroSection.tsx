"use client"
import { motion, useScroll, useTransform, Variants, MotionValue } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"
import dynamic from 'next/dynamic'
import HeroCTAButton from "./HeroCTAButton"

// Dynamic import برای React Player (بهترین عملکرد)
const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 animate-pulse" />
})

interface VideoData {
  originalUrl: string
  blobUrl: string
  size: number
  type: string
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isSafari, setIsSafari] = useState(false)
  const [videosLoaded, setVideosLoaded] = useState(false)
  const [videoWorker, setVideoWorker] = useState<Worker | null>(null)
  const [videoData, setVideoData] = useState<VideoData | null>(null)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [useReactPlayer, setUseReactPlayer] = useState(false)
  
  // تشخیص موبایل و Safari
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    
    // تشخیص Safari و mobile
    const userAgent = navigator.userAgent.toLowerCase()
    const isSafariBrowser = /safari/.test(userAgent) && !/chrome/.test(userAgent) && !/firefox/.test(userAgent)
    const isMobileBrowser = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
    
    setIsSafari(isSafariBrowser)
    
    // استفاده از React Player برای Safari/Mobile برای عملکرد بهتر
    setUseReactPlayer(isSafariBrowser || isMobileBrowser)
    
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // راه‌اندازی Service Worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/video-sw.js')
        .then((registration) => {
          console.log('Video SW registered:', registration)
          
          if (registration.active) {
            registration.active.postMessage({
              type: 'PRELOAD_VIDEOS'
            })
          }
        })
        .catch(console.error)

      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data?.type === 'VIDEOS_PRELOADED') {
          console.log('Videos preloaded by service worker!')
          setLoadingProgress(prev => Math.max(prev, 50))
        }
      })
    }
  }, [])

  // راه‌اندازی Web Worker
  useEffect(() => {
    if (typeof Worker !== 'undefined' && !useReactPlayer) {
      const worker = new Worker('/video-worker.js')
      setVideoWorker(worker)

      worker.onmessage = (event) => {
        const { type, data } = event.data

        switch (type) {
          case 'VIDEO_PRELOADED':
            console.log('Video preloaded:', data)
            setVideoData(data)
            setVideosLoaded(true)
            setLoadingProgress(100)
            break

          case 'MULTIPLE_VIDEOS_PRELOADED':
            console.log('Multiple videos preloaded:', data)
            if (data.successful.length > 0) {
              setVideoData(data.successful[0])
              setVideosLoaded(true)
              setLoadingProgress(100)
            }
            break

          case 'VIDEO_PRELOAD_ERROR':
          case 'MULTIPLE_VIDEOS_ERROR':
            console.error('Video preload error:', data)
            setVideosLoaded(true)
            setLoadingProgress(100)
            break
        }
      }

      return () => {
        worker.terminate()
        setVideoWorker(null)
      }
    } else if (useReactPlayer) {
      // برای React Player مستقیماً loaded رو true میکنیم
      setVideosLoaded(true)
      setLoadingProgress(100)
    }
  }, [useReactPlayer])

  // پری‌لود ویدیوها
  useEffect(() => {
    if (videoWorker && !videosLoaded && !useReactPlayer) {
      const videoUrl = isSafari 
        ? "/animations/header_left_side.mov" 
        : "/animations/header_left_side.webm"

      setLoadingProgress(10)

      videoWorker.postMessage({
        type: 'PRELOAD_VIDEO',
        data: {
          url: videoUrl,
          priority: 'high'
        }
      })
    }
  }, [videoWorker, isSafari, videosLoaded, useReactPlayer])

  // پاک‌سازی
  useEffect(() => {
    return () => {
      if (videoWorker && videoData?.blobUrl) {
        videoWorker.postMessage({
          type: 'CLEANUP_BLOBS',
          data: {
            blobUrls: [videoData.blobUrl]
          }
        })
      }
    }
  }, [videoWorker, videoData])

  // Get scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 0.95 : 0.8])
  
  const rightVideoMovement = useTransform(scrollYProgress, [0, 1], isMobile ? ["0px", "0px"] : ["0px", "200px"])
  const leftVideoMovement = useTransform(scrollYProgress, [0, 1], isMobile ? ["0px", "0px"] : ["0px", "-200px"])
  const videoOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  // انیمیشن‌ها
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: videosLoaded ? 0.3 : 1.0
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const videoVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: videosLoaded ? 1 : 0, 
      x: 0,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.5 }
    }
  }

  const leftVideoVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: videosLoaded ? 1 : 0, 
      x: 0,
      transition: { duration: 1.2, delay: 0.7, ease: "easeOut" }
    }
  }

  // تعیین منبع ویدیو
  const getVideoSource = () => {
    if (videoData?.blobUrl) {
      return videoData.blobUrl
    }
    return isSafari ? "/animations/header_left_side.mov" : "/animations/header_left_side.webm"
  }

  // کالبک برای React Player
  const onReactPlayerReady = useCallback(() => {
    console.log('React Player ready')
    setVideosLoaded(true)
    setLoadingProgress(100)
  }, [])

  const onReactPlayerError = useCallback((error: any) => {
    console.error('React Player error:', error)
    setVideosLoaded(true) // حتی با خطا ادامه بده
  }, [])

  // کامپوننت ویدیو هوشمند
  const SmartVideoPlayer = ({ 
    variants, 
    style, 
    className, 
    isFlipped = false 
  }: { 
    variants: Variants
    style: {
      maskImage?: string
      WebkitMaskImage?: string
      x?: MotionValue<string>
      opacity?: MotionValue<number>
    }
    className: string
    isFlipped?: boolean 
  }) => (
    <motion.div
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {videosLoaded && (
        <>
          {useReactPlayer ? (
            // React Player برای Safari/Mobile
            <ReactPlayer
              url={getVideoSource()}
              playing={true}
              loop={true}
              muted={true}
              playsinline={true}
              width="100%"
              height="100%"
              onReady={onReactPlayerReady}
              onError={onReactPlayerError}
              config={{
                file: {
                  attributes: {
                    preload: 'metadata',
                    className: `w-full h-full object-cover object-center pointer-events-none ${
                      isFlipped ? 'scale-x-[-1]' : ''
                    }`,
                    style: {
                      willChange: 'transform',
                      backfaceVisibility: 'hidden',
                      perspective: 1000
                    }
                  }
                }
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
          ) : (
            // Native video برای Chrome/Firefox
            <video
              src={getVideoSource()}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className={`w-full h-full object-cover object-center pointer-events-none ${
                isFlipped ? 'scale-x-[-1]' : ''
              }`}
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                perspective: 1000
              }}
              onLoadStart={() => console.log('Native video loading started')}
              onCanPlay={() => console.log('Native video can play')}
              onError={(e) => {
                console.error('Native video error:', e)
                if (videoData?.blobUrl && e.currentTarget.src === videoData.blobUrl) {
                  const fallbackUrl = isSafari 
                    ? "/animations/header_left_side.mov" 
                    : "/animations/header_left_side.webm"
                  e.currentTarget.src = fallbackUrl
                }
              }}
            />
          )}
        </>
      )}
      
      {!videosLoaded && (
        <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 animate-pulse" />
      )}
    </motion.div>
  )

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="sm:pt-[15rem] pt-[10rem] relative lg:overflow-hidden"
    >
      {/* Right video */}
      <SmartVideoPlayer
        className="absolute lg:top-0 top-[14rem] z-[5] pointer-events-none
                   right-[-12rem] h-full w-[90%]
                   sm:right-[-250px] sm:w-[70%]
                   md:right-[-270px] md:w-[65%]
                   lg:right-[-420px] lg:w-[70%]
                   xl:right-[-540px] xl:w-[80%]
                   2xl:right-[-400px] 2xl:w-[65%]"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
          x: rightVideoMovement,
          opacity: videoOpacity
        }}
        variants={videoVariants}
        isFlipped={true}
      />

      {/* Left video */}
      <SmartVideoPlayer
        className="absolute lg:top-0 top-[14rem] z-[2] pointer-events-none
                   left-[-12rem] h-full w-[90%]
                   sm:left-[-250px] sm:w-[70%]
                   md:left-[-270px] md:w-[65%]
                   lg:left-[-420px] lg:w-[70%]
                   xl:left-[-540px] xl:w-[80%]
                   2xl:left-[-400px] 2xl:w-[65%]"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
          x: leftVideoMovement,
          opacity: videoOpacity
        }}
        variants={leftVideoVariants}
      />

      {/* Content */}
      <motion.div 
        className="flex flex-col items-center justify-center gap-3 relative z-10 px-4 sm:px-6 md:px-8"
        style={{ 
          scale: contentScale,
          opacity: contentOpacity
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          className="uppercase text-accent-green_light font-semibold text-sm sm:text-base"
          variants={itemVariants}
        >
          grow with thrill
        </motion.h3>
        
        <motion.div 
          className="h-[12rem] hidden sm:block w-[35rem] blur-3xl top-12 bg-sky-300 bg-opacity-10 absolute"
          variants={itemVariants}
        />
        
        <motion.h1
          className="text-white text-[28px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold max-w-5xl text-center uppercase leading-tight px-2"
          variants={itemVariants}
        >
          The Affiliate partnership you've Been waiting For
        </motion.h1>

        <motion.div
          className="text-center space-y-1 px-4 mt-2"
          variants={itemVariants}
        >
          <p className="text-neutral-lightGray text-md sm:text-xl">
          It's time to make your reach thrilling.
          </p>
          <p className="text-neutral-lightGray text-md sm:text-xl max-w-lg">
            Join the best casino affiliate program built for creators, streamers, publishers, and platforms of all kinds.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 pb-16"
          variants={itemVariants}
        >
          <HeroCTAButton />
        </motion.div>
      </motion.div>

      {/* بهبود یافته Loading indicator */}
      {!videosLoaded && (
        <div className="fixed top-4 right-4 z-50 bg-black/50 text-white px-4 py-3 rounded-lg text-sm backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <div className="flex flex-col">
              <span>Loading videos...</span>
              <div className="text-xs text-white/70 mt-1">
                {useReactPlayer ? 'Using React Player' : 'Using Native Player'}
                {videoData && ` • ${(videoData.size / 1024 / 1024).toFixed(1)}MB`}
              </div>
              <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden mt-1">
                <div 
                  className="h-full bg-white transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}