"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function MotionEffects() {
  const pathname = usePathname()

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main h1, main h2, main h3, main .eyebrow, main .section-index, main .large-copy"
      )
    )

    if (reduced) {
      elements.forEach((element) => element.classList.add("is-revealed"))
      return
    }

    elements.forEach((element, index) => {
      element.classList.add("text-reveal")
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    const handleAnchor = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]')
      if (!link) return
      const href = link.getAttribute("href")
      if (!href || href === "#") return
      const target = document.querySelector<HTMLElement>(href)
      if (!target) return
      event.preventDefault()
      const top = target.getBoundingClientRect().top + window.scrollY - 68
      window.scrollTo({ top, behavior: "smooth" })
      history.replaceState(null, "", href)
    }
    document.addEventListener("click", handleAnchor)
    return () => document.removeEventListener("click", handleAnchor)
  }, [])

  return null
}
