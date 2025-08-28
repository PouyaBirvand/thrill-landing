"use client"

import { Plus } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface FeatureModalProps {
  title: string
  description: string
  image: string
  more_detail?: string
  stats: {
    primary: { value: string; label: string }
    secondary: { value: string; label: string }
  }
  onClose: () => void
}

export default function FeatureModal({ title, description, image, more_detail, stats, onClose }: FeatureModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* بک‌گراند بلور */}
        <motion.div
          className="absolute inset-0 bg-black/40 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* محتوای مودال */}
        <motion.div
          className="relative w-[90%] max-w-[600px] bg-[#1C1C1C] rounded-3xl p-6 sm:p-8 shadow-2xl"
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 40 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* دکمه بستن */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-[#858FA640] p-2 rounded-full border border-[#858FA640] hover:scale-105 transition-transform duration-200 rotate-45"
          >
            <Plus size={20} color="#83FFDA" />
          </button>

          {/* تصویر */}
          <div className="w-full h-[220px] sm:h-[260px] rounded-xl relative overflow-hidden mb-6">
            <Image
              alt="feat"
              src={image || "/placeholder.svg"}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* عنوان و توضیحات */}
          <h2 className="text-neutral-white font-bold uppercase text-xl sm:text-2xl mb-4">
            {title}
          </h2>
          <p className="text-neutral-lightGray text-sm sm:text-base mb-3 leading-relaxed">
            {description}
          </p>
          {more_detail && (
            <p className="text-neutral-lightGray text-sm sm:text-base mb-6 leading-relaxed">
              {more_detail}
            </p>
          )}

          {/* آمار */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <span className="text-white font-bold text-2xl sm:text-3xl">{stats.primary.value}</span>
              <p className="text-neutral-lightGray text-sm sm:text-base">{stats.primary.label}</p>
            </div>
            <div>
              <span className="text-white font-bold text-2xl sm:text-3xl">{stats.secondary.value}</span>
              <p className="text-neutral-lightGray text-sm sm:text-base">{stats.secondary.label}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
