import { useParams } from "react-router-dom";
import PageSEO from "../../components/seo/PageSEO";
import { ORG } from "../seo/seoConfig";

const MAP = {
  mobile: {
    name: "Mobile Repair",
    desc: "Doorstep mobile repair in Pune. Screens, batteries, charging ports fixed in 30 minutes by certified technicians.",
    keywords: "mobile repair pune, doorstep mobile repair, phone screen replacement pune",
  },
  tablets: {
    name: "Tablet Repair",
    desc: "Professional tablet repair in Pune. Screen and battery replacement with warranty.",
    keywords: "tablet repair pune, ipad screen replacement pune",
  },
  macbook: {
    name: "MacBook Repair",
    desc: "Expert MacBook repair in Pune — screen, battery, keyboard and logic board service.",
    keywords: "macbook repair pune, macbook battery replacement pune",
  },
  "smart-watch": {
    name: "Smart Watch Repair",
    desc: "Smart watch repair in Pune — screen, battery, strap and water damage service.",
    keywords: "smart watch repair pune, apple watch repair pune",
  },
  iphone: {
    name: "iPhone Repair",
    desc: "iPhone repair at home in Pune. Screen & battery replacement in 30 minutes with genuine parts.",
    keywords: "iphone repair pune, iphone screen replacement pune",
  },
};

export default function ServicePage() {
  const { serviceSlug } = useParams();
  const data = MAP[serviceSlug] || {
    name: "Repair Service",
    desc: "Reliable device repair service in Pune.",
    keywords: "repair pune",
  };

  const title = `${data.name} in Pune – Doorstep Service | ${ORG.name}`;
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
