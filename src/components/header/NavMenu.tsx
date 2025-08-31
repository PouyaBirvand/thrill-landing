import { useRef, useEffect, useState } from "react"
import { navigationItems } from "@/constants/navigation"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { useNavigate } from "@/hooks/useNavigate"

export default function NavMenu() {
  const { activeItem, navigate } = useNavigate(navigationItems)
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

  return (
    <motion.nav
      ref={navRef}
      className="flex gap-1 relative z-[99]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className="absolute top-0 bg-accent-green/10 rounded-2xl transition-all duration-300 ease-out"
        style={{
          height: "100%",
          width: indicatorStyle.width,
          transform: `translateX(${indicatorStyle.left}px)`,
        }}
      />

      {navigationItems.map((item) => (
        <Button
          ref={(el) => {
            buttonRefs.current[item.label] = el
          }}
          size="sm"
          key={item.label}
          variant={activeItem === item.label ? "select" : "ghost"}
          onClick={() => navigate(item)}
          className="relative z-10 hover:bg-primary-300 rounded-2xl"
        >
          {item.label}
        </Button>
      ))}
    </motion.nav>
  )
}