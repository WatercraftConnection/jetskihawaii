import Image from "next/image"
import { Phone, ArrowRight } from "lucide-react"
import { Button, Wrap } from "@/components/rd/ui"
import { ctaContent } from "@/lib/home-data"

export function ClosingCta() {
  const { heading, sub, primary, secondary } = ctaContent

  return (
    <section className="rd-grain relative isolate overflow-hidden py-20 sm:py-28">
      <Image src="/cta-banner.webp" alt="" fill sizes="100vw" className="-z-30 object-cover" />
      <div className="rd-mesh absolute inset-0 -z-20" />

      <Wrap className="relative z-10">
        <div className="max-w-[640px]">
          <h2 className="mb-4 font-display text-[clamp(2rem,4.4vw,3.1rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
            {heading}
          </h2>
          <p className="mb-9 max-w-[46ch] text-[1.05rem] leading-relaxed text-white/75">{sub}</p>
          <div className="flex flex-wrap gap-3.5">
            <Button href={primary.href} size="lg">
              {primary.text}
              <ArrowRight className="h-[18px] w-[18px]" />
            </Button>
            <Button href={secondary.href} variant="bordered" size="lg">
              <Phone className="h-4 w-4" />
              {secondary.text}
            </Button>
          </div>
        </div>
      </Wrap>
    </section>
  )
}
