import React, { useState, useEffect } from "react";
import SpecialOfferModal from './offer/SpecialOfferModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show modal when user scrolls down 300px (adjust as needed)
      if (window.scrollY > 300) {
        setIsModalOpen(true);
        window.removeEventListener("scroll", handleScroll); // show only once
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="">
      <div className="container">

        {/* Special Offer Modal */}
        <SpecialOfferModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
};

export default Home;



