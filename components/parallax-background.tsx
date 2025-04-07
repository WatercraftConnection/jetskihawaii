"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"

interface ParallaxBackgroundProps {
  imageSrc: string
  imageAlt: string
  overlayColor?: string
  overlayOpacity?: number
  speed?: number
  mobileBreakpoint?: number
}

export function ParallaxBackground({
  imageSrc,
  imageAlt,
  overlayColor = "bg-primary",
  overlayOpacity = 0.4,
  speed = 0.3,
  mobileBreakpoint = 768,
}: ParallaxBackgroundProps) {
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile(mobileBreakpoint)

  useEffect(() => {
    // Skip parallax effect on mobile
    if (isMobile) return

    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()

        // Only update if the element is in view
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollY(window.scrollY)

          if (imageRef.current) {
            // Calculate how far the top of the element is from the top of the viewport
            const elementTop = rect.top + window.scrollY
            // Calculate the relative scroll position
            const relativeScroll = window.scrollY - elementTop
            // Apply parallax effect
            imageRef.current.style.transform = `translateY(${relativeScroll * speed}px)`
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Call once to set initial position
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed, isMobile])

  // Create the overlay class with the specified color and opacity
  const overlayClass = `absolute inset-0 ${overlayColor}/${Math.round(overlayOpacity * 100)}`

  return (
    <>
      <div ref={containerRef} className="absolute inset-0 overflow-hidden">
        <div
          ref={imageRef}
          className={`absolute inset-0 ${!isMobile ? "will-change-transform" : ""} overflow-hidden`}
          style={{ transform: isMobile ? "none" : undefined }}
        >
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            width={1920}
            height={1080}
            className="w-auto h-auto object-cover min-w-full min-h-full"
            priority
          />
        </div>
      </div>
      <div className={overlayClass}></div>
    </>
  )
}

