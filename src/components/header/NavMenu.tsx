"use client"
import { useState, useRef, useEffect } from "react"
import { navigationItems } from "@/constants/navigation"
import { Button } from "@/components/ui/Button"
import type { NavigationItem } from "@/types/navigation.types"
import { motion } from "framer-motion"

export default function NavMenu() {
  const [activeItem, setActiveItem] = useState(navigationItems[0].label)
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 })
  const navRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  const updateIndicator = (activeLabel: string) => {
    const activeButton = buttonRefs.current[activeLabel]
    const navContainer = navRef.current

    if (activeButton && navContainer) {
      const navRect = navContainer.getBoundingClientRect()
      const buttonRect = activeButton.getBoundingClientRect()

      setIndicatorStyle({
        width: buttonRect.width,
        left: buttonRect.left - navRect.left,
      })
    }
  }

  useEffect(() => {
    updateIndicator(activeItem)
  }, [activeItem])

  useEffect(() => {
    const handleResize = () => updateIndicator(activeItem)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [activeItem])

  const handleNavigate = (item: NavigationItem) => {
    setActiveItem(item.label)

    const sectionId = item.url.replace("#", "")
    const sectionElement = document.getElementById(sectionId)
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav ref={navRef} className="flex gap-1 relative z-[99]">
      <motion.div
        className="absolute top-0 bg-accent-green/10 rounded-2xl backdrop-blur-sm"
        style={{
          height: "100%",
        }}
        animate={{
          width: indicatorStyle.width,
          x: indicatorStyle.left,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        }}
        initial={false}
      />

      {navigationItems.map((item) => (
        <Button
          ref={(el) => {
            buttonRefs.current[item.label] = el
          }}
          size="sm"
          key={item.label}
          variant={activeItem === item.label ? "select" : "ghost"}
          onClick={() => handleNavigate(item)}
          className="relative z-10"
        >
          {item.label}
        </Button>
      ))}
    </nav>
  )
}
