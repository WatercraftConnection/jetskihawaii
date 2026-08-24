import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowUpRight } from "lucide-react"
import { Wrap, Eyebrow } from "@/components/rd/ui"
import { YelpIcon } from "@/components/icons"
import { siteMeta } from "@/lib/home-data"

/**
 * Footer carrying a real NAP block (name / address / phone) plus hours.
 * The old one was a wordmark and three icons, which is a miss for a local
 * business — both for customers and for local search.
 */
export function SiteFooter() {
  return (
    <footer className="bg-abyss text-white">
      <Wrap>
        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-[1.1fr_1fr_1fr]">
          {/* identity + contact */}
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <Image src="/logo-main.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
              <span className="font-display text-[0.82rem] font-bold uppercase leading-[1.15] tracking-[0.14em]">
                Watercraft
                <br />
                Connection
              </span>
            </div>
            <p className="mb-6 max-w-[38ch] text-sm leading-relaxed text-white/60">
              Family-run jet ski and kayak rentals out of Haleiwa Small Boat Harbor since 1987.
            </p>

            <address className="space-y-3 not-italic">
              <a
                href={`tel:${siteMeta.phone}`}
                className="flex items-center gap-2.5 text-sm font-semibold text-white no-underline transition-colors hover:text-sun rd-focus"
              >
                <Phone className="h-4 w-4 shrink-0 text-foam" />
                {siteMeta.phoneFormatted}
              </a>
              <a
                href={`mailto:${siteMeta.email}`}
                className="flex items-center gap-2.5 text-sm text-white/70 no-underline transition-colors hover:text-white rd-focus"
              >
                <Mail className="h-4 w-4 shrink-0 text-foam" />
                {siteMeta.email}
              </a>
              <a
                href={siteMeta.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-sm text-white/70 no-underline transition-colors hover:text-white rd-focus"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-foam" />
                <span>
                  {siteMeta.street}
                  <br />
                  {siteMeta.city}
                </span>
              </a>
            </address>
          </div>

          {/* hours */}
          <div>
            <Eyebrow className="mb-5 text-foam">Hours</Eyebrow>
            <dl className="space-y-2.5">
              {siteMeta.hours.map((row) => (
                <div key={row.days} className="flex justify-between gap-4 text-sm">
                  <dt className="text-white/70">{row.days}</dt>
                  <dd className={row.time === "Closed" ? "text-white/40" : "font-medium text-white"}>{row.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-xs leading-relaxed text-white/45">{siteMeta.hoursNote}</p>
          </div>

          {/* links */}
          <div>
            <Eyebrow className="mb-5 text-foam">Explore</Eyebrow>
            <nav className="mb-7 flex flex-col gap-2.5">
              {siteMeta.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 no-underline transition-colors hover:text-white rd-focus"
                >
                  {item.text}
                </Link>
              ))}
              <Link
                href="/booking"
                className="inline-flex items-center gap-1 text-sm font-semibold text-sun no-underline transition-colors hover:text-sun-dim rd-focus"
              >
                Book now
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </nav>

            <div className="flex gap-3">
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
                  className="flex h-9 w-9 items-center justify-center rounded-btn border border-white/12 bg-white/5 text-white/70 transition-colors hover:border-white/30 hover:text-white rd-focus"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href={siteMeta.social.yelp}
                aria-label="Yelp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-btn border border-white/12 bg-white/5 text-white/70 transition-colors hover:border-white/30 hover:text-white rd-focus"
              >
                <YelpIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 py-7 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {siteMeta.name}
          </p>
          <p>
            Website by{" "}
            <a
              href="https://tjordanbenn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-white/70"
            >
              Jordan Bennett
            </a>
          </p>
        </div>
      </Wrap>
    </footer>
  )
}
