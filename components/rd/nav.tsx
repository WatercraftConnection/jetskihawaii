"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ArrowRight } from "lucide-react"
import { Button, Wrap } from "@/components/rd/ui"
import { siteMeta } from "@/lib/home-data"
import { cn } from "@/lib/utils"

/**
 * Sticky navbar, HeroUI Navbar pattern: translucent, backdrop-blurred, hairline
 * bottom border, transparent over the hero until you scroll.
 *
 * The mobile drawer is absolutely positioned off the header so it *overlays*
 * the page instead of pushing it down, and the page scroll locks while it's
 * open.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll behind the drawer.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  // Escape closes.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const close = useCallback(() => setOpen(false), [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-white/10 bg-abyss/85 backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent",
      )}
    >
      <Wrap>
        <div className="flex h-[68px] items-center gap-8">
          <Link href="/" className="flex shrink-0 items-center gap-2.5 text-white no-underline rd-focus">
            <Image
              src="/logo-main.png"
              alt=""
              width={34}
              height={34}
              className="h-[30px] w-[30px] object-contain sm:h-[34px] sm:w-[34px]"
            />
            <span className="font-display text-[0.72rem] font-bold uppercase leading-[1.15] tracking-[0.14em] sm:text-[0.8rem]">
              Watercraft
              <br />
              Connection
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-8 lg:flex">
            {siteMeta.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.9rem] font-medium text-white/75 no-underline transition-colors hover:text-white rd-focus"
              >
                {item.text}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-4 lg:ml-0">
            {/* full number on desktop, icon-only tap target on phones */}
            <a
              href={`tel:${siteMeta.phone}`}
              aria-label={`Call ${siteMeta.phoneFormatted}`}
              className="hidden items-center gap-2 whitespace-nowrap text-[0.9rem] font-semibold text-white no-underline transition-colors hover:text-sun md:flex rd-focus"
            >
              <Phone className="h-[15px] w-[15px]" />
              {siteMeta.phoneFormatted}
            </a>
            <a
              href={`tel:${siteMeta.phone}`}
              aria-label={`Call ${siteMeta.phoneFormatted}`}
              className="flex h-10 w-10 items-center justify-center rounded-btn border border-white/20 text-white transition-colors hover:bg-white/10 md:hidden rd-focus"
            >
              <Phone className="h-[18px] w-[18px]" />
            </a>

            <Button href="/booking" size="sm" className="hidden md:inline-flex">
              Book now
            </Button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-btn text-white transition-colors hover:bg-white/10 lg:hidden rd-focus"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Wrap>

      {/* backdrop — sits under the drawer, over the page */}
      <div
        onClick={close}
        aria-hidden="true"
        className={cn(
          "fixed inset-x-0 bottom-0 top-[68px] -z-10 bg-abyss/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* drawer — absolute so it overlays the page rather than displacing it */}
      <div
        className={cn(
          "absolute inset-x-0 top-full origin-top overflow-hidden border-b border-white/10 bg-abyss/95 shadow-2xl backdrop-blur-xl transition-[transform,opacity] duration-300 lg:hidden",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0",
        )}
      >
        <Wrap>
          <nav className="flex flex-col py-4">
            {siteMeta.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex items-center justify-between border-b border-white/[0.07] px-1 py-3.5 text-[1.02rem] font-medium text-white/85 no-underline transition-colors hover:text-white rd-focus"
              >
                {item.text}
                <ArrowRight className="h-4 w-4 text-white/30" />
              </Link>
            ))}
            <div className="mt-5 flex flex-col gap-2.5 pb-2">
              <Button href="/booking" size="lg" className="w-full">
                Book now
              </Button>
              <Button href={`tel:${siteMeta.phone}`} variant="bordered" size="lg" className="w-full">
                <Phone className="h-4 w-4" />
                {siteMeta.phoneFormatted}
              </Button>
            </div>
          </nav>
        </Wrap>
      </div>
    </header>
  )
}

/**
 * Sticky action bar, phones only. This business converts on impulse — someone
 * standing in Haleiwa deciding right now — so call and book stay reachable
 * without scrolling back to the header.
 */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-abyss/90 backdrop-blur-xl md:hidden">
      <div
        className="flex gap-2.5 px-4 py-3"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <Button href={`tel:${siteMeta.phone}`} variant="bordered" className="flex-1">
          <Phone className="h-4 w-4" />
          Call
        </Button>
        <Button href="/booking" className="flex-[1.4]">
          Book now
        </Button>
      </div>
    </div>
  )
}
