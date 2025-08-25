"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import MobileMenuButton from "./MobileMenuButton"
import MobileMenuOverlay from "./MobileMenuOverlay"
import SignInButton from "./SignInButton"
import NavMenu from "./NavMenu"
import Logo from "./Logo"
import { HeaderProps } from "@/types/header.types"

export default function Header({ className = "", menuItems, logoProps, showSignIn = true }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", updateScrolled)
    return () => window.removeEventListener("scroll", updateScrolled)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 ${className}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Simple background with scroll effect */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: isScrolled
              ? "rgba(0, 0, 0, 0.8)"
              : "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent)",
            backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
          }}
        />

        {/* Simple border */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 w-full h-px bg-accent-green/50" />
        )}

        <div className="mx-auto container pt-9 pb-4 flex items-center justify-between relative z-10">
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
        menuItems={menuItems} 
      />
    </>
  )
}