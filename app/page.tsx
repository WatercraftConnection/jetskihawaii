import Image from "next/image"
import Link from "next/link"
import {
  Clock,
  ShieldCheck,
  Users,
  Anchor,
  MapPin,
  TreePalmIcon as Palm,
  CheckCheck,
  TelescopeIcon as Binoculars,
  Waves,
} from "lucide-react"
import { GalleryWithLightbox } from "@/components/gallery-with-lightbox"
import { LightbulbIcon } from "@/components/icons/LightbulbIcon"
import { WaveLineIcon } from "@/components/icons/WaveLineIcon"

// Import site data
import {
  heroContent,
  servicesContent,
  testimonialsContent,
  galleryContent,
  featuresContent,
  ctaContent,
} from "@/lib/site-data"

// Update imports to include our new PageLayout component
import { PageLayout } from "@/components/page-layout"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { HeroParallax } from "@/components/hero-parallax"
import { ParallaxBackground } from "@/components/parallax-background"

// Replace the entire component with:
export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-blue-gradient text-white py-24 md:py-36 h-screen">
        <div className="absolute inset-0 overflow-hidden h-screen">
        <HeroParallax
          imageSrc={heroContent.backgroundImage || "/placeholder.svg"}
          imageAlt="Ocean waves with jet ski"
        />
        </div>
        <div className="container mx-auto relative z-10 text-center px-4">
          <AnimateOnScroll direction="down" duration={0.4}>
          <div className="mb-8 flex justify-center">
            <div className="text-center">
              <h1 className="text-xl tracking-wider mb-2">{heroContent.heading1}</h1>
              <div className="logo-text text-secondary text-5xl md:text-7xl font-bold mb-2">{heroContent.heading2}</div>
              <h2 className="text-xl tracking-wider">{heroContent.heading3}</h2>
            </div>
          </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.2} duration={0.4}>
          <div className="mt-14">
            <h2 className="text-3xl md:text-5xl font-semibold mb-8">{heroContent.mainHeading}</h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">{heroContent.subheading}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {heroContent.ctaButtons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`${
                    button.isPrimary ? "bg-secondary text-black" : "bg-white text-primary"
                  } font-medium py-2.5 px-7 rounded-full hover:bg-opacity-90 transition-all block sm:inline-flex sm:items-center text-sm text-center`}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 overflow-x-hidden" id="services">
        <div className="container mx-auto px-4">
          <AnimateOnScroll direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-primary">{servicesContent.heading}</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">{servicesContent.subheading}</p>
          </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Map through services */}
            {servicesContent.services.map((service, index) => (
              <AnimateOnScroll key={service.id} direction={index % 2 === 0 ? "left" : "right"} delay={0.2 * index}>
                <div
                  className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300"
                  id={service.id}
                >
                  <div className="relative h-64 md:h-80">
                    <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm font-medium mb-1 text-secondary">{service.tagline}</p>
                      <h3 className="text-3xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-200">{service.description}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, index) => {
                        // Dynamically render the icon based on the icon name
                        let IconComponent
                        switch (feature.icon) {
                          case "Clock":
                            IconComponent = Clock
                            break
                          case "Users":
                            IconComponent = Users
                            break
                          case "ShieldCheck":
                            IconComponent = ShieldCheck
                            break
                          case "Anchor":
                            IconComponent = Anchor
                            break
                          case "Palm":
                            IconComponent = Palm
                            break
                          case "CheckCheck":
                            IconComponent = CheckCheck
                            break
                          case "Binoculars":
                            IconComponent = Binoculars
                            break
                          case "Waves":
                            IconComponent = Waves
                            break
                          case "Lightbulb":
                            IconComponent = LightbulbIcon
                            break
                          case "WaveLine":
                            IconComponent = WaveLineIcon
                            break
                          default:
                            IconComponent = Clock
                        }

                        return (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <IconComponent className="h-4 w-4 mr-2 text-primary" />
                            {feature.text}
                          </li>
                        )
                      })}
                    </ul>
                    <div className="flex gap-4">
                      <Link
                        href={service.bookingLink}
                        className="flex-1 text-center py-2.5 bg-secondary text-black rounded-full text-sm font-medium hover:bg-secondary/90 transition-colors"
                      >
                        BOOK NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Private Charters - More subtle integration */}
          <AnimateOnScroll direction="up" delay={0.4}>
            <div className="mt-8 text-center">
              <div className="inline-block rounded-xl bg-primary/5 px-6 py-2 mb-4">
                <p className="text-sm font-medium text-primary">{servicesContent.additionalService.tagline}</p>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{servicesContent.additionalService.title}</h3>
              <p className="text-base text-gray-600 max-w-2xl mx-auto mb-6">
                {servicesContent.additionalService.description}
              </p>
              <a
                href={servicesContent.additionalService.learnMoreLink}
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Learn about private charters
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative" id="about">
        <ParallaxBackground
          imageSrc="/bg_img1.webp"
          imageAlt="Ocean background"
          overlayColor="bg-primary"
          overlayOpacity={0.4}
          speed={0.3}
        />
        {/* Dark Overlay with blue gradient blend */}
        <div className="absolute inset-0 bg-blue-gradient opacity-60"></div>
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
        <AnimateOnScroll direction="up">
            <div className="flex justify-center mb-5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <h2 className="text-3xl font-semibold mb-5">{testimonialsContent.heading}</h2>
            <p className="text-base leading-relaxed mb-12 max-w-3xl mx-auto">
              {testimonialsContent.subheading}
              <span className="text-secondary font-medium">ocean adventure experience</span>.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Map through testimonials */}
            {testimonialsContent.testimonials.map((testimonial, index) => (
              <AnimateOnScroll key={index} direction="up" delay={0.2 * index}>
              <div className="testimonial-card">
                <div className="flex justify-center mb-3">
                  <div className="bg-gray-100 rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-lg font-medium mb-3 text-primary">{testimonial.title}</h3>
                <p className="text-sm mb-4 text-gray-700 leading-relaxed">{testimonial.text}</p>
                <p className="text-right italic text-gray-600 text-sm">— {testimonial.author}</p>
              </div>
            </AnimateOnScroll>
            ))}
          </div>

          {/* See More Button */}
          <AnimateOnScroll direction="up" delay={0.6}>
            <div className="flex justify-center mt-10">
              <Link
                href={testimonialsContent.ctaButton.href}
                className="bg-secondary text-black font-medium py-2.5 px-7 rounded-full hover:bg-opacity-90 transition-all inline-flex items-center text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {testimonialsContent.ctaButton.text}
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll direction="up">
            <h3 className="text-base font-medium mb-2 tracking-wider text-primary">{galleryContent.tagline}</h3>
            <h2 className="text-3xl font-semibold mb-5 text-primary">{galleryContent.heading}</h2>
            <p className="text-base leading-relaxed mb-10 max-w-3xl mx-auto">{galleryContent.description}</p>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.3}>
            <GalleryWithLightbox images={galleryContent.images} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Overview - Modern Design */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll direction="up">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-primary mb-4">{featuresContent.heading}</h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto">{featuresContent.subheading}</p>
              </div>
            </AnimateOnScroll>

            <div className="border-t border-gray-100 pt-12">
              {/* First row of feature cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {/* Map through main features */}
                {featuresContent.mainFeatures.map((feature, index) => {
                  // Dynamically render the icon based on the icon name
                  let IconComponent
                  switch (feature.icon) {
                    case "Clock":
                      IconComponent = Clock
                      break
                    case "ShieldCheck":
                      IconComponent = ShieldCheck
                      break
                    case "Anchor":
                      IconComponent = Anchor
                      break
                    case "Users":
                      IconComponent = Users
                      break
                    case "Palm":
                      IconComponent = Palm
                      break
                    case "CheckCheck":
                      IconComponent = CheckCheck
                      break
                    case "Binoculars":
                      IconComponent = Binoculars
                      break
                    case "Waves":
                      IconComponent = Waves
                      break
                    case "Lightbulb":
                      IconComponent = LightbulbIcon
                      break
                    case "WaveLine":
                      IconComponent = WaveLineIcon
                      break
                    default:
                      IconComponent = Clock
                  }

                  return (
                    <AnimateOnScroll key={index} direction="up" delay={0.1 * index}>
                      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                          <IconComponent className="h-6 w-6 text-gray-600" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </AnimateOnScroll>
                  )
                })}
              </div>

              {/* Second row of feature cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* Map through additional features */}
                {featuresContent.additionalFeatures.map((feature, index) => {
                  // Render icon based on feature.icon
                  let IconContent

                  if (feature.icon === "Wildlife") {
                    IconContent = (
                      <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                        />
                      </svg>
                    )
                  } else if (feature.icon === "Trending") {
                    IconContent = (
                      <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    )
                  } else if (feature.icon === "MapPin") {
                    IconContent = <MapPin className="h-6 w-6 text-gray-600" />
                  } else if (feature.icon === "Users") {
                    IconContent = <Users className="h-6 w-6 text-gray-600" />
                  } else if (feature.icon === "Palm") {
                    IconContent = <Palm className="h-6 w-6 text-gray-600" />
                  } else if (feature.icon === "CheckCheck") {
                    IconContent = <CheckCheck className="h-6 w-6 text-gray-600" />
                  } else if (feature.icon === "Binoculars") {
                    IconContent = <Binoculars className="h-6 w-6 text-gray-600" />
                  } else if (feature.icon === "Waves") {
                    IconContent = <Waves className="h-6 w-6 text-gray-600" />
                  } else if (feature.icon === "Lightbulb") {
                    IconContent = <LightbulbIcon className="h-6 w-6 text-gray-600" />
                  } else if (feature.icon === "WaveLine") {
                    IconContent = <WaveLineIcon className="h-6 w-6 text-gray-600" />
                  }

                  return (
                    <AnimateOnScroll key={index} direction="up" delay={0.1 * (index + 4)}>
                      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                          {IconContent}
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-primary">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </AnimateOnScroll>
                  )
                })}
              </div>
            </div>

            {/* Everything You Need Section */}
            <AnimateOnScroll direction="up" delay={0.5}>
              <div className="bg-primary text-white rounded-lg p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{featuresContent.amenities.heading}</h3>
                  <p className="max-w-2xl mx-auto">{featuresContent.amenities.subheading}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {featuresContent.amenities.list.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                          <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-10">
                  <Link
                    href={featuresContent.amenities.ctaButton.href}
                    className="inline-block bg-secondary text-black font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transition-all text-base"
                  >
                    {featuresContent.amenities.ctaButton.text}
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/cta-banner3.jpg" alt="Ocean background" fill className="object-cover" />
        </div>
        {/* Dark Overlay with blue gradient blend */}
        <div className="absolute inset-0 bg-blue-gradient opacity-60"></div>
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <AnimateOnScroll direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{ctaContent.heading}</h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">{ctaContent.subheading}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {ctaContent.buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`${
                    button.isPrimary ? "bg-secondary text-black" : "bg-white text-primary"
                  } font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transition-all inline-flex items-center justify-center text-lg`}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </PageLayout>
  )
}