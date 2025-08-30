'use client'

import { plans } from '@/constants/data/plans'
import { easeOut, motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CommissionCard() {
  const ref = useRef<HTMLElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.25 })

  const gridVariants = {
    hidden: {},
    show: {},
  }

  const getCardVariants = (idx: number) => ({
    hidden: { opacity: 0, y: 18 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: easeOut,
        delay: idx < 3 ? 0 : 0.1 
      } 
    },
  })

  const bgLineVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, ease: easeOut, delay: 0.3 } },
  }

  const dotVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.45, delay: 0.9 } },
  }

  return (
    <section
      id="commission-plan"
      ref={ref}
      className="relative pt-16 sm:pt-24 md:pt-32 lg:pt-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Decorative lines & blobs */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* Vertical lines */}
            <motion.div
              className="absolute top-0 bottom-0 w-px left-1/3 bg-[rgba(255,255,255,0.15)]"
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
              variants={bgLineVariants}
            />
            <motion.div
              className="absolute top-0 bottom-0 w-px left-2/3 bg-[rgba(255,255,255,0.15)]"
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
              variants={bgLineVariants}
            />
            {/* Horizontal line */}
            <motion.div
              className="absolute left-0 right-0 h-px top-1/2 bg-[rgba(255,255,255,0.15)]"
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
              variants={bgLineVariants}
            />

            {/* Dots & Blobs */}
            <motion.div
              className="absolute w-2 h-2 rounded-full -translate-y-1/2 shadow-step-glow bg-accent-green_light left-[33.1%] top-[49.5%]"
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
              variants={dotVariants}
            />
            <motion.div
              className="absolute w-2 h-2 z-[999] rounded-full -translate-y-1/2 shadow-step-glow bg-accent-green_light left-[66.39%] top-[49.5%]"
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
              variants={dotVariants}
            />
            <motion.div
              className="absolute w-[20rem] h-[10rem] blur-3xl rounded-full -translate-y-1/2 bg-gray-600/5 left-[22.1%] top-[40.5%]"
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
              variants={dotVariants}
            />
            <motion.div
              className="absolute w-[20rem] h-[10rem] blur-3xl z-[999] rounded-full -translate-y-1/2 bg-gray-600/5 left-[55.39%] top-[40.5%]"
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
              variants={dotVariants}
            />
          </div>

          {/* Responsive Grid */}
          <motion.div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-1 
              lg:grid-cols-3 
              gap-6 sm:gap-8 md:gap-10 lg:gap-12
            "
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            variants={gridVariants}
          >
            {plans.map((it, idx) => (
              <motion.article
                key={idx}
                className="
                  relative z-10 
                  flex flex-col justify-center items-start text-left
                  px-4 sm:px-6 py-6 sm:py-8 md:py-6
                  md:aspect-auto lg:aspect-square
                "
                variants={getCardVariants(idx)}
                aria-labelledby={`commission-item-${idx}`}
              >
                {/* Eyebrow */}
                <div
                  className="font-semibold uppercase tracking-widest text-neutral-white text-xs sm:text-sm mb-2 sm:mb-3"
                >
                  {it.eyebrow}
                </div>

                {/* Highlight */}
                <h3
                  id={`commission-item-${idx}`}
                  className="text-2xl sm:text-3xl md:text-2xl lg:text-[32px] text-accent-green_light font-semibold uppercase leading-tight mb-3 sm:mb-5"
                  style={{ textShadow: '0 0 12px #5CFFC166' }}
                >
                  {it.highlight}
                </h3>

                {/* Title */}
                <h4
                  className="font-semibold uppercase text-neutral-white mb-1 sm:mb-2 text-sm sm:text-base"
                >
                  {it.title}
                </h4>

                {/* Description */}
                <p
                  className="text-white/60 text-sm sm:text-sm max-w-[44ch] sm:max-w-[32ch] md:max-w-full lg:max-w-[250px]"
                >
                  {it.desc}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}