"use client"

import { useState, useEffect } from "react"

export function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if window is defined (to avoid SSR issues)
    if (typeof window !== "undefined") {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < breakpoint)
      }

      // Initial check
      checkIfMobile()

      // Add event listener for window resize
      window.addEventListener("resize", checkIfMobile)

      // Clean up
      return () => window.removeEventListener("resize", checkIfMobile)
    }
  }, [breakpoint])

  return isMobile
}

