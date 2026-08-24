import { Inter, Archivo } from "next/font/google"

// Display face. Archivo is a sturdy grotesk that holds up at large sizes with
// tight tracking — it echoes the heavy condensed feel of the existing wordmark
// without the Impact fallback problem.
export const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-archivo",
})

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})
