import { useParams } from "react-router-dom";
import PageSEO from "../../components/seo/PageSEO";
import { ORG } from "../seo/seoConfig";

const CITY_MAP = {
  bangalore: "Bangalore",
  shimoga: "Shimoga",
  chennai: "Chennai",
  kolkata: "Kolkata",
  pune: "Pune",
};

export default function CityPage() {
  const { citySlug } = useParams();
  const city = CITY_MAP[citySlug] || "City";

  const title = `Doorstep Mobile Repair in ${city} – 30-Minute Service | ${ORG.name}`;
  const description =
    `Get doorstep mobile repair in ${city}. Screens, batteries and charging ports fixed quickly with warranty.`;
  const url = `${ORG.url}/cities/${citySlug}`;

  return (
    <>
      <PageSEO
        title={title}
        description={description}
        url={url}
        keywords={`mobile repair ${city.toLowerCase()}, doorstep mobile repair ${city.toLowerCase()}`}
        type="WebPage"
        breadcrumbItems={[
          { name: "Home", url: `${ORG.url}/` },
          { name: "Cities", url: `${ORG.url}/cities` },
          { name: city, url },
        ]}
        faqData={[
          { q: `Do you repair in all areas of ${city}?`, a: `Yes, we cover prime localities of ${city}. Contact us to confirm your area.` },
          { q: "How fast is the service?", a: "Most repairs are done within 30 minutes depending on parts/model." },
        ]}
      />
      {/* ---- your UI ---- */}
      <div className="container py-4">
        <h1>Doorstep Mobile Repair in {city}</h1>
        <p>{description}</p>
      </div>
    </>
  );
}
