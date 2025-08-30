"use client"
import { motion, AnimatePresence, easeOut, easeInOut } from "framer-motion"
import SignInButton from "./SignInButton"
import { MenuItem, MobileMenuOverlayProps } from "@/types/header.types"
import { useNavigate } from "@/hooks/useNavigate"

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
      staggerChildren: 0.1,
    },
  },
}

const mobileMenuItemVariants = {
  closed: { y: -50, opacity: 0 },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
}

const defaultMenuItems: MenuItem[] = [
  { label: "Home", url: "#home" },
  { label: "About", url: "#about" },
  { label: "Services", url: "#services" },
  { label: "Contact", url: "#contact" },
]

export default function MobileMenuOverlay({
  isOpen,
  onClose,
  menuItems = defaultMenuItems,
}: MobileMenuOverlayProps) {
  const { navigate } = useNavigate(menuItems)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 w-full backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Mobile Menu Panel */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full bg-gradient-to-b from-black/95 z-[9998] to-black/90 backdrop-blur-xl md:hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="pt-24 px-6 space-y-6 relative z-10">
              {/* Mobile Navigation Items */}
              <motion.div className="space-y-4" variants={mobileMenuItemVariants}>
                {menuItems.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={mobileMenuItemVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      className="w-full text-left py-3 px-4 text-neutral-white font-semibold text-lg rounded-2xl hover:bg-accent-green/10 transition-all duration-300 relative overflow-hidden group"
                      onClick={() => {
                        navigate(item)
                        onClose()
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile Sign In Button */}
              <motion.div variants={mobileMenuItemVariants} className="pt-6 border-t border-accent-green/20">
                <SignInButton onClick={onClose} size="full" />

              </motion.div>
            </div>

            {/* Border animation */}
            <motion.div
              className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-accent-green to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}