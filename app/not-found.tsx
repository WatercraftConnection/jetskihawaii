import Link from "next/link"
import Image from "next/image"
import { PageLayout } from "@/components/page-layout"

export default function NotFound() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 relative">
            <Image src="/logo-main.png" alt="Jet Ski Rentals Logo" width={120} height={120} className="mx-auto" />
          </div>

          <h1 className="text-5xl font-bold text-primary mb-6">404 - Page Not Found</h1>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-10">
            <p className="text-xl text-gray-700 mb-6">
              Looks like you've drifted into uncharted waters! The page you're looking for doesn't exist.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/"
                className="bg-secondary text-black font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transition-all inline-flex items-center justify-center text-lg"
              >
                Return to Shore
              </Link>

              <Link
                href="/contact"
                className="bg-primary text-white font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transition-all inline-flex items-center justify-center text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="text-gray-600">
            <p>
              Need assistance? Call us at{" "}
              <a href="tel:+18086378006" className="text-primary hover:underline">
                +1 (808) 637-8006
              </a>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
