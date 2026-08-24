import type { ReactNode } from "react"
import type { Metadata } from "next"
import "./globals.css"
import { archivo, inter } from "./fonts"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
import { localBusinessSchema, websiteSchema } from "./schema"

const SITE = "https://jetskihawaii.com"

export const metadata: Metadata = {
  // Required for OpenGraph/Twitter images to resolve to absolute URLs —
  // without it, link previews silently ship relative paths and render nothing.
  metadataBase: new URL(SITE),
  title: {
    default: "Jet Ski & Kayak Rentals on Oahu's North Shore | The Watercraft Connection",
    template: "%s | The Watercraft Connection",
  },
  description:
    "Family-run jet ski and kayak rentals out of Haleiwa Small Boat Harbor since 1987. 45-minute open-ocean rides, instruction included, no experience needed.",
  applicationName: "The Watercraft Connection",
  keywords: [
    "jet ski rental Oahu",
    "jet ski rental North Shore",
    "Haleiwa jet ski",
    "kayak rental Haleiwa",
    "Anahulu River kayak",
    "North Shore watercraft rental",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo-main.png",
    apple: "/logo-main.png",
    shortcut: "/logo-main.png",
  },
  openGraph: {
    type: "website",
    siteName: "The Watercraft Connection",
    locale: "en_US",
    url: SITE,
    title: "Jet Ski & Kayak Rentals on Oahu's North Shore",
    description:
      "Family-run out of Haleiwa Small Boat Harbor since 1987. 45-minute open-ocean rides, instruction and gear included.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "The Watercraft Connection — jet ski and kayak rentals, Haleiwa, Oahu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jet Ski & Kayak Rentals on Oahu's North Shore",
    description:
      "Family-run out of Haleiwa Small Boat Harbor since 1987. 45-minute open-ocean rides, instruction and gear included.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([localBusinessSchema, websiteSchema]),
          }}
        />
      </head>
      <body className={`${archivo.variable} ${inter.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
