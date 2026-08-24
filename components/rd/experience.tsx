import { ShieldCheck, Waves, Turtle, Users, MapPin } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Wrap, SectionHeading } from "@/components/rd/ui"
import { experienceContent } from "@/lib/home-data"

const icons: Record<string, LucideIcon> = {
  ShieldCheck,
  Waves,
  Turtle,
  Users,
  MapPin,
}

/**
 * Replaces the old eight-card benefit grid AND the six-item "Everything You
 * Need" checklist — the page made the same argument three times. Five real
 * differentiators, first one given weight instead of all eight sitting flat.
 */
export function Experience() {
  const { eyebrow, heading, intro, items } = experienceContent
  const [lead, ...rest] = items

  return (
    <section id="included" className="bg-white py-16 sm:py-24">
      <Wrap>
        <SectionHeading eyebrow={eyebrow} title={heading}>
          {intro}
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-3">
          {/* lead card — carries the weight so the grid has a focal point */}
          <LeadCard item={lead} />

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {rest.map((item) => {
              const Icon = icons[item.icon] ?? ShieldCheck
              return (
                <div
                  key={item.title}
                  className="rounded-card border border-ink/10 bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-ocean/25 hover:shadow-card"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-btn bg-ocean/10 text-ocean">
                    <Icon className="h-[22px] w-[22px]" />
                  </div>
                  <h3 className="mb-1.5 font-display text-[1.05rem] font-bold tracking-[-0.01em] text-navy">
                    {item.title}
                  </h3>
                  <p className="text-[0.9rem] leading-relaxed text-slate2">{item.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Wrap>
    </section>
  )
}

function LeadCard({ item }: { item: (typeof experienceContent.items)[number] }) {
  const Icon = icons[item.icon] ?? ShieldCheck
  return (
    <div className="rd-panel-deep rd-grain relative flex flex-col justify-between overflow-hidden rounded-card p-8 text-white">
      <div className="relative z-10">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-btn bg-sun/15 text-sun">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2.5 font-display text-[1.4rem] font-bold tracking-[-0.02em]">{item.title}</h3>
        <p className="text-[0.95rem] leading-relaxed text-white/75">{item.body}</p>
      </div>
    </div>
  )
}
