// src/components/HomeSEO.jsx
import { Helmet } from "react-helmet";
import { org } from "../../../data.js";

export default function HomeSEO() {
  const localBusinessJSONLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${org.url}#localbusiness`,
    name: org.name,
    image: org.logo,
    url: org.url,
    telephone: org.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: org.address.street,
      addressLocality: org.address.locality,
      addressRegion: org.address.region,
      postalCode: org.address.postal,
      addressCountry: org.address.country,
    },
    areaServed: { "@type": "City", name: "Pune" },
    openingHours: "Mo-Su 09:00-21:00",
    description:
      "Doorstep mobile repair in Pune. 30-minute service done in front of you with genuine parts.",
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
        name: "Do you repair phones in front of the customer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our certified technician performs the repair at your doorstep in Pune, right in front of you for complete transparency.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a mobile repair take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most screen and battery replacements are completed in under 30 minutes, subject to model and part availability.",
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
        name: "Which areas in Pune do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We cover Koregaon Park, Viman Nagar, Kothrud, Baner, Wakad, Hinjewadi, Hadapsar, Pimpri-Chinchwad, Camp, Shivajinagar, and nearby localities.",
        },
      },
    ],
  };

  return (
    <Helmet>
      <title>Mobile Repair in Pune – Doorstep Service in 30 Minutes | {org.name}</title>
      <meta
        name="description"
        content="Get doorstep mobile repair in Pune in under 30 minutes. Certified technicians fix screens, batteries, charging ports and more—right in front of you."
      />
      <link rel="canonical" href={`${org.url}/`} />
      <meta
        name="keywords"
        content="mobile repair pune, doorstep mobile repair pune, phone screen replacement pune, battery replacement pune, redsetgo repairs"
      />
      <script type="application/ld+json">{JSON.stringify(localBusinessJSONLD)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteJSONLD)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJSONLD)}</script>
    </Helmet>
  );
}
