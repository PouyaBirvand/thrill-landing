"use client"
import Image from "next/image"
import HeroCTAButton from "./HeroCTAButton"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="py-[8rem] sm:py-[12rem] lg:py-[15rem] relative bg-[#1B1D29]"
    >

      <motion.div
        className="absolute  top-0 right-0 transform -translate-y-1/2 z-[5] pointer-events-none"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/right.png"
          alt="right"
          width={500}
          height={500}
          priority
          className="object-contain w-[32rem] sm:w-[40rem] md:w-[48rem] lg:w-[56rem]"
        />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 transform -translate-y-1/2 z-[5] pointer-events-none"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      >
        <Image
          src="/right.png"
          alt="left"
          width={500}
          height={900}
          priority
          className="object-contain w-[32rem] sm:w-[40rem] md:w-[48rem] lg:w-[56rem] scale-x-[-1]"
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
          className="h-[8rem] sm:h-[12rem] w-[25rem] sm:w-[35rem] blur-3xl top-8 sm:top-12 bg-sky-300 bg-opacity-10 absolute" 
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
          <p className="text-neutral-lightGray text-base sm:text-lg lg:text-xl">
            It's time to make your streams Thrilling.
          </p>
          <p className="text-neutral-lightGray text-base sm:text-lg lg:text-xl">
            Join the best casino affiliate program built around creators.
          </p>
        </motion.div>

        {/* Block 4: CTA Button - appears AFTER description with delay */}
        <motion.div
          className="mt-6 sm:mt-8"
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

// راه حل 2: کنترل ارتفاع با CSS Grid
export function HeroSectionV2() {
  return (
    <section 
      id="hero" 
      className="relative bg-[#1B1D29] grid place-items-center"
      style={{
        minHeight: 'clamp(600px, 80vh, 900px)', // ارتفاع کنترل شده
        paddingTop: 'clamp(4rem, 10vh, 8rem)',
        paddingBottom: 'clamp(4rem, 10vh, 8rem)'
      }}
    >
      {/* تصاویر و content مثل قبل */}
    </section>
  )
}

// راه حل 3: استفاده از flex با ارتفاع محدود
export function HeroSectionV3() {
  return (
    <section 
      id="hero" 
      className="relative bg-[#1B1D29] flex flex-col justify-center py-16 sm:py-24 lg:py-32"
      // بدون min-height، فقط با padding
    >

      {/* Right image */}
      <motion.div
        className="absolute right-[-6rem] sm:right-[-10rem] top-1/2 transform -translate-y-1/2 z-[5] pointer-events-none"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/right.png"
          alt="right"
          width={500}
          height={500}
          priority
          className="object-contain w-[28rem] sm:w-[40rem] md:w-[48rem] lg:w-[56rem]"
        />
      </motion.div>

      {/* Left image */}
      <motion.div
        className="absolute left-[-6rem] sm:left-[-10rem] top-1/2 transform -translate-y-1/2 z-[5] pointer-events-none"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      >
        <Image
          src="/right.png"
          alt="left"
          width={500}
          height={900}
          priority
          className="object-contain w-[28rem] sm:w-[40rem] md:w-[48rem] lg:w-[56rem] scale-x-[-1]"
        />
      </motion.div>

      {/* Content - متمرکز شده */}
      <div className="flex flex-col items-center justify-center gap-3 relative z-10 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">

        <motion.h3
          className="uppercase text-accent-green_light font-semibold text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          grow with thrill
        </motion.h3>
        
        <motion.div 
          className="h-[8rem] sm:h-[12rem] w-[25rem] sm:w-[35rem] blur-3xl bg-sky-300 bg-opacity-10 absolute" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }} 
        />
        
        <motion.h1
          className="text-white text-[24px] xs:text-[28px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold max-w-5xl text-center uppercase leading-tight px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          streaming partnership you've Been waiting For
        </motion.h1>

        <motion.div
          className="text-center space-y-1 px-4 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        >
          <p className="text-neutral-lightGray text-sm sm:text-lg lg:text-xl">
            It's time to make your streams Thrilling.
          </p>
          <p className="text-neutral-lightGray text-sm sm:text-lg lg:text-xl">
            Join the best casino affiliate program built around creators.
          </p>
        </motion.div>

        <motion.div
          className="mt-6 sm:mt-8"
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