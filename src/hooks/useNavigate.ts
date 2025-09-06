"use client"
import { useState, useEffect } from "react"
import type { NavigationItem } from "@/types/navigation.types"

export function useNavigate(items: NavigationItem[], offset: number = 0) {
  const [activeItem, setActiveItem] = useState("")

  // تابع برای اسکرول به سکشن
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

  // رصد کردن اسکرول و تغییر activeItem
  useEffect(() => {
    const observerOptions = {
      root: null, // ویوپورت
      rootMargin: "0px",
      threshold: 0.5, // وقتی 50٪ از سکشن در ویوپورت باشه
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      let isAnySectionVisible = false

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isAnySectionVisible = true
          const sectionId = entry.target.id
          const matchingItem = items.find((item) => item.url === `#${sectionId}`)
          if (matchingItem) {
            setActiveItem(matchingItem.label)
          }
        }
      })

      // اگر هیچ سکشنی در ویوپورت نیست، activeItem رو خالی کن
      if (!isAnySectionVisible) {
        setActiveItem("")
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // اضافه کردن تمام سکشن‌ها به observer
    items.forEach((item) => {
      if (item.url.startsWith("#")) {
        const sectionId = item.url.replace("#", "")
        const section = document.getElementById(sectionId)
        if (section) {
          observer.observe(section)
        }
      }
    })

    // پاکسازی observer هنگام unmount
    return () => {
      items.forEach((item) => {
        if (item.url.startsWith("#")) {
          const sectionId = item.url.replace("#", "")
          const section = document.getElementById(sectionId)
          if (section) {
            observer.unobserve(section)
          }
        }
      })
    }
  }, [items])

  return { activeItem, navigate }
}