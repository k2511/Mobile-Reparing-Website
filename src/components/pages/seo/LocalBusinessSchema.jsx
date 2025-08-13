import { Helmet } from "react-helmet";

export default function LocalBusinessSchema() {
  const localBusinessJSONLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.ongoffix.com#localbusiness", // Replace with your real URL
    name: "Ongoffix Repairs",
    image: "https://www.ongoffix.com/logo.png", // Replace with your actual logo URL
    url: "https://www.ongoffix.com",
    telephone: "+91 8070900800",
    email: "support@ongoffix.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No – 57, Vrindavan Dham, Plot No – 5 to 8, Sector – 05, Ghansoli",
      addressLocality: "Navi Mumbai",
      addressRegion: "MH",
      postalCode: "400701",
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
        itemOffered: { "@type": "Service", name: "MacBook Repair" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Smart Watch Repair" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "iPhone Repair" },
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
