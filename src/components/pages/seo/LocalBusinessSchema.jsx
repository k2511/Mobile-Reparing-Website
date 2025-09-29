import { Helmet } from "react-helmet";

export default function LocalBusinessSchema() {
  const localBusinessJSONLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.screengut.in#localbusiness", // Replace with your real URL
    name: "Screen Guru Go Repairs",
    image: "https://www.screenguru.in/logo.png", // Replace with your actual logo URL
    url: "https://www.screenguru.in",
    telephone: "+91 9900004531",
    email: "info@screenguru.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shree Tulsi Krupa Plaza, 12/1, SP Road, opposite to Dasappa Hospital, Thigalarpet, Halsurpete, Nagarathpete, Bengaluru, Karnataka 560002",
      addressLocality: "Banglore",
      addressRegion: "KA",
      postalCode: " 560002",
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 09:00-21:00",
    priceRange: "₹₹",
    sameAs: [
      "https://www.facebook.com/yourpage",
      "https://twitter.com/yourpage",
      "https://www.instagram.com/yourpage",
      "https://www.linkedin.com/company/yourpage",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Mobile Repair" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Tablet Repair" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Laptop Repair" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "CCTV Repair" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AMC" },
      },
    ],
    areaServed: [
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Shivamogga" },
      { "@type": "City", name: "Chennai" },
      { "@type": "City", name: "Kolkata" },
      { "@type": "City", name: "Pune" },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessJSONLD)}
      </script>
    </Helmet>
  );
}
