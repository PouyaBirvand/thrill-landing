"use client"
import { motion, useScroll, useTransform, useInView, Variants } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const isInView = useInView(contentRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.6, 1], 
    isMobile ? [0.8, 1, 1, 0.9] : [0.6, 1, 1, 0.7]
  )
  
  const scale = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.6, 1], 
    isMobile ? [0.98, 1, 1, 0.96] : [0.95, 1, 1, 0.9]
  )

  const y = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    isMobile ? ["0px", "0px", "0px"] : ["20px", "0px", "-30px"]
  )

  const staggerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden pt-28 md:pt-52 pb-6 relative"
    >
      <motion.div
        ref={contentRef}
        className="flex flex-col items-center justify-center gap-4 relative z-10 px-4 sm:px-6 md:px-8"
        style={{
          opacity,
          scale,
          y
        }}
        variants={staggerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Subtitle */}
        <motion.h3
          className="uppercase text-accent-green_light font-semibold text-sm sm:text-base"
          variants={itemVariants}
        >
          your growth partner
        </motion.h3>

        {/* Main Title */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <h1 className="text-neutral-white text-[25.6px] sm:text-4xl lg:text-5xl max-w-5xl font-semibold uppercase">
            built for performance.
          </h1>
          <h1 className="text-neutral-white text-[25.6px] sm:text-4xl lg:text-5xl max-w-5xl font-semibold uppercase">
            backed by experience.
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          className="text-center space-y-1 px-4"
          variants={itemVariants}
        >
          <p className="text-neutral-lightGray max-w-[50rem] text-sm sm:text-base">
            Work with a team that values speed, transparency, and real partnership. Whether you're scaling fast or just starting out, we've got the tools, flexible deals, and dedicated support to help you grow.
          </p>
          <p className="text-neutral-lightGray max-w-[50rem] text-sm sm:text-base">
            No fluff, just results backed by real data and a system built to keep your momentum going.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}