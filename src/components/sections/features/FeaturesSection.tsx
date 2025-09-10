"use client"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // بررسی viewport
  const isInView = useInView(contentRef, { once: true, margin: "-100px" })

  // کنترل اسکرول
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // اوپاسیتی و اسکیل برای افکت اسکرول
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0, 1, 1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0.95, 1, 1, 0.85])

  // حرکت Y برای افکت اسکرول
  const subtitleY = useTransform(scrollYProgress, [0, 0.2, 1], ["20px", "0px", "-50px"])
  const titleY = useTransform(scrollYProgress, [0, 0.3, 1], ["20px", "0px", "-80px"])
  const descriptionY = useTransform(scrollYProgress, [0, 0.4, 1], ["20px", "0px", "-100px"])

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden pt-28 md:pt-52 relative"
    >
      <motion.div
        ref={contentRef}
        className="flex flex-col items-center justify-center gap-4 relative z-10 px-4 sm:px-6 md:px-8"
        style={{
          scale: contentScale,
          opacity: contentOpacity,
        }}
      >
        {/* Subtitle */}
        <motion.h3
          className="uppercase text-accent-green_light font-semibold text-sm sm:text-base mb-2"
          style={{ y: subtitleY }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          your growth partner
        </motion.h3>

        {/* Main Title */}
        <motion.div
          className="text-center"
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
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
          className="text-center space-y-1 mt-4 px-4"
          style={{ y: descriptionY }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
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