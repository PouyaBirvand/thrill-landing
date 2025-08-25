"use client"
import Image from "next/image"
import HeroCTAButton from "./HeroCTAButton"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="pt-[12rem] relative overflow-hidden min-h-screen bg-[#1B1D29]">
      {/* Animated Background Particles */}
      {/* <div className="absolute inset-0 z-[1]">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#83FFDA] rounded-full opacity-30"
            initial={{ 
              x: Math.random() * window?.innerWidth || 1920,
              y: Math.random() * window?.innerHeight || 1080,
              scale: 0 
            }}
            animate={{ 
              x: Math.random() * (window?.innerWidth || 1920),
              y: Math.random() * (window?.innerHeight || 1080),
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div> */}

      {/* Right image with advanced animations */}
      <motion.div 
        className="absolute right-0 top-0 z-[5] pointer-events-none"
        initial={{ x: 200, opacity: 0, rotateY: -30 }}
        animate={{ 
          x: 0, 
          opacity: 1, 
          rotateY: 0,
          y: [0, -20, 0]
        }}
        transition={{
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        whileHover={{
          scale: 1.05,
          rotateY: 5,
          transition: { duration: 0.5, ease: "easeOut" }
        }}
      >
        <motion.div
          animate={{
            filter: [
              "drop-shadow(0 0 20px rgba(131, 255, 218, 0.3))",
              "drop-shadow(0 0 40px rgba(131, 255, 218, 0.5))",
              "drop-shadow(0 0 20px rgba(131, 255, 218, 0.3))"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/right.png"
            alt="right"
            width={500}
            height={500}
            className="object-contain w-[56rem] sm:w-[40rem] md:w-[48rem] lg:w-[56rem]"
          />
        </motion.div>
      </motion.div>

      {/* Left image with mirror animations */}
      <motion.div 
        className="absolute left-0 top-0 z-[5] pointer-events-none"
        initial={{ x: -200, opacity: 0, rotateY: 30 }}
        animate={{ 
          x: 0, 
          opacity: 1, 
          rotateY: 0,
          y: [0, 20, 0]
        }}
        transition={{
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.3,
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }
        }}
        whileHover={{
          scale: 1.05,
          rotateY: -5,
          transition: { duration: 0.5, ease: "easeOut" }
        }}
      >
        <motion.div
          animate={{
            filter: [
              "drop-shadow(0 0 20px rgba(131, 255, 218, 0.2))",
              "drop-shadow(0 0 35px rgba(131, 255, 218, 0.4))",
              "drop-shadow(0 0 20px rgba(131, 255, 218, 0.2))"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <Image
            src="/right.png" 
            alt="left"
            width={500}
            height={900}
            className="object-contain w-[56rem] sm:w-[40rem] md:w-[48rem] lg:w-[56rem] scale-x-[-1]"
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-3 relative z-10 px-4 sm:px-6 md:px-8">
        {/* Enhanced Glowing Background Effect */}
        <motion.div 
          className="absolute w-[650px] h-[100px] -mt-36 rounded-full blur-3xl opacity-10"
          style={{
            background: "linear-gradient(45deg, #83FFDA, #ffffff, #83FFDA)"
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Additional Glow Effects */}
        <motion.div 
          className="absolute w-[400px] h-[100px] -mt-20 bg-[#83FFDA] rounded-full blur-2xl opacity-5"
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Subtitle Animation */}
        <motion.h3 
          className="uppercase text-[#83FFDA] font-semibold text-sm sm:text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{
            scale: 1.1,
            textShadow: "0 0 20px rgba(131, 255, 218, 0.8)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 5px rgba(131, 255, 218, 0.5)",
                "0 0 15px rgba(131, 255, 218, 0.8)",
                "0 0 5px rgba(131, 255, 218, 0.5)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            grow with thrill
          </motion.span>
        </motion.h3>

        {/* Main Title with spectacular animations */}
        <motion.h1 
          className="text-white text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold max-w-5xl text-center uppercase leading-tight px-2"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{
            scale: 1.02,
            textShadow: "0 0 30px rgba(255, 255, 255, 0.5)",
            transition: { duration: 0.5 }
          }}
        >
          {["streaming", "partnership", "you've", "Been", "waiting", "For"].map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2 sm:mr-3 md:mr-4"
              initial={{ opacity: 0, rotateX: -90, y: 50 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1 + index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{
                rotateX: 15,
                y: -5,
                color: "#83FFDA",
                textShadow: "0 0 20px rgba(131, 255, 218, 0.8)",
                transition: { duration: 0.3 }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description with staggered animation */}
        <motion.div 
          className="text-center space-y-1 mt-2 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p 
            className="text-neutral-lightGray text-lg sm:text-xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              scale: 1.02,
              color: "#83FFDA",
              transition: { duration: 0.3 }
            }}
          >
            It's time to make your streams Thrilling.
          </motion.p>
          <motion.p 
            className="text-neutral-lightGray text-lg sm:text-xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              scale: 1.02,
              color: "#83FFDA",
              transition: { duration: 0.3 }
            }}
          >
            Join the best casino affiliate program built around creators.
          </motion.p>
        </motion.div>

        {/* CTA Button with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroCTAButton />
        </motion.div>
      </div>

      {/* Floating Elements */}
      {/* <div className="absolute inset-0 pointer-events-none z-[2]">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute w-2 h-2 bg-[#83FFDA] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div> */}
    </section>
  )
}