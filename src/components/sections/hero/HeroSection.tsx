"use client"
import Image from "next/image"
import HeroCTAButton from "./HeroCTAButton"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section id="hero" className="pt-[15rem] relative overflow-hidden min-h-screen bg-[#1B1D29]">

      {/* Right image - Simple entrance */}
      <motion.div
        className="absolute right-0 top-0 z-[5] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/right.png"
          alt="right"
          width={500}
          height={500}
          priority
          className="object-contain w-[56rem] sm:w-[40rem] md:w-[48rem] lg:w-[56rem]"
        />
      </motion.div>

      {/* Left image - Simple entrance with slight delay */}
      <motion.div
        className="absolute left-0 top-0 z-[5] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      >
        <Image
          src="/right.png"
          alt="left"
          width={500}
          height={900}
          priority
          className="object-contain w-[56rem] sm:w-[40rem] md:w-[48rem] lg:w-[56rem] scale-x-[-1]"
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
          className="text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold max-w-5xl text-center uppercase leading-tight px-2"
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
          <p className="text-neutral-lightGray text-lg sm:text-xl">
            It's time to make your streams Thrilling.
          </p>
          <p className="text-neutral-lightGray text-lg sm:text-xl">
            Join the best casino affiliate program built around creators.
          </p>
        </motion.div>

        {/* Block 4: CTA Button - appears AFTER description with delay */}
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