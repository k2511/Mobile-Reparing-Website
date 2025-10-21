// export const ORG = {
//   name: "Screen Guru",
//   url: "https://www.screenguru.in",
//   logo: "https://www.screenguru.in/logo.png",
//   phone: "+91- 9900004531",
//   address: {
//     street: "hree Tulsi Krupa Plaza, 12/1, SP Road, opposite to Dasappa Hospital, Thigalarpet, Halsurpete, Nagarathpete, Bengaluru, Karnataka 560002",
//     locality: "Banglore",
//     region: "KA",
//     postal: "560002",
//     country: "IN",
//   },
//   sameAs: [
//     "https://www.facebook.com/yourpage",
//     "https://www.instagram.com/yourpage",
//     "https://x.com/yourpage",
//   ],
// };




import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, url, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Screenguru, phone repair Bangalore, tablet repair Bangalore, watch repair Bangalore, doorstep repair service, affordable phone repair, fast repair service" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />

      {/* Schema JSON-LD */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Screenguru",
          "image": "https://screenguru.in/logo.png",
          "@id": "https://screenguru.in",
          "url": "https://screenguru.in",
          "telephone": "+919900007849",
          "priceRange": "₹₹",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shree Tulsi Krupa Plaza, 12/1, SP Road, opposite Dasappa Hospital, Thigalarpet, Halsurpete, Nagarathpete",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "postalCode": "560002",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 12.9644934,
            "longitude": 77.5840211
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            "opens": "10:00",
            "closes": "20:00"
          },
          "sameAs": [
            "https://www.facebook.com/screenguru",
            "https://www.instagram.com/screenguru",
            "https://www.linkedin.com/company/screenguru"
          ],
          "description": "Screenguru provides doorstep repair services for phones, tablets, and watches in Bengaluru with a 6-month warranty. Fast, reliable, and affordable service!"
        }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
