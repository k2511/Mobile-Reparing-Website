import { Helmet } from "react-helmet";

export default function LocalBusinessSchema() {
  const localBusinessJSONLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.redsetgo.in#localbusiness", // Replace with your real URL
    name: "RedSet Go Repairs",
    image: "https://www.redsetgo.in/logo.png", // Replace with your actual logo URL
    url: "https://www.redsetgo.in",
    telephone: "+91 9916313616",
    email: "support@redsetgo.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Address: Konark Business Hub, 2nd Floor 3S-14, Kondhwa Main Road, Pune, Maharashtra 411048",
      addressLocality: "Pune",
      addressRegion: "MH",
      postalCode: " 411048",
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
