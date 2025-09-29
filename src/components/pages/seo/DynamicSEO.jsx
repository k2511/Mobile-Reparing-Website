import { Helmet } from "react-helmet";

export default function DynamicSEO({ city, service }) {
  const org = {
    name: "Screen Guru Repairs",
    url: "https://www.screenguru.in",
    logo: "https://www.screengutu.in/logo.png",
    phone: "+91-  9900004531",
    address: {
      street: "Shree Tulsi Krupa Plaza, 12/1, SP Road, opposite to Dasappa Hospital, Thigalarpet, Halsurpete, Nagarathpete, Bengaluru, Karnataka 560002",
      locality: city,
      region: "KA",
      postal: "560002",
      country: "IN",
    },
  };

  const localBusinessJSONLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${org.url}/${city.toLowerCase()}-${service.toLowerCase()}-repair#localbusiness`,
    name: `${org.name} - ${service} Repair in ${city}`,
    image: org.logo,
    url: `${org.url}/${city.toLowerCase()}-${service.toLowerCase()}-repair`,
    telephone: org.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: org.address.street,
      addressLocality: org.address.locality,
      addressRegion: org.address.region,
      postalCode: org.address.postal,
      addressCountry: org.address.country,
    },
    areaServed: {
      "@type": "City",
      name: city,
    },
    openingHours: "Mo-Su 09:00-21:00",
    description: `Doorstep ${service.toLowerCase()} repair in ${city}. 30-minute service done in front of you with genuine parts.`,
    sameAs: [
      "https://www.facebook.com/yourpage",
      "https://www.instagram.com/yourpage",
      "https://x.com/yourpage",
    ],
  };

  const websiteJSONLD = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: org.url,
    name: org.name,
    potentialAction: {
      "@type": "SearchAction",
      target: `${org.url}/search?q={query}`,
      "query-input": "required name=query",
    },
  };

  const faqJSONLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Do you repair ${service.toLowerCase()}s in front of the customer?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Our certified technician performs the ${service.toLowerCase()} repair at your doorstep in ${city}, right in front of you for complete transparency.`,
        },
      },
      {
        "@type": "Question",
        name: `How long does a ${service.toLowerCase()} repair take?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Most ${service.toLowerCase()} repairs are completed in under 30 minutes, subject to model and part availability.`,
        },
      },
      {
        "@type": "Question",
        name: "Do you provide warranty on repairs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide a warranty on parts and service. Warranty terms vary by part and device model.",
        },
      },
      {
        "@type": "Question",
        name: `Which areas in ${city} do you serve?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We serve all major areas in ${city} including city center, suburbs, and nearby localities.`,
        },
      },
    ],
  };

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{`${service} Repair in ${city} – Doorstep Service in 30 Minutes | ${org.name}`}</title>
      <meta
        name="description"
        content={`Get doorstep ${service.toLowerCase()} repair in ${city} in under 30 minutes. Certified technicians fix screens, batteries, charging ports and more—right in front of you.`}
      />
      <link
        rel="canonical"
        href={`${org.url}/${city.toLowerCase()}-${service.toLowerCase()}-repair`}
      />

      {/* Social Meta Tags */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={`${service} Repair in ${city} – Doorstep in 30 Minutes | ${org.name}`}
      />
      <meta
        property="og:description"
        content={`Doorstep ${service.toLowerCase()} repair in ${city} with 30-minute service. Repairs done in front of you using genuine parts.`}
      />
      <meta property="og:url" content={`${org.url}/${city.toLowerCase()}-${service.toLowerCase()}-repair`} />
      <meta property="og:image" content={org.logo} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={`${service} Repair in ${city} – Doorstep in 30 Minutes | ${org.name}`}
      />
      <meta
        name="twitter:description"
        content={`Doorstep ${service.toLowerCase()} repair in ${city} with 30-minute service. Repairs done in front of you using genuine parts.`}
      />
      <meta name="twitter:image" content={org.logo} />

      {/* JSON-LD Schemas */}
      <script type="application/ld+json">{JSON.stringify(localBusinessJSONLD)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteJSONLD)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJSONLD)}</script>
    </Helmet>
  );
}
