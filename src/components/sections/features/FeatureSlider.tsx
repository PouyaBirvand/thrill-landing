"use client"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import FeatureCard from "./FeatureCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import { features } from "@/constants/data/features"

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
      {/* Container for the slider that allows right overflow */}
      <div className="!overflow-visible">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1.2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          breakpoints={{
            480: {
              slidesPerView: 1.3,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 1.8,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 3.4,
              spaceBetween: 15,
            },
          }}
          className="!overflow-visible"
          watchSlidesProgress={true}
          watchOverflow={true}
          grabCursor={true}
          allowTouchMove={true}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="h-auto">
              <FeatureCard {...feature} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center items-center mt-16 space-x-2 mb-5">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-[#858FA640] hover:bg-[#858FA680] p-1 rounded-full border border-[#858FA640] transition-all duration-200 hover:scale-105 backdrop-blur-sm"
          aria-label="Previous feature"
        >
          <ChevronLeft size={22} color="#858FA660" className="opacity-80" />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-[#858FA640] hover:bg-[#858FA680] p-1 rounded-full border border-[#858FA640] transition-all duration-200 hover:scale-105 backdrop-blur-sm"
          aria-label="Next feature"
        >
          <ChevronRight size={22} color="#858FA660" className="opacity-80" />
        </button>
      </div>
    </motion.div>
  )
}