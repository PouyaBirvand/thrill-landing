"use client"
import { useRef } from "react"
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

  return (
    <motion.div
      ref={ref}
      className="relative w-full pt-20"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
            // موبایل کوچک (320px+)
            320: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
            // موبایل متوسط (375px+) 
            375: {
              slidesPerView: 1.15,
              spaceBetween: 12,
            },
            // موبایل بزرگ (425px+)
            425: {
              slidesPerView: 1.2,
              spaceBetween: 14,
            },
            // موبایل افقی / تبلت کوچک (480px+)
            480: {
              slidesPerView: 1.3,
              spaceBetween: 16,
            },
            // تبلت عمودی (640px+)
            640: {
              slidesPerView: 1.5,
              spaceBetween: 18,
            },
            // تبلت افقی (768px+)
            768: {
              slidesPerView: 1.69,
              spaceBetween: 15,
            },
            // دسکتاپ کوچک (1024px+)
            1024: {
              slidesPerView: 2.1,
              spaceBetween: 22,
            },
            // دسکتاپ متوسط (1280px+)
            1280: {
              slidesPerView: 2.6,
              spaceBetween: 24,
            },
            // دسکتاپ بزرگ (1440px+)
            1440: {
              slidesPerView: 2.7,
              spaceBetween: 26,
            },
            // دسکتاپ خیلی بزرگ (1600px+)
            1600: {
              slidesPerView: 3.2,
              spaceBetween: 28,
            },
            // نمایشگرهای فوق عریض (1920px+)
            1920: {
              slidesPerView: 3.2,
              spaceBetween: 30,
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
              <FeatureCard {...feature} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation buttons - responsive sizing */}
      <div className="flex justify-center items-center mt-12 sm:mt-14 md:mt-16 space-x-3 mb-5">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-[#858FA640] hover:bg-[#858FA680] p-2 sm:p-2.5 md:p-3 rounded-full border border-[#858FA640] transition-all duration-200 hover:scale-105 backdrop-blur-sm group"
          aria-label="Previous feature"
        >
          <ChevronLeft 
            size={18} 
            className="sm:w-5 sm:h-5 md:w-5 md:h-5 text-[#858FA660] group-hover:text-[#858FA680] transition-colors duration-200" 
          />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-[#858FA640] hover:bg-[#858FA680] p-2 sm:p-2.5 md:p-3 rounded-full border border-[#858FA640] transition-all duration-200 hover:scale-105 backdrop-blur-sm group"
          aria-label="Next feature"
        >
          <ChevronRight 
            size={18} 
            className="sm:w-5 sm:h-5 md:w-5 md:h-5 text-[#858FA660] group-hover:text-[#858FA680] transition-colors duration-200" 
          />
        </button>
      </div>
    </motion.div>
  )
}