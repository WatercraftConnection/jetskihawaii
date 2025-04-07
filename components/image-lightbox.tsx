"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ImageLightboxProps {
  images: { src: string; alt: string }[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export function ImageLightbox({ images, initialIndex, isOpen, onClose }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  // Reset to initial index when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
    }
  }, [isOpen, initialIndex])

  const navigateNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const navigatePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        navigatePrev()
      } else if (e.key === "ArrowRight") {
        navigateNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, navigatePrev, navigateNext, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Navigation buttons */}
      <button
        onClick={navigatePrev}
        className="absolute left-4 z-50 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={navigateNext}
        className="absolute right-4 z-50 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Image container */}
      <div className="relative w-full h-full max-w-5xl max-h-[80vh] flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>
      </div>

      {/* Image counter */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

