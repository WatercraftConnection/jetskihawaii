import type { Metadata } from "next"
import Image from "next/image"
import { ShieldCheck, HeartHandshake, Leaf, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SiteShell } from "@/components/rd/shell"
import { PageHero } from "@/components/rd/page-hero"
import { Button, Wrap, SectionHeading, Eyebrow, Chip } from "@/components/rd/ui"
import { aboutContent } from "@/lib/site-data"

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About",
  description:
    "Locally owned and family-operated since 1987 — Oahu's longest-running jet ski rental company, launching from Haleiwa Small Boat Harbor.",
}

const valueIcons: LucideIcon[] = [ShieldCheck, HeartHandshake, Leaf]

export default function AboutPage() {
  const { story, values, team, cta } = aboutContent

  return (
    <SiteShell>
      <PageHero
        eyebrow="Since 1987"
        title="Oahu's oldest jet ski outfit, still run by the family"
        sub="Nearly forty years on the same stretch of water, out of the same harbor."
      />

      {/* story — asymmetric, image right */}
      <section className="bg-white py-16 sm:py-24">
        <Wrap>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Eyebrow className="mb-3 text-ocean">{story.tagline}</Eyebrow>
              <h2 className="mb-6 font-display text-[clamp(1.9rem,3.4vw,2.7rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-navy">
                {story.heading}
              </h2>
              <div className="space-y-5">
                {story.content.map((para, i) => (
                  <p key={i} className="text-[0.98rem] leading-relaxed text-slate2">
                    {para}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <Chip>Family owned</Chip>
                <Chip>Haleiwa Small Boat Harbor</Chip>
                <Chip tone="slate">Open five days a week</Chip>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-ink/10 shadow-card">
              <Image
                src={story.image}
                alt="The Watercraft Connection kiosk at Haleiwa Small Boat Harbor"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </Wrap>
      </section>

      {/* values */}
      <section className="bg-[#f6f9fb] py-16 sm:py-24">
        <Wrap>
          <SectionHeading eyebrow={values.tagline} title={values.heading} />
          <div className="grid gap-5 md:grid-cols-3">
            {values.list.map((value, i) => {
              const Icon = valueIcons[i] ?? ShieldCheck
              return (
                <div
                  key={value.title}
                  className="rounded-card border border-ink/10 bg-white p-7 transition-[border-color,box-shadow] duration-300 hover:border-ocean/25 hover:shadow-card"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-btn bg-ocean/10 text-ocean">
                    <Icon className="h-[22px] w-[22px]" />
                  </div>
                  <h3 className="mb-2 font-display text-[1.1rem] font-bold tracking-[-0.01em] text-navy">
                    {value.title}
                  </h3>
                  <p className="text-[0.92rem] leading-relaxed text-slate2">{value.description}</p>
                </div>
              )
            })}
          </div>
        </Wrap>
      </section>

      {/* team */}
      <section className="bg-white py-16 sm:py-24">
        <Wrap>
          <SectionHeading eyebrow={team.tagline} title={team.heading}>
            The people who'll run your safety briefing and take you out.
          </SectionHeading>
          <div className="grid max-w-3xl gap-5 sm:grid-cols-2">
            {team.members.map((member) => (
              <div
                key={member.name}
                className="group relative aspect-[4/3] overflow-hidden rounded-card border border-ink/10 shadow-card"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss/75 via-abyss/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="font-display text-[1.3rem] font-bold tracking-[-0.02em] text-white">{member.name}</p>
                  {member.title ? <p className="text-[0.85rem] text-white/70">{member.title}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* closing */}
      <section className="rd-panel-deep rd-grain relative overflow-hidden py-16 sm:py-20">
        <Wrap className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <h2 className="max-w-[20ch] font-display text-[clamp(1.7rem,3.4vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
              {cta.heading}
            </h2>
            <div className="flex flex-wrap gap-3">
              <Button href="/booking" size="lg">
                Book now
                <ArrowRight className="h-[18px] w-[18px]" />
              </Button>
              <Button href="/faq" variant="bordered" size="lg">
                Read the FAQ
              </Button>
            </div>
          </div>
        </Wrap>
      </section>
    </SiteShell>
  )
}
