import Link from "next/link"
import Image from "next/image"
// Update imports to include our new PageLayout component
import { PageLayout } from "@/components/page-layout"

// Import site data
import { faqContent } from "@/lib/site-data"

// Replace the entire component with:
export default function FAQPage() {
  return (
    <PageLayout>
      {/* Hero Banner Section */}
      <div className="relative h-[250px] w-full">
        {/* Background Image */}
        <Image
          src="/hero.webp"
          alt="FAQ Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Content Container */}
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center max-w-4xl px-4 mb-0">
            {faqContent.heading}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Map through FAQs */}
          {faqContent.faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-4 text-primary">{faq.question}</h3>
              <div className="text-gray-700 space-y-4">
                {faq.answer.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-primary">{faqContent.helpSection.heading}</h2>
          <p className="mb-6 text-gray-700">{faqContent.helpSection.text}</p>
          <div className="flex justify-center gap-4">
            {faqContent.helpSection.buttons.map((button, index) => (
              <Link key={index} href={button.href} className={button.isPrimary ? "btn-primary" : "btn-secondary"}>
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

