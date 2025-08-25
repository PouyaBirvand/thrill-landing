"use client"
import { MobileMenuButtonProps } from "@/types/header.types"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function MobileMenuButton({ isOpen, onClick, className = "" }: MobileMenuButtonProps) {
  return (
    <motion.button
      className={`md:hidden relative z-50 p-2 text-neutral-white ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, rotate: -90 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.div>

      {/* Button glow effect */}
      <motion.div
        className="absolute inset-0 bg-accent-green/20 rounded-full blur-md"
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1.5 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}
