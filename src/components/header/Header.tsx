'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Codesandbox, Menu, X, Sparkles } from "lucide-react";
import NavMenu from "./NavMenu";
import SignInButton from "./SignInButton";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform scroll to backdrop blur
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", updateScrolled);
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  // Header animations
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const logoVariants = {
    hidden: { x: -50, opacity: 0, rotate: -180 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Mobile menu animations
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const mobileMenuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Floating particles for logo
  const FloatingParticles = () => (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent-green_light rounded-full opacity-60"
          animate={{
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-50"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Dynamic background with scroll effect */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          style={{
            backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
            background: isScrolled 
              ? 'rgba(0, 0, 0, 0.8)' 
              : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent)'
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
          {/* Logo with enhanced animations */}
          <motion.div
            variants={logoVariants}
            className="relative cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <FloatingParticles /> */}
            <motion.div
              className="uppercase flex items-center gap-2 text-2xl text-neutral-white font-bold relative z-10"
              whileHover={{ textShadow: "0 0 20px rgba(34, 197, 94, 0.5)" }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Image alt="logo" src="/logo.png" width={108} height={28}/>
              </motion.span>
              
              {/* Sparkle effect */}
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* <Sparkles size={12} className="text-accent-green_light" /> */}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation + Actions */}
          <motion.div 
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <NavMenu />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <SignInButton />
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative z-50 p-2 text-neutral-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
            
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 bg-accent-green/20 rounded-full blur-md"
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                scale: isMobileMenuOpen ? 1.5 : 1
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl z-40 md:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-accent-green_light rounded-full"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: Math.random() * 320,
                      y: Math.random() * 100
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              <div className="pt-24 px-6 space-y-6 relative z-10">
                {/* Mobile Navigation Items */}
                <motion.div 
                  className="space-y-4"
                  variants={mobileMenuItemVariants}
                >
                  {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                    <motion.div
                      key={item}
                      variants={mobileMenuItemVariants}
                      whileHover={{ x: 10, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button
                        className="w-full text-left py-3 px-4 text-neutral-white font-semibold text-lg rounded-2xl hover:bg-accent-green/10 transition-all duration-300 relative overflow-hidden group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-accent-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10">{item}</span>
                      </button>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Mobile Sign In Button */}
                <motion.div
                  variants={mobileMenuItemVariants}
                  className="pt-6 border-t border-accent-green/20"
                >
                  <SignInButton />
                </motion.div>

                {/* Social Links or Additional Info */}
                {/* <motion.div
                  variants={mobileMenuItemVariants}
                  className="pt-6 space-y-3"
                >
                  <motion.div
                    className="flex items-center justify-center gap-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-8 h-8 bg-accent-green/20 rounded-full flex items-center justify-center"
                        whileHover={{ 
                          scale: 1.2,
                          backgroundColor: "rgba(34, 197, 94, 0.3)"
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <div className="w-3 h-3 bg-accent-green_light rounded-full" />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div> */}
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
    </>
  );
}



