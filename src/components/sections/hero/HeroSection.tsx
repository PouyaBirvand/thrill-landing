"use client"
import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import HeroCTAButton from "./HeroCTAButton"

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  
  // تشخیص موبایل
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Get scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // Transforms برای scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 0.95 : 0.8])

  // انیمیشن های ورود
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="sm:pt-[15rem] pt-[10rem] relative lg:overflow-hidden"
    >
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
    </section>
  )
}