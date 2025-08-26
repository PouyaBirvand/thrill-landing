"use client"

import type { LogoProps } from "@/types/header.types"
import { motion } from "framer-motion"

export default function Logo({ className = "", onClick }: LogoProps) {
  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClick}
    >
      <div className="uppercase flex items-center gap-2 text-2xl text-white font-bold relative z-10">
        <img
          alt="Logo"
          src="/logo.png"
          className="w-[108px] h-auto"
        />
      </div>
    </motion.div>
  )
}
