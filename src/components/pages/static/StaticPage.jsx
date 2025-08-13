import PageSEO from "../../components/seo/PageSEO";
import { ORG } from "../seo/seoConfig";

const PAGES = {
  "about-us": {
    title: `About Us | ${ORG.name}`,
    desc: "Know RedSetGo Repairs — our mission, quality standards, and doorstep service promise.",
    type: "AboutPage",
  },
  articles: {
    title: `Articles | ${ORG.name}`,
    desc: "Read tips and guides on phone care, data safety and repair best practices.",
    type: "CollectionPage",
  },
  "privacy-policy": {
    title: `Privacy Policy | ${ORG.name}`,
    desc: "How we collect, use, and protect your information.",
    type: "WebPage",
  },
  "e-waste-policy": {
    title: `E-waste Policy | ${ORG.name}`,
    desc: "Our responsible e-waste disposal and recycling practices.",
    type: "WebPage",
  },
  "cookie-policy": {
    title: `Cookie Policy | ${ORG.name}`,
    desc: "How cookies are used on our website for a better experience.",
    type: "WebPage",
  },
  faqs: {
    title: `FAQs | ${ORG.name}`,
    desc: "Answers to common questions about booking, warranty and payments.",
    type: "FAQPage",
    faq: [
      { q: "Do you provide doorstep service?", a: "Yes, doorstep service is available in covered areas." },
      { q: "How do I book?", a: "Call, WhatsApp, or fill the form on our website." },
    ],
  },
  "terms-and-conditions": {
    title: `Terms & Conditions | ${ORG.name}`,
    desc: "The legal terms for using our services.",
    type: "WebPage",
  },
  "warranty-policy": {
    title: `Warranty Policy | ${ORG.name}`,
    desc: "Warranty coverage and exclusions for parts and services.",
    type: "WebPage",
  },
  "partner-with-us": {
    title: `Partner With Us | ${ORG.name}`,
    desc: "Collaborate with RedSetGo Repairs for B2B and franchise opportunities.",
    type: "WebPage",
  },
  "contact-us": {
    title: `Contact Us | ${ORG.name}`,
    desc: "Get in touch via phone, WhatsApp, or email. Visit our Pune office.",
    type: "ContactPage",
  },
};

export default function StaticPage({ pageKey }) {
  const cfg = PAGES[pageKey];
  const url = `${ORG.url}/${pageKey}`;

  return (
    <>
      <PageSEO
        title={cfg.title}
        description={cfg.desc}
        url={url}
        type={cfg.type}
        faqData={cfg.faq}
        breadcrumbItems={[
          { name: "Home", url: `${ORG.url}/` },
          { name: cfg.title.replace(` | ${ORG.name}`, ""), url },
        ]}
      />
      {/* ---- your UI ---- */}
      <div className="container py-4">
        <h1>{cfg.title.replace(` | ${ORG.name}`, "")}</h1>
        <p>{cfg.desc}</p>
      </div>
    </>
  );
}
