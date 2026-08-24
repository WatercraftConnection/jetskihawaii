import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteShell } from "@/components/rd/shell"
import { PageHero } from "@/components/rd/page-hero"
import { Button, Wrap } from "@/components/rd/ui"

export default function NotFound() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="404"
        title="You've drifted off the map"
        sub="That page doesn't exist. Here's the way back to shore."
      />

      <section className="bg-white py-16 sm:py-24">
        <Wrap>
          <div className="max-w-2xl">
            <div className="mb-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/" size="lg" className="justify-center">
                Back to the homepage
                <ArrowRight className="h-[18px] w-[18px]" />
              </Button>
              <Button href="/booking" variant="flat" size="lg" className="justify-center">
                Book a rental
              </Button>
            </div>

            <nav className="divide-y divide-ink/10 border-y border-ink/10">
              {[
                { href: "/#rentals", text: "Jet ski and kayak rentals", note: "What you can take out, and what it costs" },
                { href: "/faq", text: "FAQ", note: "Age limits, riding area, parking, cameras" },
                { href: "/about", text: "About", note: "Family-run at Haleiwa since 1990" },
                { href: "/contact", text: "Contact", note: "Phone, email, hours and directions" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between gap-6 py-5 no-underline rd-focus"
                >
                  <span>
                    <span className="block font-display text-[1.05rem] font-bold tracking-[-0.01em] text-navy transition-colors group-hover:text-ocean">
                      {link.text}
                    </span>
                    <span className="mt-0.5 block text-[0.88rem] text-slate2">{link.note}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate2 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ocean" />
                </Link>
              ))}
            </nav>
          </div>
        </Wrap>
      </section>
    </SiteShell>
  )
}
