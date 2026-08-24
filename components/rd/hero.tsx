"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Phone, ArrowRight } from "lucide-react"
import { Button, Wrap } from "@/components/rd/ui"
import { heroContent } from "@/lib/home-data"
import { cn } from "@/lib/utils"

/**
 * Hero: background video under a layered gradient mesh.
 *
 * The still (hero.webp) paints immediately and the video fades in once it can
 * actually play, so the first frame is never an empty blue box while 34MB of
 * mp4 streams in. Composition is deliberately asymmetric — copy left, stat rail
 * right — instead of the centred stack it replaces.
 */
export function Hero() {
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const reveal = () => setVideoReady(true)

    // A small file served from disk (or cache) can finish loading before React
    // hydrates and attaches listeners — the event fires into the void and the
    // element stays at opacity-0 forever. Check state directly on mount.
    if (video.readyState >= 2) reveal()

    video.addEventListener("loadeddata", reveal)
    video.addEventListener("canplay", reveal)
    video.addEventListener("playing", reveal)

    // Some browsers ignore the autoplay attribute but honour a programmatic
    // play() on a muted element. If it's still refused, the poster stands in.
    void video.play().catch(() => {})

    // Never let the fade be the reason nothing is visible.
    const failsafe = window.setTimeout(reveal, 2500)

    return () => {
      video.removeEventListener("loadeddata", reveal)
      video.removeEventListener("canplay", reveal)
      video.removeEventListener("playing", reveal)
      window.clearTimeout(failsafe)
    }
  }, [])

  return (
    <section className="rd-grain relative isolate -mt-[68px] flex min-h-[clamp(560px,86vh,860px)] items-center overflow-hidden">
      {/* poster still — paints instantly */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_58%]"
        />
      </div>

      {/* background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero.webp"
        aria-hidden="true"
        // loadeddata fires as soon as the first frame is decodable — canplay
        // waits for enough buffer to play through, which held the reveal back.
        onLoadedData={() => setVideoReady(true)}
        className={cn(
          "absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-1000",
          videoReady ? "opacity-100" : "opacity-0",
        )}
      >
        <source src="/bg-mov2.mp4" type="video/mp4" />
      </video>

      {/* gradient mesh */}
      <div className="rd-mesh absolute inset-0 -z-10" />
      {/* handoff into the next section */}
      <div className="rd-fade-bottom absolute inset-x-0 bottom-0 -z-10 h-56" />

      <Wrap className="relative z-10 w-full">
        <div className="grid items-end gap-x-14 gap-y-9 pb-12 pt-32 sm:gap-y-12 sm:pb-16 sm:pt-40 lg:grid-cols-[minmax(0,1fr)_auto]">
          {/* copy */}
          <div className="max-w-[660px]">
            <p className="mb-4 font-display text-[0.66rem] font-bold uppercase tracking-[0.3em] text-white/60 sm:mb-6 sm:text-[0.74rem] sm:tracking-[0.34em]">
              {heroContent.eyebrow}
            </p>

            <h1 className="mb-4 font-display text-[clamp(2.15rem,8vw,4.6rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-white sm:mb-5">
              {heroContent.headline}
              <br />
              <span className="text-sun">{heroContent.headlineAccent}</span>
            </h1>

            <p className="mb-7 max-w-[52ch] text-[0.97rem] leading-relaxed text-white/80 sm:mb-9 sm:text-[1.06rem]">
              {heroContent.sub}
            </p>

            {/* stacked and full-bleed on phones — these are the tap targets */}
            <div className="flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:gap-3.5">
              <Button href={heroContent.primaryCta.href} size="lg" className="w-full sm:w-auto">
                {heroContent.primaryCta.text}
                <ArrowRight className="h-[18px] w-[18px]" />
              </Button>
              <Button
                href={heroContent.secondaryCta.href}
                variant="bordered"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                {heroContent.secondaryCta.text}
              </Button>
            </div>

            <p className="mt-4 text-[0.8rem] leading-relaxed text-white/55 sm:mt-5 sm:text-[0.84rem]">
              {heroContent.note}
            </p>
          </div>

          {/* stat rail — hairline-separated, right aligned on desktop */}
          {/* Three columns on phones so the labels have room to wrap instead of
              colliding; hairline-separated vertical rail from lg up. */}
          <aside className="grid grid-cols-3 gap-x-4 border-t border-white/12 pt-5 lg:flex lg:min-w-[240px] lg:flex-col lg:gap-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {heroContent.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn("min-w-0", "lg:py-4", i < heroContent.stats.length - 1 && "lg:border-b lg:border-white/12")}
              >
                <div className="font-display text-[1.15rem] font-bold leading-none tracking-[-0.02em] text-white sm:text-[1.35rem] lg:text-[1.5rem]">
                  {stat.value}
                  {stat.unit ? (
                    <span className="ml-1 text-[0.78rem] font-semibold text-white/65 sm:text-[0.9rem]">
                      {stat.unit}
                    </span>
                  ) : null}
                </div>
                <div className="mt-1.5 text-[0.6rem] font-semibold uppercase leading-snug tracking-[0.1em] text-white/50 sm:text-[0.66rem] lg:text-[0.7rem] lg:tracking-[0.14em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </Wrap>
    </section>
  )
}
