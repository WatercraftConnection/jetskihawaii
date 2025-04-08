import type { ReactNode } from "react"
import "./globals.css"
import { montserrat, inter } from "./fonts"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
import { organizationSchema, localBusinessSchema, serviceSchema, reviewSchema, websiteSchema } from "./schema"

export const metadata = {
  title: "The Watercraft Connection - Jet Ski & Kayak Rentals in Oahu",
  description:
    "Experience ultimate freedom and immersion with our world-class team of watercraft experts on the beautiful North Shore of Oahu, Hawaii.",
  icons: {
    icon: "/logo-main.png",
    apple: "/logo-main.png",
    shortcut: "/logo-main.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              localBusinessSchema,
              serviceSchema,
              reviewSchema,
              websiteSchema,
            ]),
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${inter.variable} font-sans`}>{children}<Analytics/></body>
    </html>
  )
}



import './globals.css'