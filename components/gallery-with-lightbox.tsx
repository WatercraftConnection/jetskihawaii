"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { ImageLightbox } from "@/components/image-lightbox"

interface GalleryWithLightboxProps {
  images: {
    src: string
    alt: string
  }[]
}

export function GalleryWithLightbox({ images }: GalleryWithLightboxProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const openLightbox = useCallback((index: number) => {
    setSelectedImageIndex(index)
    setLightboxOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, i) => (
          <div key={i} className="gallery-item">
            <button
              onClick={() => openLightbox(i)}
              className="w-full h-full block cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={`View ${image.alt} in lightbox`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </button>
          </div>
        ))}
      </div>

      <ImageLightbox images={images} initialIndex={selectedImageIndex} isOpen={lightboxOpen} onClose={closeLightbox} />
    </>
  )
}

