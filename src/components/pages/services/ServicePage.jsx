import { useParams } from "react-router-dom";
import PageSEO from "../../components/seo/PageSEO";
import { ORG } from "../seo/seoConfig";

const MAP = {
  mobile: {
    name: "Mobile Repair",
    desc: "Doorstep mobile repair in Banglore. Screens, batteries, charging ports fixed in 30 minutes by certified technicians.",
    keywords: "mobile repair Banglore, doorstep mobile repair, phone screen replacement Banglore",
  },
  tablets: {
    name: "Tablet Repair",
    desc: "Professional tablet repair in Pune. Screen and battery replacement with warranty.",
    keywords: "tablet repair pune, ipad screen replacement pune",
  },
  macbook: {
    name: "Mobile Accesories Repair",
    desc: "Expert Mobile Accories in Banglore — screen, battery, keyboard and logic board service.",
    keywords: "macbook repair Banglore, Mobile Accesories in Banglore",
  },
  "smart-watch": {
    name: "Smart Watch Repair",
    desc: "Smart watch repair in Banglore — screen, battery, strap and water damage service.",
    keywords: "smart watch repair Banglore, apple watch repair Banglore",
  },
  iphone: {
    name: "iPhone Repair",
    desc: "iPhone repair at home in Banglore. Screen & battery replacement in 30 minutes with genuine parts.",
    keywords: "iphone repair Banglore, iphone screen replacement pune",
  },
};

export default function ServicePage() {
  const { serviceSlug } = useParams();
  const data = MAP[serviceSlug] || {
    name: "Repair Service",
    desc: "Reliable device repair service in Banglore.",
    keywords: "repair pune",
  };

  const title = `${data.name} in Banglore – Doorstep Service | ${ORG.name}`;
  const url = `${ORG.url}/services/${serviceSlug}`;

  return (
    <>
      <PageSEO
        title={title}
        description={data.desc}
        url={url}
        keywords={data.keywords}
        type="CollectionPage"
        breadcrumbItems={[
          { name: "Home", url: `${ORG.url}/` },
          { name: "Services", url: `${ORG.url}/services` },
          { name: data.name, url },
        ]}
        faqData={[
          { q: "Do you repair at doorstep?", a: "Yes. Most common issues are fixed at your location within 30 minutes." },
          { q: "Is there a warranty?", a: "Yes. We provide warranty on parts and service. Terms vary by device/part." },
        ]}
      />
      {/* ---- your UI goes below ---- */}
      <div className="container py-4">
        <h1>{data.name}</h1>
        <p>{data.desc}</p>
      </div>
    </>
  );
}
