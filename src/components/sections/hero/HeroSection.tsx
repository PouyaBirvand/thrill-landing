"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import HeroCTAButton from "./HeroCTAButton"

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  // Get scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // Transform values based on scroll progress
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const titleY = useTransform(scrollYProgress, [0, 1], ["0px", "-150px"])
  const subtitleY = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"])
  const descriptionY = useTransform(scrollYProgress, [0, 1], ["0px", "-200px"])
  const buttonY = useTransform(scrollYProgress, [0, 1], ["0px", "-250px"])
  
  // Video animations
  const leftVideoX = useTransform(scrollYProgress, [0, 1], ["0px", "-300px"])
  const rightVideoX = useTransform(scrollYProgress, [0, 1], ["0px", "300px"])
  const videoScale = useTransform(scrollYProgress, [0, 0.7], [1, 1.2])
  const videoOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="sm:pt-[15rem] pt-[10rem] relative overflow-hidden"
    >
      {/* Right video - با scroll effects */}
      <motion.div
        className="absolute top-0 z-[5] pointer-events-none
                   right-[-12rem] h-full w-[100%]
                   sm:right-[-250px] sm:w-[100%]
                   md:right-[-270px] md:w-[95%]
                   lg:right-[-260px] lg:w-[80%]
                   xl:right-[-340px] xl:w-[70%]
                   2xl:right-[-400px] 2xl:w-[65%]"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
          x: rightVideoX,
          scale: videoScale,
          opacity: videoOpacity
        }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <video
          src="/animations/header_left_side.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-x-[-1] object-center pointer-events-none"
        />
      </motion.div>

      {/* Left video - با scroll effects */}
      <motion.div
        className="absolute top-0 z-[2] pointer-events-none
                   left-[-12rem] h-full w-[100%]
                   sm:left-[-250px] sm:w-[100%]
                   md:left-[-270px] md:w-[95%]
                   lg:left-[-260px] lg:w-[80%]
                   xl:left-[-340px] xl:w-[70%]
                   2xl:left-[-400px] 2xl:w-[65%]"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
          x: leftVideoX,
          scale: videoScale,
          opacity: videoOpacity
        }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      >
        <video
          src="/animations/header_left_side.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center pointer-events-none"
        />
      </motion.div>

      {/* Content با scroll animations */}
      <motion.div 
        className="flex flex-col items-center justify-center gap-3 relative z-10 px-4 sm:px-6 md:px-8"
        style={{ 
          scale: contentScale,
          opacity: contentOpacity
        }}
      >
        {/* Block 1: Subtitle */}
        <motion.h3
          className="uppercase text-accent-green_light font-semibold text-sm sm:text-base"
          style={{ y: subtitleY }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          grow with thrill
        </motion.h3>
        
        {/* Background blur effect */}
        <motion.div 
          className="h-[12rem] hidden sm:block w-[35rem] blur-3xl top-12 bg-sky-300 bg-opacity-10 absolute" 
          style={{ y: backgroundY }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }} 
        />
        
        {/* Block 2: Main Title */}
        <motion.h1
          className="text-white text-[28px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold max-w-5xl text-center uppercase leading-tight px-2"
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          The Affiliate partnership you've Been waiting For
        </motion.h1>

        {/* Block 3: Description */}
        <motion.div
          className="text-center space-y-1 px-4 mt-2"
          style={{ y: descriptionY }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        >
          <p className="text-neutral-lightGray text-md sm:text-xl">
          It’s time to make your reach thrilling.
          </p>
          <p className="text-neutral-lightGray text-md sm:text-xl">
            Join the best casino affiliate programbuilt for creators, streamers, publishers, and platforms of all kinds.
          </p>
        </motion.div>

        {/* Block 4: CTA Button */}
        <motion.div
          className="mt-8 pb-16"
          style={{ y: buttonY }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
        >
          <HeroCTAButton />
        </motion.div>
      </motion.div>
    </section>
  )
}