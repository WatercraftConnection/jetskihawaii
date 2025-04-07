"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

interface HeroParallaxProps {
  imageSrc: string
  imageAlt: string
}

export function HeroParallax({ imageSrc, imageAlt }: HeroParallaxProps) {
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top } = containerRef.current.getBoundingClientRect()
        // Only update scrollY if the element is in view
        if (top < window.innerHeight && top > -window.innerHeight) {
          setScrollY(window.scrollY)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Call once to set initial position
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate transform values based on scroll position
  const yTransform = scrollY * 0.3 // Adjust the multiplier to control parallax intensity
  const scaleValue = 1 + scrollY * 0.0005 // Subtle zoom effect

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${yTransform}px) scale(${scaleValue})`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
          <source src="/bg-mov2.mp4" type="video/mp4" />
        </video>
        {/* <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover opacity-40" priority /> */}
      </div>
    </div>
  )
}

