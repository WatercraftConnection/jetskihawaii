import type { ReactNode } from "react"
import { SiteNav, MobileActionBar } from "@/components/rd/nav"
import { SiteFooter } from "@/components/rd/footer"

/**
 * Page shell for everything on the redesigned site. The homepage composes its
 * own because the hero has to slide under a transparent navbar; every other
 * page uses this.
 */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      {/* spacer so the fixed phone action bar never covers the footer */}
      <div className="h-[74px] md:hidden" aria-hidden="true" />
      <MobileActionBar />
    </div>
  )
}
