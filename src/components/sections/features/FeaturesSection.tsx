"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="overflow-hidden" ref={ref}>
        <div className="flex flex-col items-center justify-center gap-2">
          {/* Block 1: Subtitle */}
          <motion.h3
            className="uppercase text-[#83FFDA] font-semibold text-sm sm:text-base mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            your growth partner
          </motion.h3>

          {/* Block 2: Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <h1 className="text-neutral-white text-3xl sm:text-4xl lg:text-5xl max-w-5xl font-bold text-center uppercase">
              built for performance.
            </h1>
            <h1 className="text-neutral-white text-3xl sm:text-4xl lg:text-5xl max-w-5xl font-bold text-center uppercase">
              backed by experience.
            </h1>
          </motion.div>

          {/* Block 3: Description */}
          <motion.div
            className="text-center space-y-1 mt-2 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <p className="text-neutral-lightGray max-w-[50rem] text-sm sm:text-base">
              Work with a team that values speed, transparency, and real partnership. Whether you're scaling fast or
              just starting out — we've got the tools, flexible deals, and dedicated support to help you grow. No fluff,
              just results backed by real data, weekly payouts, and a system built to keep your momentum going.
            </p>
          </motion.div>
        </div>
    </section>
  )
}
