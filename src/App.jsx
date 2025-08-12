import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import ProcessSteps from "./components/ProcessSteps";
import Services from "./components/Services";
import Doorstep from "./components/Doorstep";
import VideoEmbed from "./components/VideoEmbed";
import WhyUs from "./components/WhyUs";
import FeedBack from "./components/FeedBack";
import ValueProps from "./components/valueProps";
import LatestBlogs from "./components/LatestBlogs";
import LatestStories from "./components/LatestStories";
import ContactButtons from "./components/ContactButtons";
import FAQ from "./components/FAQ";
import Brand from "./components/Brand";
import LaptopRepairPage from "./components/pages/LaptopRepairPage";
import CctvRepairPage from "./components/pages/CctvRepairPage";
import TabletRepairPage from "./components/pages/TabletRepairPage";
import SamsungModels from "./components/brands/SamsungPage";
import AsusPage from "./components/brands/AsusPage";
import NothingPage from "./components/brands/NothingPage";
import VivoPage from "./components/brands/VivoPage";
import OppoPage from "./components/brands/OppoPage";
import RealmePage from "./components/brands/RealmePage";
import GooglePage from "./components/brands/GooglePage";
import MiPage from "./components/brands/MiPage";
import OnePlusPage from "./components/brands/OnePlusPage";
import MotorolaPage from "./components/brands/MotorolaPage";
import IqooPage from "./components/brands/IQOOPAGE";
import PocoPage from "./components/brands/PocoPage";
import TecnoPage from "./components/brands/TecnoPage";
import NokiaPage from "./components/brands/NokiaPage";
import HonorPage from "./components/brands/HonorPage";




// Layout component to wrap pages with common elements
const MainLayout = () => (
  <div>
    <TopBar />
    <Header />
    <Outlet /> {/* Renders child routes */}
    <Footer />
    <ContactButtons />
  </div>
);

const HomePage = () => {
  return (
    <div>
      <Slider />
      <Doorstep />
      <div id="brand-section">
        <Brand />
      </div>
      <ProcessSteps />
      <VideoEmbed />
      <WhyUs />
      <Services />
      <ValueProps />
      <LatestBlogs />
      <LatestStories />
      <FAQ />
      <FeedBack />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />

        {/* Specific repair pages */}
        <Route path="/macbook-repair" element={<LaptopRepairPage />} />
        <Route path="/cctv-repair" element={<CctvRepairPage />} />
        <Route path="/tablet-repair" element={<TabletRepairPage />} />

        {/* Specific brand pages */}
        <Route path="/brand/samsung" element={<SamsungModels />} />
        <Route path="/brand/asus" element={<AsusPage />} />
        <Route path="/brand/nothing" element={<NothingPage />} />
        <Route path="/brand/vivo" element={<VivoPage />} />
        <Route path="/brand/oppo" element={<OppoPage/>}/>
        <Route path="/brand/realme" element={<RealmePage/>}/>
        <Route path="/brand/google" element={<GooglePage/>} />
        <Route path="brand/mi" element={<MiPage/>}/>
        <Route path="brand/oneplus" element={<OnePlusPage/>}/>
        <Route path="brand/motorola" element={<MotorolaPage/>}/>
        <Route path="brand/iqoo" element={<IqooPage/>}/>
        <Route path="brand/poco" element={<PocoPage/>}/>
        <Route path="brand/tecno" element={<TecnoPage/>}/>
        <Route path="brand/nokia" element={<NokiaPage/>}/>
        <Route path="brand/honor" element={<HonorPage/>}/>
  
      
       

        {/* Dynamic route for all other brands. This should be placed last to avoid conflicts with the specific routes. */}
        <Route path="/brand/:brandName" element={<LaptopRepairPage />} />
      </Route>
    </Routes>
  );
};

export default App;


