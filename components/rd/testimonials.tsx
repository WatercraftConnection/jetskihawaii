import { Star, ArrowUpRight } from "lucide-react"
import { Wrap, SectionHeading } from "@/components/rd/ui"
import { testimonialsContent } from "@/lib/home-data"

/**
 * The old version topped every card with a generic person silhouette — the
 * universal signal for "no real person here." Cards now lead with the rating
 * and let the quote carry itself; provenance lives in the section intro rather
 * than on a per-card badge.
 */
export function Testimonials() {
  const { eyebrow, heading, items, cta } = testimonialsContent

  return (
    <section className="rd-panel-deep rd-grain relative overflow-hidden py-16 sm:py-24">
      <Wrap className="relative z-10">
        <SectionHeading eyebrow={eyebrow} title={heading} tone="dark" />

        <div className="grid items-stretch gap-5 md:grid-cols-3">
          {items.map((item) => (
            <figure
              key={item.author}
              className="flex h-full flex-col rounded-card border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm"
            >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-sun text-sun" />
                ))}
              </div>

              <h3 className="mb-3 font-display text-[1.05rem] font-bold tracking-[-0.01em] text-white">{item.title}</h3>

              <blockquote className="flex-1 text-[0.92rem] leading-relaxed text-white/75">“{item.text}”</blockquote>

              <figcaption className="mt-5 border-t border-white/10 pt-4 text-[0.82rem] font-medium text-white/55">
                {item.author}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.92rem] font-semibold text-sun no-underline transition-colors hover:text-sun-dim rd-focus"
          >
            {cta.text}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Wrap>
    </section>
  )
}
