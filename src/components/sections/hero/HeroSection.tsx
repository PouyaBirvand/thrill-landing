"use client";
import { motion } from "framer-motion";
import HeroCTAButton from "./HeroCTAButton";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center
                min-h-screen"
    >
      {/* Right video */}
      <motion.div
        className="absolute top-0 z-[5] pointer-events-none hidden sm:block
                   right-[-250px] h-full w-[85%]
                   md:right-[-270px] md:w-[70%]
                   lg:right-[-220px] lg:w-[58%]
                   xl:right-[-260px] xl:w-[60%]
                   2xl:right-[-400px] 2xl:w-[62%]"
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
          className="w-full h-full object-cover scale-x-[-1] object-center"
        />
      </motion.div>

      {/* Left video */}
      <motion.div
        className="absolute top-0 z-[5] pointer-events-none hidden sm:block
                   left-[-250px] h-full w-[85%]
                   md:left-[-270px] md:w-[70%]
                   lg:left-[-220px] lg:w-[58%]
                   xl:left-[-260px] xl:w-[60%]
                   2xl:left-[-400px] 2xl:w-[62%]"
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
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none sm:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="absolute top-1/4 right-[5vw] w-[25vw] h-[25vw] max-w-32 max-h-32 bg-sky-300 bg-opacity-5 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 left-[5vw] w-[22vw] h-[22vw] max-w-28 max-h-28 bg-accent-green_light bg-opacity-5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-[8vw] w-[20vw] h-[20vw] max-w-24 max-h-24 bg-sky-300 bg-opacity-5 rounded-full blur-xl"></div>
      </motion.div>

      {/* Content - مرکز صفحه */}
      <div className="flex flex-col items-center justify-center gap-3 relative z-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* Block 1: Subtitle */}
        <motion.h3
          className="uppercase text-accent-green_light font-semibold text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          grow with thrill
        </motion.h3>

        {/* Background blur effect */}
        <motion.div
          className="h-[6rem] sm:h-[8rem] md:h-[10rem] lg:h-[12rem] 
                     w-[20rem] sm:w-[25rem] md:w-[30rem] lg:w-[35rem] 
                     blur-3xl 
                     top-6 sm:top-8 md:top-10 lg:top-12 
                     bg-sky-300 bg-opacity-10 absolute"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        />

        {/* Block 2: Main Title */}
        <motion.h1
          className="text-white font-bold max-w-5xl text-center uppercase leading-tight px-2
                     text-[22px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] 2xl:text-[64px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          streaming partnership you've Been waiting For
        </motion.h1>

        {/* Block 3: Description */}
        <motion.div
          className="text-center space-y-1 px-4 mt-2 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        >
          <p className="text-neutral-lightGray text-sm sm:text-base md:text-lg lg:text-xl">
            It's time to make your streams Thrilling.
          </p>
          <p className="text-neutral-lightGray text-sm sm:text-base md:text-lg lg:text-xl">
            Join the best casino affiliate program built around creators.
          </p>
        </motion.div>

        {/* Block 4: CTA Button */}
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
  );
}