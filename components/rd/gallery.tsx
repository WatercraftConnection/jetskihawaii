"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { Expand } from "lucide-react"
import { Wrap, SectionHeading } from "@/components/rd/ui"
import { ImageLightbox } from "@/components/image-lightbox"
import { galleryContent } from "@/lib/home-data"

/**
 * Varied grid rather than a uniform 4x3 contact sheet — two large anchors
 * carry the strongest frames, the rest support. Weak frames from the old
 * twelve (the kiosk shot, the duplicate flat-water skis) are cut in the data.
 */
export function Gallery() {
  const { eyebrow, heading, intro, images } = galleryContent
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = useCallback((i: number) => {
    setIndex(i)
    setOpen(true)
  }, [])

  return (
    <section className="bg-[#f6f9fb] py-16 sm:py-24">
      <Wrap>
        <SectionHeading eyebrow={eyebrow} title={heading}>
          {intro}
        </SectionHeading>

        <div className="rd-gallery">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => openAt(i)}
              aria-label={`View: ${image.alt}`}
              className="group relative overflow-hidden rounded-[12px] rd-focus"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-abyss/0 transition-colors duration-300 group-hover:bg-abyss/30" />
              <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-btn bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <Expand className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>
      </Wrap>

      <ImageLightbox images={images} initialIndex={index} isOpen={open} onClose={() => setOpen(false)} />
    </section>
  )
}
