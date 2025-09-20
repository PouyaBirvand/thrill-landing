"use client"
import { motion, useScroll, useTransform, Variants, MotionValue } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import HeroCTAButton from "./HeroCTAButton"

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isSafari, setIsSafari] = useState(false)
  const [videosLoaded, setVideosLoaded] = useState(false)
  
  // تشخیص موبایل و Safari
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    
    // تشخیص Safari
    const userAgent = navigator.userAgent.toLowerCase()
    const isSafariBrowser = /safari/.test(userAgent) && !/chrome/.test(userAgent) && !/firefox/.test(userAgent)
    setIsSafari(isSafariBrowser)
    
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // پری‌لود ویدیوها
  useEffect(() => {
    const preloadVideos = async () => {
      try {
        const videoSources = [
          isSafari ? "/animations/header_left_side.mov" : "/animations/header_left_side.webm"
        ]
        
        const videoPromises = videoSources.map(src => {
          return new Promise((resolve, reject) => {
            const video = document.createElement('video')
            video.preload = 'metadata'
            video.oncanplaythrough = () => resolve(video)
            video.onerror = () => reject(new Error(`Failed to load ${src}`))
            video.src = src
          })
        })
        
        await Promise.all(videoPromises)
        setVideosLoaded(true)
      } catch (error) {
        console.error('Video preload failed:', error)
        setVideosLoaded(true) // بیاید بقیه کامپوننت کار کند حتی اگر ویدیو لود نشد
      }
    }
    
    preloadVideos()
  }, [isSafari])

  // Get scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // فقط ۳ تا transform برای کل section - خیلی سبک‌تر!
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 0.95 : 0.8])
  
  // حرکت جداگانه برای هر ویدیو - یکی چپ یکی راست
  const rightVideoMovement = useTransform(scrollYProgress, [0, 1], isMobile ? ["0px", "0px"] : ["0px", "200px"])
  const leftVideoMovement = useTransform(scrollYProgress, [0, 1], isMobile ? ["0px", "0px"] : ["0px", "-200px"])
  const videoOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  // انیمیشن های ساده برای ورود
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: videosLoaded ? 0.3 : 1.0 // صبر بیشتر تا ویدیوها لود شوند
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  // ویدیو variants برای ورود اولیه
  const videoVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: videosLoaded ? 1 : 0, 
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5
      }
    }
  }

  const leftVideoVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: videosLoaded ? 1 : 0, 
      x: 0,
      transition: {
        duration: 1.2,
        delay: 0.7,
        ease: "easeOut"
      }
    }
  }

  // تعیین فرمت ویدیو بر اساس مرورگر
  const getVideoSource = () => {
    return isSafari ? "/animations/header_left_side.mov" : "/animations/header_left_side.webm"
  }

  // کامپوننت ویدیو بهینه شده
  const OptimizedVideo = ({ 
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
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
          onError={(e) => console.error('Video error:', e)}
        />
      )}
      
      {/* بک‌آپ برای زمانی که ویدیو لود نمی‌شود */}
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
      {/* Right video - به سمت راست حرکت می‌کنه */}
      <OptimizedVideo
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

      {/* Left video - به سمت چپ حرکت می‌کنه */}
      <OptimizedVideo
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

      {/* Content - فقط کل container حرکت می‌کنه */}
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
        {/* Block 1: Subtitle */}
        <motion.h3
          className="uppercase text-accent-green_light font-semibold text-sm sm:text-base"
          variants={itemVariants}
        >
          grow with thrill
        </motion.h3>
        
        {/* Background blur effect */}
        <motion.div 
          className="h-[12rem] hidden sm:block w-[35rem] blur-3xl top-12 bg-sky-300 bg-opacity-10 absolute"
          variants={itemVariants}
        />
        
        {/* Block 2: Main Title */}
        <motion.h1
          className="text-white text-[28px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold max-w-5xl text-center uppercase leading-tight px-2"
          variants={itemVariants}
        >
          The Affiliate partnership you've Been waiting For
        </motion.h1>

        {/* Block 3: Description */}
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

        {/* Block 4: CTA Button */}
        <motion.div
          className="mt-8 pb-16"
          variants={itemVariants}
        >
          <HeroCTAButton />
        </motion.div>
      </motion.div>

      {/* Loading indicator برای زمان لود ویدیوها */}
      {!videosLoaded && (
        <div className="fixed top-4 right-4 z-50 bg-black/50 text-white px-3 py-2 rounded-lg text-sm">
          Loading videos...
        </div>
      )}
    </section>
  )
}