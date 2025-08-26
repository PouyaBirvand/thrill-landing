"use client"
import { useState } from "react"
import type { NavigationItem } from "@/types/navigation.types"

export function useNavigate(items: NavigationItem[], offset: number = 80) {
  const [activeItem, setActiveItem] = useState(items[0]?.label ?? "")

  const navigate = (item: NavigationItem) => {
    setActiveItem(item.label)

    if (item.url.startsWith("#")) {
      // سکشن داخلی
      const sectionId = item.url.replace("#", "")
      const section = document.getElementById(sectionId)
      if (section) {
        const y = section.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top: y, behavior: "smooth" })
      }
    } else if (item.url.startsWith("http")) {
      // لینک خارجی
      window.open(item.url, "_blank")
    } else {
      // مسیر داخلی (Next.js route)
      window.location.href = item.url
    }
  }

  return { activeItem, navigate }
}
