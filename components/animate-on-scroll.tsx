"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface AnimateOnScrollProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  duration?: number
  delay?: number
  once?: boolean
  className?: string
}

export function AnimateOnScroll({
  children,
  direction = "up",
  distance = -100,
  duration = 0.4,
  delay = 0,
  once = true,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "0px 0px -100px 0px" })

  // Set the initial position based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { x: 0, y: distance }
      case "down":
        return { x: 0, y: -distance }
      case "left":
        return { x: distance, y: 0 }
      case "right":
        return { x: -distance, y: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getInitialPosition() }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

