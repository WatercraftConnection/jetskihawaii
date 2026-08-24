import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button, Card, Chip, Wrap, SectionHeading, Eyebrow } from "@/components/rd/ui"
import { rentalsContent, pricesConfirmed } from "@/lib/home-data"

export function Rentals() {
  const { eyebrow, heading, intro, items, charter } = rentalsContent

  return (
    <section id="rentals" className="bg-gradient-to-b from-[#f6f9fb] to-white py-16 sm:py-24">
      <Wrap>
        <SectionHeading eyebrow={eyebrow} title={heading}>
          {intro}
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {items.map((item) => (
            <Card key={item.id}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss/45 to-transparent" />
                {item.badge ? (
                  <Chip tone="sun" className="absolute left-4 top-4 border-sun/30 bg-abyss/70 backdrop-blur-sm">
                    {item.badge}
                  </Chip>
                ) : null}
              </div>

              <div className="flex-1 px-6 pt-6">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h3 className="font-display text-[1.55rem] font-bold tracking-[-0.02em] text-navy">{item.title}</h3>
                  <div className="shrink-0 text-right">
                    <div className="font-display text-[1.55rem] font-bold leading-none tracking-[-0.02em] text-navy">
                      ${item.price}
                    </div>
                    <div className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-slate2">
                      {item.priceUnit}
                    </div>
                    {!pricesConfirmed ? (
                      <div className="mt-1.5 rounded bg-amber-100 px-1.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wide text-amber-800">
                        sample rate
                      </div>
                    ) : null}
                  </div>
                </div>

                <p className="mb-5 text-[0.95rem] leading-relaxed text-slate2">{item.blurb}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {item.chips.map((chip) => (
                    <Chip key={chip.text} tone={chip.tone}>
                      {chip.text}
                    </Chip>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-stretch gap-2.5 px-6 pb-6 min-[420px]:flex-row min-[420px]:items-center min-[420px]:gap-3">
                <Button href="/booking" className="flex-1 shadow-none">
                  {item.cta}
                </Button>
                <Button href="/faq" variant="flat">
                  Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* charters — promoted from a text link to a real panel */}
        <div className="rd-panel-deep rd-grain relative mt-6 flex flex-wrap items-center justify-between gap-8 overflow-hidden rounded-card px-6 py-7 text-white sm:px-9 sm:py-9">
          <div className="relative z-10 max-w-[58ch]">
            <Eyebrow className="mb-2.5 text-sun">{charter.eyebrow}</Eyebrow>
            <h3 className="mb-2 font-display text-[1.5rem] font-bold tracking-[-0.02em]">{charter.title}</h3>
            <p className="text-[0.95rem] leading-relaxed text-white/75">{charter.blurb}</p>
          </div>
          <Button href={charter.cta.href} size="lg" className="relative z-10 w-full justify-center sm:w-auto">
            {charter.cta.text}
            <ArrowRight className="h-[18px] w-[18px]" />
          </Button>
        </div>
      </Wrap>
    </section>
  )
}
