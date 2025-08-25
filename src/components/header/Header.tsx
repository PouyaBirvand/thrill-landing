"use client"
import { useState, useEffect } from "react"
import { easeOut, motion, useScroll, useTransform } from "framer-motion"
import MobileMenuButton from "./MobileMenuButton"
import MobileMenuOverlay from "./MobileMenuOverlay"
import SignInButton from "./SignInButton"
import NavMenu from "./NavMenu"
import Logo from "./Logo"
import { HeaderProps } from "@/types/header.types"


const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
      staggerChildren: 0.1,
    },
  },
}

export default function Header({ className = "", menuItems, logoProps, showSignIn = true }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Transform scroll to backdrop blur
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20])
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.8])

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", updateScrolled)
    return () => window.removeEventListener("scroll", updateScrolled)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 ${className}`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Dynamic background with scroll effect */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          style={{
            backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
            background: isScrolled
              ? "rgba(0, 0, 0, 0.8)"
              : "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent)",
          }}
        />

        {/* Animated border */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-green/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        <div className="mx-auto container pt-9 pb-4 flex items-center justify-between relative z-10">
          {/* Logo */}
          <Logo {...logoProps} />

          {/* Desktop Navigation + Actions */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <NavMenu />
            {showSignIn && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <SignInButton />
              </motion.div>
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <MobileMenuButton isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} menuItems={menuItems} />
    </>
  )
}
