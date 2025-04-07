import type { ReactNode } from "react"
import { TopBar } from "@/components/top-bar"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <MainNav />
      <main className="flex-1 bg-white">{children}</main>
      <Footer />
    </div>
  )
}

