import type { ReactNode } from "react"
import { TopBar } from "./TopBar"
import { Footer } from "./Footer"

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

