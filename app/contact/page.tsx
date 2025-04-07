import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"
import { ContactInfoItem } from "@/components/contact-info-item"
import { YelpIcon } from "@/components/icons"
import { GoogleMap } from "@/components/google-map"

// Import site data
import { companyInfo, contactContent } from "@/lib/site-data"

// Update imports to include our new PageLayout component
import { PageLayout } from "@/components/page-layout"

// Replace the entire component with:
export default function ContactPage() {
  return (
    <PageLayout>
      {/* Hero Banner Section */}
      <div className="relative h-[250px] w-full">
        {/* Background Image */}
        <Image
          src="/hero.webp"
          alt="Contact Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Content Container */}
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center max-w-4xl px-4 mb-0">
            {contactContent.heading}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto">{contactContent.intro}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <Phone className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-lg font-semibold">{contactContent.sections.phone.title}</h3>
                  </div>
                  <p className="text-gray-700 pl-7">
                    <ContactInfoItem value={companyInfo.contact.phone} type="phone">
                      {contactContent.sections.phone.value}
                    </ContactInfoItem>
                  </p>
                  <p className="text-sm text-gray-500 pl-7 mt-1">{contactContent.sections.phone.note}</p>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <Mail className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-lg font-semibold">{contactContent.sections.email.title}</h3>
                  </div>
                  <div className="text-gray-700 pl-7">
                    <ContactInfoItem value={companyInfo.contact.email} type="email">
                      {contactContent.sections.email.value}
                    </ContactInfoItem>
                  </div>
                  <p className="text-sm text-gray-500 pl-7 mt-1">{contactContent.sections.email.note}</p>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-lg font-semibold">{contactContent.sections.location.title}</h3>
                  </div>
                  <div className="text-gray-700 pl-7">
                    <ContactInfoItem value={companyInfo.contact.address} type="address">
                      {contactContent.sections.location.value}
                    </ContactInfoItem>
                  </div>
                  <p className="text-sm text-gray-500 pl-7 mt-1">{contactContent.sections.location.note}</p>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-lg font-semibold">{contactContent.sections.hours.title}</h3>
                  </div>
                  <div className="pl-7">
                    
                    <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: contactContent.sections.hours.value }} />
                    <p className="text-sm text-gray-500 mt-1">{contactContent.sections.hours.note}</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold">{contactContent.sections.social.title}</h3>
                  </div>
                  <div className="pl-7 flex space-x-4">
                    <Link
                      href={companyInfo.social.facebook}
                      className="text-primary hover:text-secondary transition-colors"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link
                      href={companyInfo.social.instagram}
                      className="text-primary hover:text-secondary transition-colors"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link
                      href={companyInfo.social.yelp}
                      className="text-primary hover:text-secondary transition-colors"
                      aria-label="Yelp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YelpIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-sm">
              <GoogleMap className="w-full h-full" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6 text-primary">{contactContent.cta.heading}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {contactContent.cta.buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`${
                    button.isPrimary
                      ? "btn-primary"
                      : button.isOutline
                        ? "border border-primary text-primary hover:bg-primary hover:text-white"
                        : "btn-secondary"
                  } transition-colors font-medium py-2.5 px-7 rounded-full`}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

