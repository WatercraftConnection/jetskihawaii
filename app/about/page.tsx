import Image from "next/image"
import Link from "next/link"

// Import site data
import { aboutContent } from "@/lib/site-data"

// Update imports to include our new PageLayout component
import { PageLayout } from "@/components/page-layout"

// Replace the entire component with:
export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero Banner Section */}
      <div className="relative h-[250px] w-full">
        {/* Background Image */}
        <Image
          src="/hero.webp"
          alt="About Us Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Content Container */}
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center max-w-4xl px-4 mb-0">
            {aboutContent.heading}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image on the left */}
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={aboutContent.story.image || "/placeholder.svg"}
                alt="The Watercraft Connection Team"
                fill
                className="object-cover"
              />
            </div>

            {/* Content on the right */}
            <div>
              <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                <h3 className="text-sm font-medium tracking-wider text-primary">{aboutContent.story.tagline}</h3>
              </div>
              <h2 className="text-3xl font-bold text-primary mb-6">{aboutContent.story.heading}</h2>
              <div className="space-y-4 text-gray-700">
                {aboutContent.story.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full mb-4">
              <h3 className="text-sm font-medium tracking-wider text-primary">{aboutContent.values.tagline}</h3>
            </div>
            <h2 className="text-3xl font-bold text-primary">{aboutContent.values.heading}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Map through values */}
            {aboutContent.values.list.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full mb-4">
              <h3 className="text-sm font-medium tracking-wider text-primary">{aboutContent.team.tagline}</h3>
            </div>
            <h2 className="text-3xl font-bold text-primary">{aboutContent.team.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Map through team members */}
            {aboutContent.team.members.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section - Matching the screenshot */}
        <div className="text-center max-w-4xl mx-auto mt-20 mb-10">
          <h3 className="text-3xl font-bold text-primary mb-10">{aboutContent.cta.heading}</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {aboutContent.cta.buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={`${
                  button.isPrimary
                    ? "bg-secondary text-black"
                    : button.isOutline
                      ? "border-2 border-primary text-primary hover:bg-primary/5"
                      : "bg-primary text-white hover:bg-primary/90"
                } font-medium py-3 px-10 rounded-full transition-colors text-lg min-w-[200px]`}
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

