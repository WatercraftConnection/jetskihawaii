"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
// import { WaveLineIcon } from "@/components/icons/WaveLineIcon"
import Image from "next/image"

// Import site data
import { companyInfo } from "@/lib/site-data"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  return (
    <header className="bg-blue-gradient text-white py-3.5 relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo - always visible */}
          <Link
            href="/"
            className="text-base font-medium flex items-center gap-2 transition-opacity duration-200 hover:opacity-75"
          >
            {/* <WaveLineIcon className="h-6 w-6 text-white" /> */}
            <Image src="/logo-main.png" alt="Jet Ski Rentals Logo" width={50} height={50} className="object-contain" />
            <span>{companyInfo.shortName}</span>
            {/* <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-white transition-all duration-300 group-hover:w-full origin-left group-hover:origin-right"></span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/about" className="text-base hover:text-secondary transition-colors">
              About
            </Link>
            <Link href="/faq" className="text-base hover:text-secondary transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-base hover:text-secondary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Book Now Button - Desktop only */}
          <div className="flex items-center">
            <Link href="/booking" className="hidden md:inline-flex btn-secondary text-sm hide-mobile">
              BOOK NOW
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none relative z-30"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-full left-0 right-0 bg-blue-gradient md:hidden z-10 shadow-lg transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-4 p-6 container mx-auto">
          <Link
            href="/about"
            className="text-base hover:text-secondary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/faq"
            className="text-base hover:text-secondary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-base hover:text-secondary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/booking"
            className="btn-secondary text-sm w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            BOOK NOW
          </Link>
        </nav>
      </div>
    </header>
  )
}