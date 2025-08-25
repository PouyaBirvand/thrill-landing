"use client"
import { LogoProps } from "@/types/header.types"
import { easeOut, motion } from "framer-motion"
import Image from "next/image"

const logoVariants = {
  hidden: { x: -50, opacity: 0, rotate: -180 },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
}

export default function Logo({ className = "", onClick }: LogoProps) {
  return (
    <motion.div
      variants={logoVariants}
      className={`relative cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <motion.div
        className="uppercase flex items-center gap-2 text-2xl text-neutral-white font-bold relative z-10"
        whileHover={{ textShadow: "0 0 20px rgba(34, 197, 94, 0.5)" }}
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Image alt="logo" src="/logo.png" width={108} height={28} />
        </motion.span>

        {/* Sparkle effect */}
        <motion.div
          className="absolute -top-1 -right-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {/* <Sparkles size={12} className="text-accent-green_light" /> */}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
