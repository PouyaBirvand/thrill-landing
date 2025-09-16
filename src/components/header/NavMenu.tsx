import { useRef, useEffect, useState } from "react"
import { navigationItems } from "@/constants/navigation"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { useNavigate } from "@/hooks/useNavigate"

export default function NavMenu() {
  const { activeItem, navigate } = useNavigate(navigationItems)
  const navRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  const [displayedActiveItem, setDisplayedActiveItem] = useState(activeItem)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (activeItem !== displayedActiveItem) {
      timeout = setTimeout(() => {
        setDisplayedActiveItem(activeItem)
      }, 300) 
    } else {
      setDisplayedActiveItem(activeItem) 
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
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
      />

      {navigationItems.map((item) => (
        <Button
          ref={(el) => {
            buttonRefs.current[item.label] = el
          }}
          size="sm"
          key={item.label}
          variant={displayedActiveItem === item.label ? "select" : "ghost"}
          onClick={() => navigate(item)}
          className="relative z-10"
        >
          {item.label}
        </Button>
      ))}
    </motion.nav>
  )
}