"use client"
import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence, easeOut, easeIn, useScroll, useTransform } from "framer-motion"
import { features } from "@/constants/data/features"
import FeatureCard from "./FeatureCard"
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/ScrollVelocityRow"
import GlareHover from "@/components/ui/GlareHover"

export default function FeatureSlider() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null)

  // اسکرول پروگرس
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // از وقتی سکشن وارد میشه تا وقتی خارج بشه
  })

  // انیمیشن‌ها
  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1], // نقاط اسکرول: شروع، نزدیک مرکز، مرکز، آخر
    [0, 1, 1, 0]      // مقادیر opacity: دور -> مرکز -> دور
  )
  const sectionY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [30, 0, 0, -50])
  const sectionScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.9])


  // جلوگیری از اسکرول بادی وقتی مودال بازه
  useEffect(() => {
    if (selectedFeature) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedFeature])

  // انیمیشن مودال
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50, transition: { duration: 0.3, ease: easeOut } },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: easeOut, when: "beforeChildren", staggerChildren: 0.1 },
    },
    exit: { opacity: 0, scale: 0.95, y: 50, transition: { duration: 0.25, ease: easeIn } },
  }

  const cardContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } },
  }

  return (
    <section ref={sectionRef} className="relative w-full pt-18">
      {/* ردیف کارت‌ها با اسکرول انیمیشن */}
      <motion.div
        style={{ opacity: sectionOpacity, y: sectionY, scale: sectionScale }}
        className="w-full"
      >
        <ScrollVelocityContainer className="w-full">
          <ScrollVelocityRow baseVelocity={8} direction={1}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="mx-3 2xl:w-full xl:w-full lg:w-[24rem] md:w-[22rem] sm:w-[20rem] w-[22rem]"
              >
                <GlareHover>
                  <FeatureCard {...feature} onExpand={() => setSelectedFeature(feature)} />
                </GlareHover>
              </div>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </motion.div>

      {/* مودال */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[10000] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              className="relative max-w-[490px] w-full m-4 sm:m-8"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div variants={cardContentVariants}>
                <FeatureCard
                  {...selectedFeature}
                  isExpanded={true}
                  onClose={() => setSelectedFeature(null)}
                  isModal={true}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
