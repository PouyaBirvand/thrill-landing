"use client"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useInView, AnimatePresence, easeOut, easeIn } from "framer-motion"
import { Navigation, Autoplay } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import { features } from "@/constants/data/features"
import { Swiper, SwiperSlide } from "swiper/react"
import FeatureCard from "./FeatureCard"

export default function FeatureSlider() {
  const swiperRef = useRef<SwiperType>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-150px" })
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null)

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedFeature) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedFeature])

  // Animation variants for modal
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 50,
      transition: {
        duration: 0.3,
        ease: easeOut
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: easeOut,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 50,
      transition: {
        duration: 0.25,
        ease: easeIn
      }
    }
  }

  // Animation variants for modal card content
  const cardContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: easeOut
      }
    }
  }

  // Animation variants for swiper slides
  const slideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: easeOut
      }
    })
  }

  // Animation variants for navigation buttons
  const buttonVariants = {
    rest: { scale: 1, opacity: 0.8 },
    hover: {
      scale: 1.1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: easeOut
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      className="relative w-full pt-20"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: easeOut }}
    >
      <div className="!overflow-visible">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={8}
          slidesPerView={1.05}
          centeredSlides={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 10 },
            375: { slidesPerView: 1.15, spaceBetween: 12 },
            425: { slidesPerView: 1.2, spaceBetween: 14 },
            480: { slidesPerView: 1.3, spaceBetween: 16 },
            640: { slidesPerView: 1.5, spaceBetween: 18 },
            768: { slidesPerView: 1.69, spaceBetween: 15 },
            1024: { slidesPerView: 2.1, spaceBetween: 22 },
            1280: { slidesPerView: 2.6, spaceBetween: 24 },
            1440: { slidesPerView: 2.3, spaceBetween: 0 },
            1600: { slidesPerView: 3.2, spaceBetween: 28 },
            1920: { slidesPerView: 3.2, spaceBetween: 30 },
          }}
          className="!overflow-visible"
          watchSlidesProgress={true}
          watchOverflow={true}
          grabCursor={true}
          allowTouchMove={true}
          resistance={true}
          resistanceRatio={0.85}
          threshold={10}
          longSwipesRatio={0.5}
          longSwipesMs={300}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="h-auto">
              <motion.div
                custom={index}
                variants={slideVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <FeatureCard
                  {...feature}
                  onExpand={() => setSelectedFeature(feature)}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center items-center mt-12 sm:mt-14 md:mt-16 space-x-3 mb-5">
        <motion.button
          onClick={() => swiperRef.current?.slidePrev()}
          className={`flex-shrink-0 relative bg-white/10 hover:bg-[#83FFDA20] hover:border-[#83FFDA40] p-1.5 xs:p-2 sm:p-2 rounded-full border border-white/5 hover:scale-105`}
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          aria-label="Previous feature"
        >
          <ChevronLeft
            size={14}
            color="#858FA660"
            className="xs:w-4 xs:h-4 sm:w-4 sm:h-4"
          />
        </motion.button>

        <motion.button
          onClick={() => swiperRef.current?.slideNext()}
          className={`flex-shrink-0 relative bg-white/10 hover:bg-[#83FFDA20] hover:border-[#83FFDA40] p-1.5 xs:p-2 sm:p-2 rounded-full border border-white/5 hover:scale-105`}
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          aria-label="Next feature"
        >
          <ChevronRight
            size={14}
            color="#858FA660"
            className="xs:w-4 xs:h-4 sm:w-4 sm:h-4"
          />
        </motion.button>
      </div>

      {/* Modal Overlay */}
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
    </motion.div>
  )
}