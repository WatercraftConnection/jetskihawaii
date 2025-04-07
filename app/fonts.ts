import { Inter, Montserrat } from "next/font/google"

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
})

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

