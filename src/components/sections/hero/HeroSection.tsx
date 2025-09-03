"use client"
import { motion } from "framer-motion"
import HeroCTAButton from "./HeroCTAButton"

export default function HeroSection() {
  return (
    <section id="hero" className="sm:pt-[15rem] pt-[10rem] relative min-h-screen bg-[#1B1D29]">
      {/* Right video - با gradient mask */}
      <motion.div
        className="absolute top-[-8rem] sm:top-0 z-[5] pointer-events-none
                   right-[-16rem] h-full w-full
                   sm:right-[-200px] sm:w-[80%]
                   md:right-[-270px] md:w-[70%]
                   lg:right-[-260px] lg:w-[58%]
                   xl:right-[-340px] xl:w-[60%]
                   2xl:right-[-400px] 2xl:w-[62%]"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
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

      {/* Left video - با gradient mask */}
      <motion.div
        className="absolute top-[-8rem] sm:top-0 z-[5] pointer-events-none
                   left-[-16rem] h-full w-full
                   sm:right-[-200px] sm:w-[80%]
                   md:left-[-270px] md:w-[70%]
                   lg:left-[-260px] lg:w-[58%]
                   xl:left-[-340px] xl:w-[60%]
                   2xl:left-[-400px] 2xl:w-[62%]"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
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

      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-3 relative z-10 px-4 sm:px-6 md:px-8">
        {/* Block 1: Subtitle */}
        <motion.h3
          className="uppercase text-accent-green_light font-semibold text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          grow with thrill
        </motion.h3>
        
        <motion.div 
          className="h-[12rem] w-[35rem] blur-3xl top-12 bg-sky-300 bg-opacity-10 absolute" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }} 
        />
        
        {/* Block 2: Main Title */}
        <motion.h1
          className="text-white text-[28px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold max-w-5xl text-center uppercase leading-tight px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          streaming partnership you've Been waiting For
        </motion.h1>

        {/* Block 3: Description */}
        <motion.div
          className="text-center space-y-1 px-4 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        >
          <p className="text-neutral-lightGray text-md sm:text-xl">
            It's time to make your streams Thrilling.
          </p>
          <p className="text-neutral-lightGray text-md sm:text-xl">
            Join the best casino affiliate program built around creators.
          </p>
        </motion.div>

        {/* Block 4: CTA Button */}
        <motion.div
          className="mt-8 pb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
        >
          <HeroCTAButton />
        </motion.div>
      </div>
    </section>
  )
}