"use client"
import { useState, useEffect, CSSProperties } from "react"
import { motion } from "framer-motion"
import MobileMenuButton from "./MobileMenuButton"
import MobileMenuOverlay from "./MobileMenuOverlay"
import SignInButton from "./SignInButton"
import NavMenu from "./NavMenu"
import Logo from "./Logo"
import { HeaderProps } from "@/types/header.types"
import { navigationItems } from "@/constants/navigation"

export default function Header({ className = "", logoProps, showSignIn = true }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", updateScrolled)
    return () => window.removeEventListener("scroll", updateScrolled)
  }, [])

  const bgStyle: CSSProperties = {
    background: isScrolled
      ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent)"
      : "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent)",
    backdropFilter: isScrolled ? "blur(4px)" : "blur(0px)",
    transition: "all 500ms",
  }
  

  if (isScrolled) {
    bgStyle.maskImage = "linear-gradient(to bottom, black, transparent)"
    bgStyle.WebkitMaskImage = "linear-gradient(to bottom, black, transparent)"
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-[9999] ${className}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Simple background with scroll effect */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={bgStyle}
        />

        <div className="mx-auto container py-5 flex items-center justify-between relative z-10">
          <Logo {...logoProps} />

          <div className="hidden md:flex items-center gap-14">
            <NavMenu />
            {showSignIn && <SignInButton />}
          </div>

          <MobileMenuButton 
            isOpen={isMobileMenuOpen} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          />
        </div>
      </motion.header>

      <MobileMenuOverlay 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        menuItems={navigationItems} 
      />
    </>
  )
}