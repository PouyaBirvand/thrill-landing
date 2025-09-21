"use client"
import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Lottie from "lottie-react"
import HeroCTAButton from "./HeroCTAButton"

interface AnimationData {
  loaded: boolean
  data: any
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [animationData, setAnimationData] = useState<AnimationData>({ loaded: false, data: null })
  const [loadingProgress, setLoadingProgress] = useState(0)
  
  // تشخیص موبایل
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // لود کردن انیمیشن JSON
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        setLoadingProgress(20)
        
        const response = await fetch('/animations/header_left_side.json')
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        setLoadingProgress(60)
        
        const jsonData = await response.json()
        
        setAnimationData({ 
          loaded: true, 
          data: jsonData 
        })
        setLoadingProgress(100)
        
        console.log('Animation JSON loaded successfully')
      } catch (error) {
        console.error('Error loading animation:', error)
        setAnimationData({ loaded: true, data: null }) // حتی در صورت خطا، loading را تمام کن
        setLoadingProgress(100)
      }
    }

    loadAnimation()
  }, [])

  // Get scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // Transforms برای scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 0.95 : 0.8])
  
  // حرکت جداگانه برای هر انیمیشن
  const rightAnimationMovement = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 200])
  const leftAnimationMovement = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -200])
  const animationOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  // انیمیشن های ورود
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: animationData.loaded ? 0.3 : 1.0
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

  const animationVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: animationData.loaded && animationData.data ? 1 : 0, 
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5
      }
    }
  }

  const leftAnimationVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: animationData.loaded && animationData.data ? 1 : 0, 
      x: 0,
      transition: {
        duration: 1.2,
        delay: 0.7,
        ease: "easeOut"
      }
    }
  }

  // کامپوننت Lottie بهینه شده
  const OptimizedLottie = ({ 
    variants, 
    style, 
    className, 
    isFlipped = false 
  }: { 
    variants: Variants
    style: {
      maskImage?: string
      WebkitMaskImage?: string
      x?: any
      opacity?: any
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
      {animationData.loaded && animationData.data ? (
        <div className={`w-full h-full ${isFlipped ? 'scale-x-[-1]' : ''}`}>
          <Lottie
            animationData={animationData.data}
            loop={true}
            autoplay={true}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              pointerEvents: 'none'
            }}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid slice'
            }}
          />
        </div>
      ) : (
        // بک‌آپ برای زمانی که انیمیشن لود نمی‌شود
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
      {/* Right animation - به سمت راست حرکت می‌کنه */}
      <OptimizedLottie
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
          x: rightAnimationMovement,
          opacity: animationOpacity
        }}
        variants={animationVariants}
        isFlipped={true}
      />

      {/* Left animation - به سمت چپ حرکت می‌کنه */}
      <OptimizedLottie
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
          x: leftAnimationMovement,
          opacity: animationOpacity
        }}
        variants={leftAnimationVariants}
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
        {/* Subtitle */}
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
        
        {/* Main Title */}
        <motion.h1
          className="text-white text-[28px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold max-w-5xl text-center uppercase leading-tight px-2"
          variants={itemVariants}
        >
          The Affiliate partnership you've Been waiting For
        </motion.h1>

        {/* Description */}
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

        {/* CTA Button */}
        <motion.div
          className="mt-8 pb-16"
          variants={itemVariants}
        >
          <HeroCTAButton />
        </motion.div>
      </motion.div>

      {/* Loading indicator ساده */}
      {!animationData.loaded && (
        <div className="fixed top-4 right-4 z-50 bg-black/50 text-white px-4 py-3 rounded-lg text-sm backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <div className="flex flex-col">
              <span>Loading animation...</span>
              <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden">
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