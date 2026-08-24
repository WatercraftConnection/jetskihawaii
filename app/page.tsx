import type { Metadata } from "next"
import { SiteShell } from "@/components/rd/shell"
import { Hero } from "@/components/rd/hero"
import { Rentals } from "@/components/rd/rentals"
import { Experience } from "@/components/rd/experience"
import { Testimonials } from "@/components/rd/testimonials"
import { Gallery } from "@/components/rd/gallery"
import { ClosingCta } from "@/components/rd/cta"

export const metadata: Metadata = {
  title: "Jet Ski & Kayak Rentals on Oahu's North Shore | The Watercraft Connection",
  description:
    "Family-run jet ski and kayak rentals out of Haleiwa Small Boat Harbor since 1987. 45-minute open-ocean rides, instruction included, no experience needed.",
}

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Rentals />
      <Experience />
      <Testimonials />
      <Gallery />
      <ClosingCta />
    </SiteShell>
  )
}
