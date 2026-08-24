import { siteMeta, rentalsContent } from "@/lib/home-data"

const SITE = "https://jetskihawaii.com"

/**
 * Structured data for the site.
 *
 * Deliberately does NOT emit AggregateRating. The previous version published a
 * hardcoded "4.9" with a review count derived from however many testimonials
 * happened to be on the page. That's two problems: reviews collected and marked
 * up on your own site are against Google's structured-data policy, and a
 * free-floating AggregateRating node isn't valid markup anyway — it has to nest
 * inside the thing being rated. It earned nothing and carried manual-action
 * risk. If they ever want star ratings in search results, that needs a genuine
 * review source, not numbers typed into a file.
 */

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  "@id": `${SITE}/#business`,
  name: siteMeta.name,
  alternateName: "Watercraft Connection Hawaii",
  description:
    "Family-run jet ski and kayak rentals at Haleiwa Small Boat Harbor on Oahu's North Shore. Operating since 1987.",
  url: SITE,
  telephone: siteMeta.phone,
  email: siteMeta.email,
  image: `${SITE}/og.jpg`,
  logo: `${SITE}/logo-main.png`,
  foundingDate: "1987",
  priceRange: "$$",
  currenciesAccepted: "USD",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteMeta.street,
    addressLocality: "Haleiwa",
    addressRegion: "HI",
    postalCode: "96712",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.5934,
    longitude: -158.1044,
  },
  hasMap: siteMeta.mapsUrl,
  areaServed: {
    "@type": "Place",
    name: "North Shore, Oahu, Hawaii",
  },
  // Tue/Wed and Fri–Sun, 11:00–17:00. Closed Mondays and Thursdays.
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "17:00",
    },
  ],
  sameAs: [siteMeta.social.facebook, siteMeta.social.instagram, siteMeta.social.yelp],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Watercraft rentals",
    itemListElement: rentalsContent.items.map((item) => ({
      "@type": "Offer",
      name: `${item.title} rental`,
      description: item.blurb,
      price: String(item.price),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE}/booking`,
      itemOffered: {
        "@type": "Service",
        name: `${item.title} rental`,
        serviceType: "Watercraft rental",
        provider: { "@id": `${SITE}/#business` },
        areaServed: "Haleiwa, Oahu, Hawaii",
      },
    })),
  },
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: siteMeta.name,
  description:
    "Jet ski and kayak rentals on Oahu's North Shore, family-run out of Haleiwa Small Boat Harbor since 1987.",
  publisher: { "@id": `${SITE}/#business` },
}

/** Mirrors the /faq page so the questions are eligible for FAQ rich results. */
export function buildFaqSchema(faqs: { question: string; answer: string[] }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE}/faq#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.join(" "),
      },
    })),
  }
}
