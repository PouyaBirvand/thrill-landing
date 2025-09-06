"use client"
import { useState, useEffect } from "react"
import type { NavigationItem } from "@/types/navigation.types"

export function useNavigate(items: NavigationItem[], offset: number = 0) {
  const [activeItem, setActiveItem] = useState("")

  const navigate = (item: NavigationItem) => {
    setActiveItem(item.label)

    if (item.url.startsWith("#")) {
      const sectionId = item.url.replace("#", "")
      const section = document.getElementById(sectionId)
      if (section) {
        const y = section.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top: y, behavior: "smooth" })
      }
    } else if (item.url.startsWith("http")) {
      window.open(item.url, "_blank")
    } else {
      window.location.href = item.url
    }
  }

  useEffect(() => {
    const observerOptions = {
      root: null, 
      rootMargin: "0px",
      threshold: 0.5, 
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

      if (!isAnySectionVisible) {
        setActiveItem("")
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    items.forEach((item) => {
      if (item.url.startsWith("#")) {
        const sectionId = item.url.replace("#", "")
        const section = document.getElementById(sectionId)
        if (section) {
          observer.observe(section)
        }
      }
    })

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