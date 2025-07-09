/**
 * SITE DATA
 *
 * This file contains all the content for the website.
 * Update text and image paths here to easily manage site content.
 */

// Company Information
export const companyInfo = {
    name: "The Watercraft Connection",
    shortName: "Watercraft Connection",
    tagline: "Jet Ski & Kayak Rentals in Oahu",
    description:
      "Experience ultimate freedom and immersion with our world-class team of watercraft experts on the beautiful North Shore of Oahu, Hawaii.",
    year: new Date().getFullYear(),
    designCredit: {
      text1: "Website design by",
      company1: "Jordan Bennett",
      url1: "https://tjordanbenn.com/",
      text2: "through",
      company2: "SiteSprint",
      url2: "https://www.sitesprint.dev/",
    },
  
    // Contact Information
    contact: {
      phone: "+18086378006",
      phoneFormatted: "+1 (808) 637-8006",
      email: "hello@jetskihawaii.com",
      address: "66-105 Haleiwa Rd, Haleiwa, HI 96712",
      addressDetails: "Located at Haleiwa Harbor, North Shore",
      hours: "Friday - Sunday: 11:00 AM - 5:00 PM<br />Tuesday - Wednesday: 11:00 AM - 5:00 PM<br /><strong>Closed Mondays and Thursdays</strong>",
      hoursNote: "Last rental at 4:00 PM",
    },
  
    // Social Media Links
    social: {
      facebook: "https://www.facebook.com/Jetskishawaii/",
      instagram: "https://www.instagram.com/jetskihawaii/",
      yelp: "https://www.yelp.com/biz/the-watercraft-connection-haleiwa-3",
    },
  }
  
  // Hero Section
  export const heroContent = {
    heading1: "H A W A I I ' s",
    heading2: "Watercraft", // This is styled with the logo-text class
    heading3: "C O N N E C T I O N",
    mainHeading: "North Shore Jet Ski & Kayak Rentals",
    subheading: "",
    backgroundImage: "/hero.jpg", // Replace with actual image path
    ctaButtons: [
      // {
      //   text: "LEARN MORE",
      //   href: "#services",
      //   isPrimary: false,
      // },
      {
        text: "BOOK NOW",
        href: "/booking",
        isPrimary: true,
      },
    ],
  }
  
  // Services Section
  export const servicesContent = {
    heading: "Experience Adventure",
    subheading:
      "Feel the thrill of an exhilarating ocean adventure with your own personal watercraft and make unforgettable memories as you ride the breathtaking waves of Oahu's legendary North Shore!",
  
    // Main services
    services: [
      {
        id: "jet-ski",
        title: "Jet Ski",
        tagline: "North Shore",
        description: "Experience the thrill of open ocean",
        image: "/jetski-booking.jpg", // Replace with actual image path
        features: [
          { icon: "Clock", text: "45-minute adventure" },
          { icon: "Users", text: "Single or double riders" },
          { icon: "ShieldCheck", text: "Professional instruction included" },
        ],
        learnMoreLink: "#learn-more-jet-ski",
        bookingLink: "/booking",
      },
      {
        id: "kayak",
        title: "Kayak",
        tagline: "North Shore",
        description: "Explore the serene waters of Oahu",
        image: "/kayak-booking.jpg", // Replace with actual image path
        features: [
          { icon: "Clock", text: "Flexible duration" },
          { icon: "Users", text: "Single and tandem kayaks" },
          { icon: "Anchor", text: "Self-guided tours" },
        ],
        learnMoreLink: "#learn-more-kayak",
        bookingLink: "/booking",
      },
    ],
  
    // Additional service
    additionalService: {
      title: "Private Charters",
      tagline: "Also Available",
      description:
        "For special events and family outings, connect with our experienced team to create a custom adventure.",
      learnMoreLink: "/contact",
    },
  }
  
  // Testimonials Section
  export const testimonialsContent = {
    heading: "Our Customers Love Us",
    subheading:
      "Read real reviews by our customers telling why they love The Watercraft Connection and why you should choose us for your next ",
  
    testimonials: [
      {
        platform: {
          name: "Yelp",
          // logo: "/placeholder.svg?height=40&width=80",
        },
        title: "Amazing Jet Ski Experience!",
        text: '"I had an incredible Jet Ski experience—definitely one of my favorites on the water! The instructors are extremely skilled and make you feel safe and comfortable. This is a family-owned business that’s been around for over 30 years, so you’re in good hands."',
        author: "Arnold Bahati",
        rating: 5,
      },
      {
        platform: {
          name: "TripAdvisor",
          // logo: "/placeholder.svg?height=40&width=80",
        },
        title: "Wow!",
        text: '"Chris was a great instructor and all staff were very nice.  Very flexible and overall awesome experience!"',
        author: "Ali Elyassi",
        rating: 5,
      },
      {
        platform: {
          name: "Facebook",
          // logo: "/placeholder.svg?height=40&width=80",
        },
        title: "We Had An Amazing Time",
        text: '"6 of us and we did one tandem ski and then all kayaks. Very fun for all and Lisa and Chris are really nice people. I highly recommend them!"',
        author: "Charles Lee",
        rating: 5,
      },
    ],
  
    ctaButton: {
      text: "SEE MORE REVIEWS",
      href: "https://www.yelp.com/biz/the-watercraft-connection-haleiwa-3",
    },
  }
  
  // Gallery Section
  export const galleryContent = {
    heading: "Watercraft Adventure Photo Gallery",
    tagline: "EXPERIENCE THE NORTH SHORE",
    description:
      "Get a glimpse of what you can expect from a Watercraft Adventure with The Watercraft Connection as well as the quality of the photos taken by our amazing team.",
  
    // Gallery images - replace with actual images
    images: [
      // Replace these placeholder URLs with your actual image URLs
      {
        src: "/gallery/GalleryImg1-min.webp", // Replace with actual image path
        alt: "Jet ski adventure on North Shore",
      },
      {
        src: "/gallery/GalleryImg2-min.webp", // Replace with actual image path
        alt: "Kayaking in crystal clear waters",
      },
      {
        src: "/gallery/GalleryImg3-min.webp", // Replace with actual image path
        alt: "Family enjoying watercraft adventure",
      },
      {
        src: "/gallery/GalleryImg4-min.webp", // Replace with actual image path
        alt: "Scenic ocean views from jet ski",
      },
      {
        src: "/gallery/GalleryImg5-min.webp", // Replace with actual image path
        alt: "Instructor demonstrating jet ski operation",
      },
      {
        src: "/gallery/GalleryImg6-min.webp", // Replace with actual image path
        alt: "Sunset watercraft tour",
      },
      {
        src: "/gallery/GalleryImg7-min.webp", // Replace with actual image path
        alt: "Group jet ski adventure",
      },
      {
        src: "/gallery/GalleryImg8-min.webp", // Replace with actual image path
        alt: "Exploring Oahu's coastline",
      },
      {
        src: "/gallery/GalleryImg9-min.webp", // Replace with actual image path
        alt: "Watercraft adventure with mountain backdrop",
      },
      {
        src: "/gallery/GalleryImg10-min.webp", // Replace with actual image path
        alt: "Jet ski splashing through waves",
      },
      {
        src: "/gallery/GalleryImg11-min.webp", // Replace with actual image path
        alt: "Tandem kayaking experience",
      },
      {
        src: "/gallery/GalleryImg12-min.webp", // Replace with actual image path
        alt: "Aerial view of jet skis on water",
      },
      // If you have fewer than 12 images, you can remove entries
      // If you have more than 12 images, you can add more entries following the same pattern
    ],
  }
  
  // Features Section
  export const featuresContent = {
    heading: "The Watercraft Experience",
    subheading:
      "Each rental includes professional instruction, premium equipment, and unforgettable memories. No prior experience required — just bring your sense of adventure.",
  
    // Main features (first row)
    mainFeatures: [
      {
        icon: "Clock",
        title: "45 Minutes",
        description: "Total rental time for jet skis, with time for safety briefing and setup.",
      },
      {
        icon: "ShieldCheck",
        title: "Safe",
        description: "Expert safety provided by our friendly instructors.",
      },
      {
        icon: "Palm",
        title: "Natural Beauty",
        description: "Experience stunning views. Bring your camera or rent a waterproof bag.",
      },
      {
        icon: "CheckCheck",
        title: "Beginner Friendly",
        description: "All you need is an adventurous spirit. We'll handle the rest!",
      },
    ],
  
    // Additional features (second row)
    additionalFeatures: [
      {
        icon: "Users",
        title: "Small Groups",
        description: "Our Jet Ski rentals have a minimum of 1 and a maximum of 6 patrons.",
      },
      {
        icon: "WaveLine", // Custom icon
        title: "Wildlife",
        description: "Encounter sea turtles and other marine creatures during your adventure.",
      },
      {
        icon: "MapPin",
        title: "Prime Location",
        description: "Located at Haleiwa Small Boat Harbor, minutes from famous beaches.",
      },
      {
        icon: "Lightbulb", // Custom icon
        title: "Be Inspired",
        description: "Discover a deeper understanding of the ocean and its inhabitants.",
      },
    ],
  
    // Amenities section
    amenities: {
      heading: "Everything You Need",
      subheading: "We've thought of everything to make your adventure safe, comfortable, and memorable.",
      list: [
        "Services provided in English",
        "Free parking at dock",
        "Waterproof bags available",
        "Safety equipment provided",
        "Learn about Hawaii's marine life",
        "No experience necessary",
      ],
      ctaButton: {
        text: "Book Your Adventure",
        href: "/booking",
      },
    },
  }
  
  // Call to Action Section
  export const ctaContent = {
    heading: "Ready for Your Ocean Adventure?",
    subheading: "Book your watercraft adventure today and create memories that will last a lifetime.",
    buttons: [
      {
        text: "BOOK NOW",
        href: "/booking",
        isPrimary: true,
      },
      {
        text: "CONTACT US",
        href: "/contact",
        isPrimary: false,
      },
    ],
  }
  
  // About Page Content
  export const aboutContent = {
    heading: "About Us",
  
    // Main story section
    story: {
      tagline: "OUR STORY",
      heading: "Passionate About Ocean Adventures",
      content: [
        "Welcome to The Watercraft Connection, Oahu’s oldest and most trusted jet ski rental company! As a locally owned and family-operated business, we have been serving the North Shore for over 30 years, sharing our passion for the ocean with both locals and visitors alike. Located in the historic surf town of Haleiwa, we offer jet ski rentals, kayaking, private charters including snorkeling, fishing, sunset cruises and more—all designed to immerse you in the natural beauty of Hawaii’s waters. Whether you’re looking for high-speed excitement on a jet ski, a peaceful paddle along the Anahulu River, or an exclusive private charter, we’re here to create unforgettable experiences.",
        "At The Watercraft Connection, we take pride in being Hawaii’s longest-running jet ski rental company, built on a legacy of exceptional service, deep local knowledge, and a love for the ocean. Our prime location at Haleiwa Small Boat Harbor, near Ali‘i Beach and Puaena Point, makes us the perfect launch point for adventure. We operate five days a week (weather permitting), from 11 AM to 5 PM, giving you plenty of time to explore and enjoy. Easily accessible by car or bus, our spot on the North Shore is well worth the scenic drive. Stop by our kiosk, book your next adventure, and let our family welcome you to the best water experience on the island!"
      ],
      image: "/location-min.webp", // Replace with actual image
    },
  
    // Values section
    values: {
      tagline: "OUR VALUES",
      heading: "What Drives Us",
      list: [
        {
          title: "Safety First",
          description:
            "We prioritize your safety above all else. Our equipment is meticulously maintained, and our staff is trained in emergency procedures.",
        },
        {
          title: "Exceptional Service",
          description:
            "We go above and beyond to ensure your experience exceeds expectations, from booking to the end of your adventure.",
        },
        {
          title: "Environmental Respect",
          description:
            "We are committed to preserving Hawaii's natural beauty through sustainable practices and education.",
        },
      ],
    },
  
    // Team section
    team: {
      tagline: "OUR TEAM",
      heading: "Meet Our Watercraft Experts",
      members: [
        {
          name: "Tyler",
          title: "",
          image: "/tyler-min.webp", // Replace with actual image
        },
        {
          name: "Chris",
          title: "",
          image: "/chris-min.webp", // Replace with actual image
        },
      ],
    },
  
    // CTA section
    cta: {
      heading: "Ready for your adventure?",
      buttons: [
        {
          text: "Book Now",
          href: "/booking",
          isPrimary: true,
        },
        {
          text: "View FAQs",
          href: "/faq",
          isPrimary: false,
        },
        {
          text: "Return Home",
          href: "/",
          isOutline: true,
        },
      ],
    },
  }
  
  // FAQ Page Content
  export const faqContent = {
    heading: "Frequently Asked Questions",
  
    faqs: [
      {
        question: "I've never been on a Jet Ski before. Is it difficult to operate?",
        answer: [
          "Many of our customers are first-time riders, and we're here to make sure you feel confident before hitting the water. When you rent a jet ski from us, one of our friendly instructors will provide a full safety briefing and go over everything you need to know.",
          "Jet skis are easy to operate and extremely safe! They're powered by a jet of water instead of an exposed propeller. We provide a mandatory U.S. Coast Guard-approved life jacket. If you happen to fall off, the life jacket will keep you afloat regardless of your swimming ability.",
          "The ignition key is attached to the driver, ensuring the jet ski automatically stops until you remount. Goggles are available for rent at just $5 per person! Get ready for an exciting and worry-free ride!",
        ],
      },
      {
        question: "Can I bring a passenger?",
        answer: ["Yes, you can bring a passenger! Double your fun for an extra $50 per passenger."],
      },
      {
        question: "Is there an age limit to ride a Jet Ski?",
        answer: [
          "There is no specific age limit for passengers. As long as the passenger can hold onto the driver and the driver is comfortable with taking a young child with them, everyone can have fun!",
        ],
      },
      {
        question: "What is the riding area like?",
        answer: [
          "Our riding area is located half a mile to a mile out from the beautiful shores of Haleiwa Beach Park and the Haleiwa Boat Harbor. We allow an open-ocean experience within our specified permitted area.",
        ],
      },
      {
        question: "Can I bring a camera with me?",
        answer: [
          "We suggest that if you want to take photos on the water, you bring a waterproof camera. Even on days that seem like there is no wind, small particles of water can spray into your camera and damage it. If you'd like to bring your phone or other devices to take photos/videos, there is a small compartment on the watercraft where you can store them. We recommend renting one of our waterproof bags and being very careful when bringing expensive tech out on the water. We are not liable for what happens if it is lost or damaged. Our instructor can also take some pictures of you, but please be sure to tip them!",
        ],
      },
      {
        question: "Is there somewhere safe I can store my belongings whilst I am on the water?",
        answer: [
          "There is always someone at our Kiosk to ensure that your personal items are safe and sound. We also offer waterproof bags to rent for you to take any personal items you might want to have with you on the water. We are not liable for items lost or damaged, so be careful!",
        ],
      },
      {
        question: "Do I need to make a reservation?",
        answer: [
          "Yes, we require reservations ahead of time. In this business, we have to work with Mother Nature because the weather and tides on the North Shore are often unpredictable, so if we need to cancel you will be contacted.",
        ],
      },
      {
        question: "Is there parking at the harbor?",
        answer: ["Yes, there is plenty of free parking available at the harbor."],
      },
    ],
  
    // Help section
    helpSection: {
      heading: "Need assistance or have a special request?",
      text: "We're happy to help! Contact us using the phone or email icons at the top of the page.",
      buttons: [
        {
          text: "Contact Us",
          href: "/contact",
          isPrimary: true,
        },
        {
          text: "Book Now",
          href: "/booking",
          isPrimary: false,
        },
      ],
    },
  }
  
  // Contact Page Content
  export const contactContent = {
    heading: "Contact Us",
    intro:
      "We're here to help you plan your perfect watercraft adventure on the beautiful North Shore of Oahu. Whether you have questions about our rentals, need assistance with a booking, or want to inquire about custom experiences, our friendly team is ready to assist you.",
  
    // Contact sections
    sections: {
      phone: {
        title: "Phone (Call or Text)",
        value: companyInfo.contact.phoneFormatted,
        note: "Available daily from 9:00 AM to 5:00 PM HST",
      },
      email: {
        title: "Email",
        value: companyInfo.contact.email,
        note: "We typically respond within 24 hours",
      },
      location: {
        title: "Location",
        value: companyInfo.contact.address,
        note: companyInfo.contact.addressDetails,
      },
      hours: {
        title: "Hours of Operation",
        value: companyInfo.contact.hours,
        note: companyInfo.contact.hoursNote,
      },
      social: {
        title: "Connect With Us",
      },
    },
  
    // Map placeholder text (replace with actual Google Maps embed)
    mapPlaceholder: {
      title: "Google Maps Embed",
      description:
        "To embed an actual Google Map, you'll need to replace this placeholder with an iframe from Google Maps.",
      example:
        '<iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    },
  
    // CTA section
    cta: {
      heading: "Ready for your adventure?",
      buttons: [
        {
          text: "Book Now",
          href: "/booking",
          isPrimary: false,
        },
        {
          text: "View FAQs",
          href: "/faq",
          isPrimary: true,
        },
        {
          text: "Return Home",
          href: "/",
          isOutline: true,
        },
      ],
    },
  }
  
  // Booking Page Content
  export const bookingContent = {
    heading: "Book Your Adventure",
    intro:
      "Select your preferred watercraft experience, date, and time using our online booking system below. Our team will confirm your reservation and provide any additional details you need for your adventure.",
  
    // Important information
    importantInfo: {
      heading: "Important Information",
      items: [
        "Reservations are required in advance",
        "Please arrive 15 minutes before your scheduled time",
        "Cancellations must be made 12 hours in advance for a full refund",
        "Weather-related cancellations will be rescheduled or refunded",
        "If you are unable to book a reservation during a time where we are typically open, then there is likely bad weather or high surf. Please reach out to us if you have any questions.",
        "We rent out a maximum of 3 Jet Skis per hour time slot. For groups wanting to rent more than 3 Jet Skis, simply schedule another appointment for the following hour.",
        "If you'd like to add extra people to ride on the same jet ski, select from the “Add to Appointment” options. You can add one additional passengers per ski.",
        "Must be 16+ years old to drive the Jet Skis.",
      ],
  
      // Questions section
      questions: {
        heading: "Questions?",
        text: "If you have any questions about your booking or need assistance, please don't hesitate to contact us.<br/><br/><strong>Important Note:</strong><br/>Upon arrival, we require a <strong>temporary</strong> credit card authorization per jet ski to hold in case of damage or lost equipment. This hold is released at the end of day if no losses or damages occur.",
      },
    },
  
    // Booking iframe placeholder
    bookingIframe: {
      heading: "Acuity Scheduling iframe",
      description: "Insert your Acuity Scheduling iframe code here. The iframe will replace this placeholder.",
    },
  }
  
  
