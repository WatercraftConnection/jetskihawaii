import type { Metadata } from "next"
import { Phone, Clock, Users, CreditCard, CalendarCheck, Info } from "lucide-react"
import { SiteShell } from "@/components/rd/shell"
import { PageHero } from "@/components/rd/page-hero"
import { Button, Wrap, Chip, Eyebrow } from "@/components/rd/ui"
import { bookingContent, companyInfo } from "@/lib/site-data"

export const metadata: Metadata = {
  alternates: { canonical: "/booking" },
  title: "Book a Rental",
  description:
    "Reserve a jet ski or kayak at Haleiwa Small Boat Harbor. Pick your date and time — instruction and Coast Guard life jackets included.",
}

export default function BookingPage() {
  const { importantInfo } = bookingContent

  return (
    <SiteShell>
      <PageHero
        eyebrow="Reservations"
        title="Pick your time and we'll have it ready"
        sub="Rentals are by reservation. Choose a slot below, or call if you'd rather sort it out with a person."
      />

      {/* at-a-glance strip */}
      <section className="border-b border-ink/10 bg-[#f6f9fb] py-6">
        <Wrap>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="mr-1 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-slate2">
              Before you book
            </span>
            <Chip>
              <Clock className="h-3.5 w-3.5" />
              45-minute jet ski rides
            </Chip>
            <Chip>
              <Users className="h-3.5 w-3.5" />
              16+ to drive
            </Chip>
            <Chip tone="slate">Max 3 skis per hour slot</Chip>
            <Chip tone="slate">
              <CreditCard className="h-3.5 w-3.5" />
              Card hold on arrival
            </Chip>
          </div>
        </Wrap>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Wrap>
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
            {/* scheduler — first on mobile, since it's what people came for */}
            <div className="order-1">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-btn bg-ocean/10 text-ocean">
                  <CalendarCheck className="h-[18px] w-[18px]" />
                </span>
                <Eyebrow className="text-ocean">Choose a time</Eyebrow>
              </div>
              <div className="overflow-hidden rounded-card border border-ink/10 bg-white shadow-card">
                <iframe
                  src="https://app.acuityscheduling.com/schedule.php?owner=34861224&ref=embedded_csp"
                  title="Book a rental with The Watercraft Connection"
                  className="h-[820px] w-full border-0"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-[0.82rem] leading-relaxed text-slate2">
                Booking is handled by Acuity Scheduling. If the calendar shows no availability during our normal hours,
                it's usually weather or high surf — give us a call.
              </p>
            </div>

            {/* info rail */}
            <aside className="order-2 space-y-5">
              <div className="rounded-card border border-ink/10 bg-[#f6f9fb] p-6">
                <h2 className="mb-4 font-display text-[1.15rem] font-bold tracking-[-0.02em] text-navy">
                  {importantInfo.heading}
                </h2>
                <ul className="space-y-3">
                  {importantInfo.items.map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-slate2">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-ocean" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* card hold — material enough to deserve its own callout */}
              <div className="rounded-card border border-sun/40 bg-sun/[0.08] p-6">
                <div className="mb-2.5 flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-btn bg-sun/25 text-[#8a6d00]">
                    <Info className="h-4 w-4" />
                  </span>
                  <h2 className="font-display text-[1.02rem] font-bold tracking-[-0.01em] text-navy">On arrival</h2>
                </div>
                <p className="text-[0.9rem] leading-relaxed text-slate2">
                  We take a <strong className="font-semibold text-navy">temporary</strong> credit card authorization per
                  jet ski to cover damage or lost equipment. The hold is released at the end of the day if nothing is
                  lost or damaged.
                </p>
              </div>

              <div className="rounded-card border border-ink/10 p-6">
                <h2 className="mb-2 font-display text-[1.02rem] font-bold tracking-[-0.01em] text-navy">
                  {importantInfo.questions.heading}
                </h2>
                <p className="mb-5 text-[0.9rem] leading-relaxed text-slate2">
                  Anything you're unsure about, ask before you book — it's quicker than sorting it out at the dock.
                </p>
                <Button href={`tel:${companyInfo.contact.phone}`} variant="flat" className="w-full justify-center">
                  <Phone className="h-4 w-4" />
                  {companyInfo.contact.phoneFormatted}
                </Button>
              </div>
            </aside>
          </div>
        </Wrap>
      </section>
    </SiteShell>
  )
}
