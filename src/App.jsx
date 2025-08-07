import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import ProcessSteps from "./components/ProcessSteps";
import Services from "./components/Services";
import Brand from "./components/Brand";
import Doorstep from "./components/Doorstep";
import VideoEmbed from "./components/VideoEmbed";
import WhyUs from "./components/WhyUs";
import FeedBack from "./components/FeedBack";
import Scrollar from "./hooks/Scrollar";
import ValueProps from "./components/valueProps";
import LatestBlogs from "./components/LatestBlogs";
import FAQ from "./components/FAQ";
import LatestStories from "./components/LatestStories";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
        setTimeout(() => {
          setShowPopup(true);
        }, 2000); // 2 seconds delay after scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <div>
      <TopBar />
      <Header />
      <Slider />
      <Doorstep />
      <Brand />
      <ProcessSteps />
      <VideoEmbed />
      <WhyUs/>
      <Services />
      <ValueProps/>
      <LatestBlogs/>
      <LatestStories/>
       <FAQ/>
      <Footer />
      {showPopup && <Scrollar onClose={() => setShowPopup(false)} />}
      <FeedBack/>
    </div>
  );
};

export default App;
