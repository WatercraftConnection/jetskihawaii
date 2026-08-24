import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ArrowUpRight } from "lucide-react"
import { SiteShell } from "@/components/rd/shell"
import { PageHero } from "@/components/rd/page-hero"
import { Button, Wrap, Eyebrow } from "@/components/rd/ui"
import { GoogleMap } from "@/components/google-map"
import { YelpIcon } from "@/components/icons"
import { siteMeta } from "@/lib/home-data"

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description:
    "Call, text or email The Watercraft Connection at Haleiwa Small Boat Harbor. Open Tuesday–Wednesday and Friday–Sunday, 11am–5pm.",
}

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Get in touch"
        title="Come find us at the harbor"
        sub="Call or text and you'll get a person, not a queue. Same for email — usually inside a day."
      />

      <section className="bg-white py-16 sm:py-24">
        <Wrap>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            {/* details */}
            <div className="space-y-4">
              <ContactRow
                icon={<Phone className="h-[18px] w-[18px]" />}
                label="Phone — call or text"
                href={`tel:${siteMeta.phone}`}
                value={siteMeta.phoneFormatted}
                note="The fastest way to reach us during open hours."
              />
              <ContactRow
                icon={<Mail className="h-[18px] w-[18px]" />}
                label="Email"
                href={`mailto:${siteMeta.email}`}
                value={siteMeta.email}
                note="We typically respond within 24 hours."
              />
              <ContactRow
                icon={<MapPin className="h-[18px] w-[18px]" />}
                label="Location"
                href={siteMeta.mapsUrl}
                external
                value={`${siteMeta.street}, ${siteMeta.city}`}
                note="At Haleiwa Small Boat Harbor, near Ali'i Beach and Puaena Point. Free parking at the dock."
              />

              {/* hours */}
              <div className="rounded-card border border-ink/10 bg-[#f6f9fb] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-btn bg-ocean/10 text-ocean">
                    <Clock className="h-[18px] w-[18px]" />
                  </span>
                  <Eyebrow className="text-ocean">Hours</Eyebrow>
                </div>
                <dl className="space-y-2.5">
                  {siteMeta.hours.map((row) => (
                    <div key={row.days} className="flex justify-between gap-4 text-[0.92rem]">
                      <dt className="text-slate2">{row.days}</dt>
                      <dd className={row.time === "Closed" ? "text-slate2/50" : "font-semibold text-navy"}>
                        {row.time}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 border-t border-ink/10 pt-4 text-[0.82rem] leading-relaxed text-slate2">
                  {siteMeta.hoursNote}
                </p>
              </div>

              {/* social */}
              <div className="flex items-center gap-3 pt-1">
                <span className="text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-slate2">Follow</span>
                {[
                  { href: siteMeta.social.facebook, label: "Facebook", Icon: Facebook },
                  { href: siteMeta.social.instagram, label: "Instagram", Icon: Instagram },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-btn border border-ink/10 text-slate2 transition-colors hover:border-ocean/30 hover:text-ocean rd-focus"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
                <a
                  href={siteMeta.social.yelp}
                  aria-label="Yelp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-btn border border-ink/10 text-slate2 transition-colors hover:border-ocean/30 hover:text-ocean rd-focus"
                >
                  <YelpIcon className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>

            {/* map */}
            <div className="min-h-[420px] overflow-hidden rounded-card border border-ink/10 shadow-card lg:min-h-full">
              <GoogleMap className="h-full min-h-[420px] w-full" />
            </div>
          </div>
        </Wrap>
      </section>

      {/* closing */}
      <section className="rd-panel-deep rd-grain relative overflow-hidden py-16 sm:py-20">
        <Wrap className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <h2 className="max-w-[22ch] font-display text-[clamp(1.7rem,3.4vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
              Ready when you are.
            </h2>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button href="/booking" size="lg" className="justify-center">
                Check availability
              </Button>
              <Button href={`tel:${siteMeta.phone}`} variant="bordered" size="lg" className="justify-center">
                <Phone className="h-4 w-4" />
                {siteMeta.phoneFormatted}
              </Button>
            </div>
          </div>
        </Wrap>
      </section>
    </SiteShell>
  )
}

function ContactRow({
  icon,
  label,
  href,
  value,
  note,
  external,
}: {
  icon: React.ReactNode
  label: string
  href: string
  value: string
  note: string
  external?: boolean
}) {
  return (
    <div className="rounded-card border border-ink/10 bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-ocean/25 hover:shadow-card">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-btn bg-ocean/10 text-ocean">{icon}</span>
        <Eyebrow className="text-ocean">{label}</Eyebrow>
      </div>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group inline-flex items-start gap-1.5 font-display text-[1.15rem] font-bold tracking-[-0.02em] text-navy no-underline transition-colors hover:text-ocean rd-focus"
      >
        {value}
        {external ? (
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate2 transition-colors group-hover:text-ocean" />
        ) : null}
      </a>
      <p className="mt-2 text-[0.88rem] leading-relaxed text-slate2">{note}</p>
    </div>
  )
}
