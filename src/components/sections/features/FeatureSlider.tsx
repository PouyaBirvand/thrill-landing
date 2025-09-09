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
      className="relative w-full pt-4 bg-body"
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
              spaceBetween: 20,
            },
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
              <FeatureCard {...feature} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation buttons - responsive sizing */}
     <div className="flex justify-center items-center mt-12 sm:mt-14 md:mt-16 space-x-3 mb-5">
  <button
    onClick={() => swiperRef.current?.slidePrev()}
    className="bg-white/10 hover:bg-[#83FFDA20] hover:border-[#83FFDA40] p-1.5 xs:p-2 sm:p-2 rounded-full border border-white/5 transition-all duration-300 hover:scale-110 group"
    aria-label="Previous feature"
  >
    <ChevronLeft
      size={14}
      className="xs:w-4 xs:h-4 sm:w-4 sm:h-4 text-[#A0A9B0] group-hover:text-[#83FFDA] transition-all duration-300"
    />
  </button>

  <button
    onClick={() => swiperRef.current?.slideNext()}
    className="bg-white/10 hover:bg-[#83FFDA20] hover:border-[#83FFDA40] p-1.5 xs:p-2 sm:p-2 rounded-full border border-white/5 transition-all duration-300 hover:scale-110 group"
    aria-label="Next feature"
  >
    <ChevronRight
      size={14}
      className="xs:w-4 xs:h-4 sm:w-4 sm:h-4 text-[#A0A9B0] group-hover:text-[#83FFDA] transition-all duration-300"
    />
  </button>
</div>
    </motion.div>
  )
}