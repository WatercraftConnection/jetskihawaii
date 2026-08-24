import type { Metadata } from "next"
import { Plus, Phone, ArrowRight } from "lucide-react"
import { SiteShell } from "@/components/rd/shell"
import { PageHero } from "@/components/rd/page-hero"
import { Button, Wrap } from "@/components/rd/ui"
import { faqContent, companyInfo } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "FAQ | The Watercraft Connection",
  description:
    "Common questions about jet ski and kayak rentals at Haleiwa — experience needed, age limits, riding area, cameras, parking and reservations.",
}

export default function FAQPage() {
  const { faqs, helpSection } = faqContent

  return (
    <SiteShell>
      <PageHero
        eyebrow="Good to know"
        title="Questions, answered"
        sub="If yours isn't here, call us — someone in the family will pick up."
      />

      <section className="bg-white py-16 sm:py-24">
        <Wrap>
          <div className="max-w-3xl">
            {/* Native <details> — keyboard accessible, works without JS, and
                keeps this page a server component. */}
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {faqs.map((faq, i) => (
                <details key={i} className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 rd-focus [&::-webkit-details-marker]:hidden">
                    <h2 className="font-display text-[1.05rem] font-bold leading-snug tracking-[-0.01em] text-navy transition-colors group-hover:text-ocean sm:text-[1.15rem]">
                      {faq.question}
                    </h2>
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-btn bg-ocean/10 text-ocean transition-transform duration-300 group-open:rotate-45">
                      <Plus className="h-4 w-4" />
                    </span>
                  </summary>
                  <div className="space-y-4 pb-7 pr-12">
                    {faq.answer.map((para, pi) => (
                      <p key={pi} className="text-[0.95rem] leading-relaxed text-slate2">
                        {para}
                      </p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* help */}
      <section className="bg-[#f6f9fb] py-16 sm:py-20">
        <Wrap>
          <div className="rd-panel-deep rd-grain relative flex flex-wrap items-center justify-between gap-8 overflow-hidden rounded-card px-6 py-8 text-white sm:px-10 sm:py-10">
            <div className="relative z-10 max-w-[46ch]">
              <h2 className="mb-2 font-display text-[1.45rem] font-bold tracking-[-0.02em]">{helpSection.heading}</h2>
              <p className="text-[0.95rem] leading-relaxed text-white/75">
                Call or text {companyInfo.contact.phoneFormatted} — we're at the kiosk Tuesday through Sunday, closed
                Mondays and Thursdays.
              </p>
            </div>
            <div className="relative z-10 flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
              <Button href={`tel:${companyInfo.contact.phone}`} variant="bordered" size="lg" className="justify-center">
                <Phone className="h-4 w-4" />
                Call us
              </Button>
              <Button href="/booking" size="lg" className="justify-center">
                Book now
                <ArrowRight className="h-[18px] w-[18px]" />
              </Button>
            </div>
          </div>
        </Wrap>
      </section>
    </SiteShell>
  )
}
