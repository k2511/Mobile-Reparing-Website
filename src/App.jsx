import React, { Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

// Always-loaded components (critical for layout)
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TopBar from "./components/TopBar.jsx";
import ContactButtons from "./components/ContactButtons.jsx";

// Styles
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// SEO
import { cities, services } from "./data.js";
import HomeSEO from "./components/pages/seo/HomeSEO.jsx";
import DynamicSEO from "./components/pages/seo/DynamicSEO.jsx";

// Footer Navigation Links
import AboutUs from "./components/company/aboutUs.jsx";
import Articles from "./components/company/articles.jsx";
import PrivacyPolicy from "./components/company/cookie.jsx";
import EwastePolicy from "./components/company/eWaste.jsx";
import CookiePolicy from "./components/company/privacy.jsx";
import Mobile from "./components/Brand.jsx";
import Laptop from "./components/pages/LaptopRepairPage.jsx";
import Tablet from "./components/pages/TabletRepairPage.jsx";
import CCTV from "./components/pages/CctvRepairPage.jsx";
import TermCondition from "./components/help/termsCondition.jsx";
import Warranty from "./components/help/warranty.jsx";
import Partner from "./components/help/partner.jsx";
import Contact from "./components/help/contactUs.jsx";
import FAQ from "./components/FAQ.jsx";
import TipsSection from "./components/TipsSection.jsx";
import FeaturesSection from "./components/FeaturesSection.jsx";
import WhatYouGet from "./components/WhatYouGet.jsx";
import BlogSection from "./components/BlogSection.jsx";
import Term from "./components/company/TermConditions.jsx";

// Lazy-loaded components for home page
const Slider = React.lazy(() => import("./components/Slider.jsx"));
const ProcessSteps = React.lazy(() => import("./components/ProcessSteps.jsx"));
const Services = React.lazy(() => import("./components/Services.jsx"));
const Doorstep = React.lazy(() => import("./components/Doorstep.jsx"));
const VideoEmbed = React.lazy(() => import("./components/VideoEmbed.jsx"));
const WhyUs = React.lazy(() => import("./components/WhyUs.jsx"));
const FeedBack = React.lazy(() => import("./components/FeedBack.jsx"));
const ValueProps = React.lazy(() => import("./components/valueProps.jsx"));
const LatestBlogs = React.lazy(() => import("./components/LatestBlogs.jsx"));
const LatestStories = React.lazy(() =>
  import("./components/LatestStories.jsx")
);
const Brand = React.lazy(() => import("./components/Brand.jsx"));

// Lazy-loaded page components
const LaptopRepairPage = React.lazy(() =>
  import("./components/pages/LaptopRepairPage.jsx")
);
const CctvRepairPage = React.lazy(() =>
  import("./components/pages/CctvRepairPage.jsx")
);
const TabletRepairPage = React.lazy(() =>
  import("./components/pages/TabletRepairPage.jsx")
);
const BrandIssues = React.lazy(() =>
  import("./components/pages/BrandIssues.jsx")
);

// Lazy-loaded brand pages
const SamsungModels = React.lazy(() =>
  import("./components/brands/SamsungPage.jsx")
);

const iphone = React.lazy(() => import("./components/brands/IphonePage.jsx"));

const AsusPage = React.lazy(() => import("./components/brands/AsusPage.jsx"));
const NothingPage = React.lazy(() =>
  import("./components/brands/NothingPage.jsx")
);
const VivoPage = React.lazy(() => import("./components/brands/VivoPage.jsx"));
const OppoPage = React.lazy(() => import("./components/brands/OppoPage.jsx"));
const RealmePage = React.lazy(() =>
  import("./components/brands/RealmePage.jsx")
);
const GooglePage = React.lazy(() =>
  import("./components/brands/GooglePage.jsx")
);
const MiPage = React.lazy(() => import("./components/brands/MiPage.jsx"));
const OnePlusPage = React.lazy(() =>
  import("./components/brands/OnePlusPage.jsx")
);
const MotorolaPage = React.lazy(() =>
  import("./components/brands/MotorolaPage.jsx")
);
const IqooPage = React.lazy(() => import("./components/brands/IQOOPAGE.jsx"));
const PocoPage = React.lazy(() => import("./components/brands/PocoPage.jsx"));
const TecnoPage = React.lazy(() => import("./components/brands/TecnoPage.jsx"));
const NokiaPage = React.lazy(() => import("./components/brands/NokiaPage.jsx"));
const HonorPage = React.lazy(() => import("./components/brands/HonorPage.jsx"));

//Tab Section

import TabletBrandPage from "./components/TabletBrand.jsx";
import SamsungTab from "./components/Tab/SamsungTab.jsx";
import OppoTab from "./components/Tab/OppoTab.jsx";
import MiTab from "./components/Tab/miTab.jsx";
import LenovoTab from "./components/Tab/LenovoTab.jsx";
import OnePlusTab from "./components/Tab/OnePlus.jsx";
import RealmeTab from "./components/Tab/realmeTab.jsx";
import GoogleTab from "./components/Tab/GoogleTab.jsx";

import MotorolaTab from "./components/Tab/motorolaTab.jsx";
import IQOOTab from "./components/Tab/iqooTab.jsx";
import PocoTab from "./components/Tab/PocoTab.jsx";
import NokiaTab from "./components/Tab/NokiaTab.jsx";
import HonorTab from "./components/Tab/HonorTab.jsx";
import AsusTab from "./components/Tab/asusTab.jsx";
import LavaTab from "./components/Tab/LavaTab.jsx";
import MicrosoftTab from "./components/Tab/MicrosoftTab.jsx";
import MicromaxTab from "./components/Tab/micromaxTab.jsx";
import IphoneTab from "./components/Tab/IphoneTab.jsx";

//Laptop Section
import LaptopBrandPage from "./components/LaptopBrandPage.jsx";
import DellLap from "./components/Laptop/DellLap.jsx";
import HPLap from "./components/Laptop/HPLap.jsx";
import AsusLap from "./components/Laptop/AsusLap.jsx";
import LenovoLap from "./components/Laptop/LenovoLap.jsx";
import MsiLap from "./components/Laptop/MsiLap.jsx";
import AcerLap from "./components/Laptop/AcerLap.jsx";
import SamsungLap from "./components/Laptop/SamsungLap.jsx";
import MicrosoftLap from "./components/Laptop/MicrosoftLap.jsx";

//AMC
import AMCDetails from "./components/AMC/AMCPage.jsx";

//Spare Parts
import SparePart from "./components/SparePart/SparePart.jsx";
import WatchRepair from "./components/pages/static/WatchRepair.jsx";
import MobileAccessories from "./components/pages/Mobile accessories.jsx";
import WatchRepairs from "./components/pages/WatchRepairs.jsx";
import TechCheck from "./components/pages/TechCheck.jsx";
import DeviceCheck from "./components/pages/DeviceCheck.jsx";
import MobileSection from "./components/MobileSection.jsx";
import BatteryReplacementCard from "./components/BatteryReplacementCard.jsx";
import CertifiedPreOwnedCard from "./components/CertifiedPreOwnedCard.jsx";
import OurValue from "./components/OurValue.jsx";
import ConsultationSection from "./components/Consultation.jsx";
import TrustedBrands from "./components/TrustedBrands.jsx";
import HelpCenter from "./components/company/HelpCenter.jsx";
import TrackRepairs from "./components/company/trackRepairs.jsx";
import ReturnRefunds from "./components/company/ReturnRefunds.jsx";
import PressMedia from "./components/company/PressMedia.jsx";
import IphonePage from "./components/brands/IphonePage.jsx";

// Loading component
const LoadingSpinner = () => (
  <div
    className="d-flex justify-content-center align-items-center"
    style={{ minHeight: "200px" }}
  >
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

// Layout component
const MainLayout = () => (
  <div>
    <TopBar />
    <Header />
    <Suspense fallback={<LoadingSpinner />}>
      <Outlet /> {/* Renders child routes */}
    </Suspense>

    <Footer />
    <ContactButtons />
  </div>
);

// Home Page
const HomePage = () => {
  const org = {
    name: "Screen Guru Repairs",
    url: "https://www.screenguru.in",
    logo: "https://www.screenguru.in/logo.png",
    phone: "+91-99000 07849",
    address: {
      street:
        "Shree Tulsi Krupa Plaza, 12/1, SP Road, opposite to Dasappa Hospital, Thigalarpet, Halsurpete, Nagarathpete,",
      locality: "Bengaluru, Karnataka ",
      region: "KA",
      postal: "560002",
      country: "IN",
    },
  };
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
    areaServed: {
      "@type": "City",
      name: "Pune",
    },
    openingHours: "Mo-Su 09:00-21:00",
    description:
      "Doorstep mobile repair in Pune. 30-minute service done in front of you with genuine parts.",
    sameAs: [
      "https://www.facebook.com/yourpage", // update
      "https://www.instagram.com/yourpage", // update
      "https://x.com/yourpage", // update
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
          text: "Shree Tulsi Krupa Plaza, 12/1, SP Road, opposite to Dasappa Hospital, Thigalarpet, Halsurpete, Nagarathpete, Bengaluru, Karnataka 560002",
        },
      },
    ],
  };

  return (
    <div>
      <Helmet>
        <title>
          Screen Guru – Doorstep Mobile Repair Service in Banglore | Fast &
          Reliable
        </title>
        <meta
          name="description"
          content="Get doorstep mobile repair in Banglore in under 30 minutes. Certified technicians fix screens, batteries, charging ports and more—right in front of you."
        />
        <link rel="canonical" href={`${org.url}/`} />
        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="mobile repair banglore, doorstep mobile repair pune, phone screen replacement banglore, battery replacement banglore, Screenguru repairs"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mobile Repair in Banglore – Doorstep in 30 Minutes | Screen Guru Go Repairs"
        />
        <meta
          property="og:description"
          content="Doorstep mobile repair in Pune with 30-minute service. Repairs done in front of you using genuine parts."
        />
        <meta property="og:url" content={`${org.url}/`} />
        <meta property="og:image" content={org.logo} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mobile Repair in Banglore – Doorstep in 30 Minutes | Screen Guuru Go Repairs"
        />
        <meta
          name="twitter:description"
          content="Doorstep mobile repair in Banglore with 30-minute service. Repairs done in front of you using genuine parts."
        />
        <meta name="twitter:image" content={org.logo} />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessJSONLD)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteJSONLD)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqJSONLD)}</script>
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune" />
      </Helmet>

      <Suspense fallback={<LoadingSpinner />}>
        <Slider />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <MobileSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <TechCheck />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Doorstep />
      </Suspense>

      <div id="brand-section">
        <Suspense fallback={<LoadingSpinner />}>
          <Brand />
        </Suspense>
      </div>

      <Suspense fallback={<LoadingSpinner />}>
        <BatteryReplacementCard />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CertifiedPreOwnedCard />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <OurValue />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ProcessSteps />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <VideoEmbed />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <WhyUs />
      </Suspense>
      {/* <Suspense fallback={<LoadingSpinner />}>
        <FeaturesSection />
      </Suspense> */}
      <Suspense fallback={<LoadingSpinner />}>
        <WhatYouGet />
      </Suspense>

      {/* <Suspense fallback={<LoadingSpinner />}>
      <BlogSection />
      </Suspense>  */}

      <Suspense fallback={<LoadingSpinner />}>
        <TipsSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <ValueProps />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <LatestBlogs />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <LatestStories />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <ConsultationSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <TrustedBrands />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <DeviceCheck />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <FeedBack />
      </Suspense>
    </div>
  );
};

// Repair Page Wrappers with Helmet
const LaptopPage = () => (
  <div>
    <Helmet>
      <title>Laptop - Screen Guru Go Repairs</title>
      <meta
        name="description"
        content="Professional repair services including screen, battery, and hardware repair."
      />
    </Helmet>
    <Suspense fallback={<LoadingSpinner />}>
      <LaptopRepairPage />
    </Suspense>
  </div>
);

const CctvPage = () => (
  <div>
    <Helmet>
      <title>CCTV Repair - RedSet Go Repairs</title>
      <meta
        name="description"
        content="Reliable CCTV repair services for homes and businesses."
      />
    </Helmet>
    <Suspense fallback={<LoadingSpinner />}>
      <CctvRepairPage />
    </Suspense>
  </div>
);

const TabletPage = () => (
  <div>
    <Helmet>
      <title>Tablet Repair - Screen Guru Go Repairs</title>
      <meta
        name="description"
        content="Expert tablet repair services including screen replacement and battery repair."
      />
    </Helmet>
    <Suspense fallback={<LoadingSpinner />}>
      {/* <TabletBrands /> */}
      <TabletRepairPage />
    </Suspense>
  </div>
);

// Brand Page Template
const BrandPageTemplate = ({ title, description, Component }) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <Suspense fallback={<LoadingSpinner />}>
      <Component />
    </Suspense>
  </div>
);

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Home page */}
        <Route path="/" element={<HomePage />} />
        {/* SEO Routes */}
        {cities.map((city) =>
          services.map((service) => {
            const path = `/${city.toLowerCase()}-${service
              .toLowerCase()
              .replace(/\s+/g, "-")}`;
            return (
              <Route
                key={path}
                path={path}
                element={<DynamicSEO city={city} service={service} />}
              />
            );
          })
        )}
        {/* Repair pages */}
        <Route path="/macbook-repair" element={<LaptopPage />} />
        <Route path="/cctv-repair" element={<CctvPage />} />
        <Route path="/tablet-repair" element={<TabletPage />} />
        {/* Brand pages */}
        <Route
          path="/brand/samsung"
          element={
            <BrandPageTemplate
              title="Samsung Repair - Screen Guru Repairs"
              description="Repair Samsung phones, tablets, and devices with  Guru Repairs."
              Component={SamsungModels}
            />
          }
        />
        <Route
          path="/brand/iphone"
          element={
            <BrandPageTemplate
              title="iPhone Repair - Screen Guru Repairs"
              description="Repair iPhones professionally."
              Component={IphonePage}
            />
          }
        />
        <Route
          path="/brand/asus"
          element={
            <BrandPageTemplate
              title="Asus Repair - Screen Guru Repairs"
              description="Repair Asus phones, tablets, and laptops professionally."
              Component={AsusPage}
            />
          }
        />
        <Route
          path="/brand/nothing"
          element={
            <BrandPageTemplate
              title="Nothing Phone Repair - Screen Guru Repairs"
              description="Professional Nothing phone repair services."
              Component={NothingPage}
            />
          }
        />
        <Route
          path="/brand/vivo"
          element={
            <BrandPageTemplate
              title="Vivo Repair - Screen Guru Repairs"
              description="Vivo mobile repair services for all models."
              Component={VivoPage}
            />
          }
        />
        <Route
          path="/brand/oppo"
          element={
            <BrandPageTemplate
              title="Oppo Repair - Screen Guru Repairs"
              description="Repair Oppo smartphones professionally."
              Component={OppoPage}
            />
          }
        />
        <Route
          path="/brand/realme"
          element={
            <BrandPageTemplate
              title="Realme Repair - Screen Guru  Repairs"
              description="Repair Realme devices with professional service."
              Component={RealmePage}
            />
          }
        />
        <Route
          path="/brand/google"
          element={
            <BrandPageTemplate
              title="Google Phone Repair - Screen Guru  Repairs"
              description="Repair Google Pixel phones and devices."
              Component={GooglePage}
            />
          }
        />
        <Route
          path="/brand/mi"
          element={
            <BrandPageTemplate
              title="Mi Repair - Screen Guru  Repairs"
              description="Repair Xiaomi/MI phones professionally."
              Component={MiPage}
            />
          }
        />
        <Route
          path="/brand/oneplus"
          element={
            <BrandPageTemplate
              title="OnePlus Repair - Screen Guru  Repairs"
              description="OnePlus device repair services."
              Component={OnePlusPage}
            />
          }
        />
        <Route
          path="/brand/motorola"
          element={
            <BrandPageTemplate
              title="Motorola Repair - Screen Guru  Repairs"
              description="Repair Motorola phones professionally."
              Component={MotorolaPage}
            />
          }
        />
        <Route
          path="/brand/iqoo"
          element={
            <BrandPageTemplate
              title="IQOO Repair - Screen Guru Repairs"
              description="IQOO smartphone repair services."
              Component={IqooPage}
            />
          }
        />
        <Route
          path="/brand/poco"
          element={
            <BrandPageTemplate
              title="Poco Repair - Screen Guru Repairs"
              description="Poco phone repair services."
              Component={PocoPage}
            />
          }
        />
        <Route
          path="/brand/tecno"
          element={
            <BrandPageTemplate
              title="Tecno Repair - Screen Guru Repairs"
              description="Tecno mobile repair services."
              Component={TecnoPage}
            />
          }
        />
        <Route
          path="/brand/nokia"
          element={
            <BrandPageTemplate
              title="Nokia Repair - Screen Guru Repairs"
              description="Nokia phone repair services."
              Component={NokiaPage}
            />
          }
        />
        <Route
          path="/brand/honor"
          element={
            <BrandPageTemplate
              title="Honor Repair - Screen Guru Repairs"
              description="Repair Honor devices professionally."
              Component={HonorPage}
            />
          }
        />
        {/* Brand issues */}
        <Route
          path="/brand-issues/:mobileName"
          element={
            <BrandPageTemplate
              title="Brand Issue - Screen Guru Go Repairs"
              description="Find solutions for common brand mobile issues."
              Component={BrandIssues}
            />
          }
        />
        {/* Fallback dynamic route */}
        <Route
          path="/brand/:brandName"
          element={
            <BrandPageTemplate
              title="Mobile Repair - Screen Guru Repairs"
              description="Repair services for all mobile brands."
              Component={LaptopRepairPage} // fallback component
            />
          }
        />
        {/* Footer Navigation */}
        {/* Devices */}
        <Route path="/mobile-repair" element={<Mobile />} />
        <Route path="/laptop-repair" element={<Laptop />} />
        <Route path="/tablet-repair" element={<Tablet />} />
        <Route path="/cctv-repair" element={<CCTV />} />
        <Route path="/watch-repair" element={<WatchRepair />} />
        {/* Company Routes */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/track" element={<TrackRepairs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/e-waste-policy" element={<EwastePolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        {/* Help & extra pages */}
        <Route path="/terms-conditions" element={<TermCondition />} />
        <Route path="/warranty-policy" element={<Warranty />} />
        <Route path="/return" element={<ReturnRefunds />} />
        <Route path="/press" element={<PressMedia />} />
        <Route path="/terms" element={<Term />} />
        <Route path="/partner-with-us" element={<Partner />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/faqs" element={<FAQ />} />
        {/*Tablet Page*/}
        <Route path="/tablets/:brandName" element={<TabletBrandPage />} />
        <Route path="/tablets/samsung" element={<SamsungTab />} />
        <Route path="/tablets/iphone" element={<IphoneTab />} />
        <Route path="/tablets/oppo" element={<OppoTab />} />
        <Route path="tablets/mi" element={<MiTab />} />
        <Route path="tablets/lenovo" element={<LenovoTab />} />
        <Route path="tablets/oneplus" element={<OnePlusTab />} />
        <Route path="tablets/realme" element={<RealmeTab />} />
        <Route path="tablets/google" element={<GoogleTab />} />
        <Route path="tablets/motorola" element={<MotorolaTab />} />
        <Route path="tablets/iqoo" element={<IQOOTab />} />
        <Route path="tablets/poco" element={<PocoTab />} />
        <Route path="tablets/nokia" element={<NokiaTab />} />
        <Route path="tablets/Honor" element={<HonorTab />} />
        <Route path="tablets/Asus" element={<AsusTab />} />
        <Route path="tablets/lava" element={<LavaTab />} />
        <Route path="tablets/microsoft" element={<MicrosoftTab />} />
        <Route path="tablets/micromax" element={<MicromaxTab />} />
        {/**Laptop Brand Page */}
        <Route path="/laptops/:brand" element={<LaptopBrandPage />} />
        <Route path="/laptops/dell" element={<DellLap />} />
        <Route path="/laptops/hp" element={<HPLap />} />
        <Route path="/laptops/asus" element={<AsusLap />} />
        <Route path="/laptops/lenovo" element={<LenovoLap />} />
        <Route path="/laptops/msi" element={<MsiLap />} />
        <Route path="/laptops/acer" element={<AcerLap />} />
        <Route path="/laptops/samsung" element={<SamsungLap />} />
        <Route path="/laptops/microsoft" element={<MicrosoftLap />} />
        {/* AMC routes */}
        <Route path="/amc" element={<AMCDetails />} />{" "}
        {/* Added route for AMC list page */}
        <Route path="/amc-details/:planName" element={<AMCDetails />} />
        {/*spare parts*/}
        <Route path="/spare-parts" element={<SparePart />} />
        {/*Mobile Accersories*/}
        <Route path="/mobile-accessories" element={<MobileAccessories />} />
        {/*Watch Watches*/}
        <Route path="/smart-watches/:watchName" element={<WatchRepairs />} />
      </Route>
    </Routes>
  );
};

export default App;
