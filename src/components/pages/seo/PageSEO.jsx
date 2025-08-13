import { Helmet } from "react-helmet";
import { ORG } from "../../seo/seoConfig";

export default function PageSEO({
  title,
  description,
  url,
  keywords,
  image = ORG.logo,
  type = "WebPage",
  faqData,            // [{ q: "...", a: "..." }]
  breadcrumbItems,    // [{ name, url }]
}) {
  const webPageJSONLD = {
    "@context": "https://schema.org",
    "@type": type, // WebPage, AboutPage, FAQPage, ContactPage, CollectionPage, etc.
    name: title,
    description,
    url,
  };

  const faqJSONLD = faqData
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqData.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const breadcrumbJSONLD = breadcrumbItems
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      }
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(webPageJSONLD)}</script>
      {faqJSONLD && (
        <script type="application/ld+json">{JSON.stringify(faqJSONLD)}</script>
      )}
      {breadcrumbJSONLD && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJSONLD)}
        </script>
      )}
    </Helmet>
  );
}
