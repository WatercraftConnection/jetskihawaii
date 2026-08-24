/**
 * HOMEPAGE CONTENT (redesign)
 *
 * Scoped to the new homepage only. lib/site-data.ts is left untouched so
 * /about, /faq, /contact and /booking keep rendering off the original data.
 *
 * Every factual claim here traces back to the client's existing copy:
 * family-run since 1990, Oahu's longest-running jet ski operation, launching
 * from Haleiwa Small Boat Harbor, 45-minute rides, 16+ to drive, max 3 skis
 * per hour slot, +$25 per passenger, Coast Guard life jackets, instruction
 * included, closed Mondays and Thursdays.
 */

/* ------------------------------------------------------------------
   PRICING — verified 2026-08-23 against the live Acuity booking page
   (app.acuityscheduling.com/schedule.php?owner=34861224):

     One Jet Ski Rental      45 minutes   $120
     Two Jet Ski Rentals     45 minutes   $240
     Three Jet Ski Rentals   45 minutes   $360
     Single Seat Kayak        1 hour       $20
     Double Seat Kayak        1 hour       $40

   Acuity is the source of truth — if rates change there, change them here.
   Setting `pricesConfirmed` to false re-enables the "sample rate" marker.
   ------------------------------------------------------------------ */
export const pricesConfirmed = true

export const heroContent = {
  eyebrow: "Hawaii's Watercraft Connection",
  // Split so the accent colour lands on the second line — it's what gives the
  // hero its one hit of yellow against the blue.
  headline: "45 minutes of",
  headlineAccent: "open ocean.",
  sub: "Family-run out of Haleiwa Small Boat Harbor since 1990 — Oahu's longest-running jet ski outfit. Every rental includes instruction, gear, and a crew that's been reading this water for three decades.",
  primaryCta: { text: "Check availability", href: "/booking" },
  secondaryCta: { text: "Call us", href: "tel:+18086378006" },
  note: "Open Tue–Wed & Fri–Sun, 11am–5pm · last rental 4pm",
  stats: [
    { value: "1990", unit: "", label: "Family run since" },
    { value: "45", unit: "min", label: "Time on the water" },
    { value: "Haleiwa", unit: "", label: "Small Boat Harbor" },
  ],
}

export const rentalsContent = {
  eyebrow: "Haleiwa Small Boat Harbor",
  heading: "What you can take out",
  intro:
    "Two ways onto the water, both launching a half mile off Ali'i Beach. Instruction and Coast Guard life jackets come with either one.",
  items: [
    {
      id: "jet-ski",
      title: "Jet Ski",
      badge: "Most booked",
      price: 120,
      priceUnit: "per ski",
      image: "/jetski-booking.webp",
      alt: "Jet ski riding the open ocean off Haleiwa",
      blurb:
        "Open-ocean riding inside our permitted area off Haleiwa. Sea turtles are common. Safety briefing and instruction come first — most of our riders have never been on one before.",
      chips: [
        { text: "45 minutes", tone: "ocean" as const },
        { text: "16+ to drive", tone: "ocean" as const },
        { text: "+$25 per passenger", tone: "slate" as const },
        { text: "Max 3 skis per slot", tone: "slate" as const },
      ],
      cta: "Book a jet ski",
    },
    {
      id: "kayak",
      title: "Kayak",
      badge: null,
      price: 20,
      priceUnit: "per hour",
      image: "/kayak-booking.webp",
      alt: "Tandem kayak on calm water near Haleiwa",
      blurb:
        "Self-guided paddling on the Anahulu River or along the harbor. Single or double seat, rented by the hour.",
      chips: [
        { text: "1 hour", tone: "ocean" as const },
        { text: "Self-guided", tone: "ocean" as const },
        { text: "Single $20 · Double $40", tone: "slate" as const },
      ],
      cta: "Book a kayak",
    },
  ],
  charter: {
    eyebrow: "Also available",
    title: "Private charters",
    blurb:
      "Snorkeling, fishing, sunset cruises, and family outings built around what you actually want to do. Tell us the group and the date and we'll put it together.",
    cta: { text: "Ask about charters", href: "/contact" },
  },
}

export const experienceContent = {
  eyebrow: "What's included",
  heading: "Everything comes with the rental",
  intro:
    "One price, no upsell at the dock. The only extras are goggles and waterproof bags if you want them.",
  // Consolidated from the old eight-card grid plus the six-item checklist.
  // Kept to five things that are actually differentiators.
  items: [
    {
      icon: "ShieldCheck",
      title: "Instruction first",
      body: "A full safety briefing and hands-on walkthrough before you leave the dock. Coast Guard life jackets provided.",
    },
    {
      icon: "Waves",
      title: "Real open ocean",
      body: "Our permitted area sits a half mile to a mile off Haleiwa Beach Park — not a roped-off lagoon.",
    },
    {
      icon: "Turtle",
      title: "Wildlife you'll actually see",
      body: "Sea turtles are a regular sight out there. Bring a waterproof camera, or rent one of our dry bags.",
    },
    {
      icon: "Users",
      title: "Small by design",
      body: "Three skis per hour slot, maximum. You're not queuing behind a tour bus.",
    },
    {
      icon: "MapPin",
      title: "Easy to get to",
      body: "Haleiwa Small Boat Harbor, minutes from Ali'i Beach and Puaena Point. Free parking at the dock.",
    },
  ],
}

export const testimonialsContent = {
  eyebrow: "Reviews",
  heading: "What people say after",
  items: [
    {
      platform: "Yelp",
      title: "Amazing jet ski experience",
      text: "I had an incredible Jet Ski experience—definitely one of my favorites on the water! The instructors are extremely skilled and make you feel safe and comfortable. This is a family-owned business that's been around for over 30 years, so you're in good hands.",
      author: "Arnold Bahati",
    },
    {
      platform: "TripAdvisor",
      title: "Wow!",
      text: "Chris was a great instructor and all staff were very nice. Very flexible and overall awesome experience!",
      author: "Ali Elyassi",
    },
    {
      platform: "Facebook",
      title: "We had an amazing time",
      text: "6 of us and we did one tandem ski and then all kayaks. Very fun for all and Lisa and Chris are really nice people. I highly recommend them!",
      author: "Charles Lee",
    },
  ],
  cta: {
    text: "Read more on Yelp",
    href: "https://www.yelp.com/biz/the-watercraft-connection-haleiwa-3",
  },
}

export const galleryContent = {
  eyebrow: "Experience the North Shore",
  heading: "Out on the water",
  intro: "Shot by our crew, on ordinary days. No stock photography.",
  // Ten images sized to the varied grid (two large anchors, eight supporting).
  // The weakest frames from the old twelve — the kiosk shot and the duplicate
  // jet-ski-on-flat-water frames — are left out.
  images: [
    { src: "/gallery/GalleryImg1-min.webp", alt: "Jet ski adventure on the North Shore" },
    { src: "/gallery/GalleryImg2-min.webp", alt: "Kayaking in clear water near Haleiwa" },
    { src: "/gallery/GalleryImg3-min.webp", alt: "Family out on a watercraft adventure" },
    { src: "/gallery/GalleryImg4-min.webp", alt: "Scenic ocean views from a jet ski" },
    { src: "/gallery/GalleryImg5-min.webp", alt: "Instructor demonstrating jet ski operation" },
    { src: "/gallery/GalleryImg7-min.webp", alt: "Group jet ski adventure off Haleiwa" },
    { src: "/gallery/GalleryImg8-min.webp", alt: "Exploring Oahu's coastline" },
    { src: "/gallery/GalleryImg9-min.webp", alt: "Watercraft adventure with mountain backdrop" },
    { src: "/gallery/GalleryImg11-min.webp", alt: "Tandem kayaking near the harbor" },
    { src: "/gallery/GalleryImg12-min.webp", alt: "Aerial view of jet skis on the water" },
  ],
}

export const ctaContent = {
  heading: "The water's right there.",
  sub: "Book online, or call and talk to whoever picks up. Usually that's family.",
  primary: { text: "Check availability", href: "/booking" },
  secondary: { text: "(808) 637-8006", href: "tel:+18086378006" },
}

export const siteMeta = {
  name: "The Watercraft Connection",
  shortName: "Watercraft Connection",
  phone: "+18086378006",
  phoneFormatted: "(808) 637-8006",
  email: "hello@jetskihawaii.com",
  street: "66-105 Haleiwa Rd",
  city: "Haleiwa, HI 96712",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Watercraft+Connection+Haleiwa",
  hours: [
    { days: "Tuesday – Wednesday", time: "11:00am – 5:00pm" },
    { days: "Thursday", time: "Closed" },
    { days: "Friday – Sunday", time: "11:00am – 5:00pm" },
    { days: "Monday", time: "Closed" },
  ],
  hoursNote: "Last rental goes out at 4:00pm. Weather and surf permitting.",
  social: {
    facebook: "https://www.facebook.com/Jetskishawaii/",
    instagram: "https://www.instagram.com/jetskihawaii/",
    yelp: "https://www.yelp.com/biz/the-watercraft-connection-haleiwa-3",
  },
  nav: [
    { text: "Rentals", href: "/#rentals" },
    { text: "What's included", href: "/#included" },
    { text: "About", href: "/about" },
    { text: "FAQ", href: "/faq" },
    { text: "Contact", href: "/contact" },
  ],
}
