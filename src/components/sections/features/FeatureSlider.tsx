"use client"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
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
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640) // sm breakpoint
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return (
    <motion.div
      ref={ref}
      className="relative w-full bg-body pt-6 md:pt-8"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="!overflow-visible">
        {/* Navigation buttons - only show on non-mobile */}
        {!isMobile && (
          <div className="flex justify-center items-center space-x-3 mb-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-white/10 hover:bg-[#83FFDA20] hover:border-[#83FFDA40] p-2 rounded-full border border-white/5 transition-all duration-300 hover:scale-110 group"
              aria-label="Previous feature"
            >
              <ChevronLeft
                size={16}
                className="text-[#A0A9B0] group-hover:text-[#83FFDA] transition-all duration-300"
              />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-white/10 hover:bg-[#83FFDA20] hover:border-[#83FFDA40] p-2 rounded-full border border-white/5 transition-all duration-300 hover:scale-110 group"
              aria-label="Next feature"
            >
              <ChevronRight
                size={16}
                className="text-[#A0A9B0] group-hover:text-[#83FFDA] transition-all duration-300"
              />
            </button>
          </div>
        )}

        {/* Mobile: Stack cards vertically */}
        {isMobile ? (
          <div className="flex flex-col gap-4 px-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <FeatureCard index={index} {...feature} />
              </motion.div>
            ))}
          </div>
        ) : (
          /* Desktop/Tablet: Use Swiper */
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={8}
            slidesPerView={1.05}
            centeredSlides={false}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            breakpoints={{
              // تبلت عمودی (640px+)
              640: {
                slidesPerView: 1.7,
                spaceBetween: 18,
              },
              // تبلت افقی (768px+)
              768: {
                slidesPerView: 1.69,
                spaceBetween: 20,
              },
              // دسکتاپ کوچک (1024px+)
              1024: {
                slidesPerView: 2.3,
                spaceBetween: 20,
              },
              // دسکتاپ متوسط (1280px+)
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              // دسکتاپ بزرگ (1440px+)
              1440: {
                slidesPerView: 2.7,
                spaceBetween: 20,
              },
              // دسکتاپ خیلی بزرگ (1600px+)
              1600: {
                slidesPerView: 3.2,
                spaceBetween: 20,
              },
              // نمایشگرهای فوق عریض (1920px+)
              1920: {
                slidesPerView: 3.2,
                spaceBetween: 20,
              },
            }}
            className="!overflow-visible"
            watchSlidesProgress={true}
            watchOverflow={true}
            grabCursor={true}
            allowTouchMove={true}
            // تنظیمات اضافی برای تجربه بهتر
            resistance={true}
            resistanceRatio={0.85}
            threshold={10}
            longSwipesRatio={0.5}
            longSwipesMs={300}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index} className="h-auto">
                <FeatureCard index={index} {...feature} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </motion.div>
  )
}