import { companyInfo, servicesContent, testimonialsContent } from "@/lib/site-data"

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://jetskihawaii.com/#organization",
  "name": companyInfo.name,
  "url": "https://jetskihawaii.com",
  "logo": "https://jetskihawaii.com/logo-main.png",
  "description": companyInfo.description,
  "foundingDate": "1990", // Based on "over 30 years" in about content
  "address": {
    "@type": "PostalAddress",
    "streetAddress": companyInfo.contact.address,
    "addressLocality": "Haleiwa",
    "addressRegion": "HI",
    "postalCode": "96712",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": companyInfo.contact.phone,
    "contactType": "customer service",
    "email": companyInfo.contact.email,
    "areaServed": "US",
    "availableLanguage": "English"
  },
  "sameAs": [
    companyInfo.social.facebook,
    companyInfo.social.instagram,
    companyInfo.social.yelp
  ]
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://jetskihawaii.com/#localbusiness",
  "name": companyInfo.name,
  "image": "https://jetskihawaii.com/logo-main.png",
  "description": companyInfo.description,
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": companyInfo.contact.address,
    "addressLocality": "Haleiwa",
    "addressRegion": "HI",
    "postalCode": "96712",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.5934,
    "longitude": -158.1044
  },
  "url": "https://jetskihawaii.com",
  "telephone": companyInfo.contact.phone,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"],
      "opens": "11:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    companyInfo.social.facebook,
    companyInfo.social.instagram,
    companyInfo.social.yelp
  ]
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://jetskihawaii.com/#service",
  "name": "Jet Ski & Kayak Rentals",
  "provider": {
    "@type": "Organization",
    "@id": "https://jetskihawaii.com/#organization"
  },
  "description": servicesContent.subheading,
  "offers": servicesContent.services.map(service => ({
    "@type": "Offer",
    "name": service.title,
    "description": service.description,
    "itemOffered": {
      "@type": "Service",
      "name": service.title,
      "description": service.description,
      "serviceType": "Watercraft Rental"
    }
  }))
}

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://jetskihawaii.com/#reviews",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "@id": "https://jetskihawaii.com/#localbusiness"
  },
  "review": testimonialsContent.testimonials.map(testimonial => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": testimonial.rating,
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": testimonial.author
    },
    "reviewBody": testimonial.text,
    "publisher": {
      "@type": "Organization",
      "name": testimonial.platform.name
    }
  }))
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://jetskihawaii.com/#website",
  "url": "https://jetskihawaii.com",
  "name": companyInfo.name,
  "description": companyInfo.description,
  "publisher": {
    "@type": "Organization",
    "@id": "https://jetskihawaii.com/#organization"
  }
} 