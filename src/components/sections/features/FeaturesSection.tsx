"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // کنترل اسکرول
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], 
  })

  // اوپاسیتی: 
  // - وقتی سکشن تازه وارد میشه (0 → 0.2) از 0 میره به 1
  // - وسط سکشن ثابت می‌مونه (0.2 → 0.6)
  // - آخر سکشن (0.6 → 1) دوباره میره به 0
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0, 1, 1, 0])

  // اسکیل: کمی افکت بزرگ/کوچک
  const contentScale = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0.95, 1, 1, 0.85])

  // حرکت Y
  const subtitleY = useTransform(scrollYProgress, [0, 0.2, 1], ["20px", "0px", "-50px"])
  const titleY = useTransform(scrollYProgress, [0, 0.3, 1], ["20px", "0px", "-80px"])
  const descriptionY = useTransform(scrollYProgress, [0, 0.4, 1], ["20px", "0px", "-100px"])

  return (
    <section 
      ref={sectionRef}
      className="pb-12 relative"
    >
      <motion.div
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
        >
          your growth partner
        </motion.h3>

        {/* Main Title */}
        <motion.div
          className="text-center"
          style={{ y: titleY }}
        >
          <h1 className="text-neutral-white text-[28px] sm:text-4xl lg:text-5xl max-w-5xl font-semibold uppercase">
            built for performance.
          </h1>
          <h1 className="text-neutral-white text-[28px] sm:text-4xl lg:text-5xl max-w-5xl font-semibold uppercase">
            backed by experience.
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          className="text-center space-y-1 mt-4 px-4"
          style={{ y: descriptionY }}
        >
          <p className="text-neutral-lightGray max-w-[50rem] text-sm sm:text-base">
            Work with a team that values speed, transparency, and real partnership. Whether you're scaling fast or
            just starting out — we've got the tools, flexible deals, and dedicated support to help you grow. 
          </p>
          <p className="text-neutral-lightGray max-w-[50rem] text-sm sm:text-base">
            No fluff, just results backed by real data, weekly payouts, and a system built to keep your momentum going.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
