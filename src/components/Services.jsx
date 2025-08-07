import React, { useEffect, useRef } from "react";
import batteryImg from "../assets/image/battery.png";
import meImg from "../assets/image/me.png";
import receiverImg from "../assets/image/receiver.png";
import chargingImg from "../assets/image/charging.png";
import speakerImg from "../assets/image/speaker.png";
import backGlassImg from "../assets/image/back-glass.png";
import screenImg from "../assets/image/screen.png";

const ServicesAvailable = () => {
  const scrollRef = useRef(null);

  const services = [
    { name: "Battery", image: batteryImg },
    { name: "Me", image: meImg },
    { name: "Receiver", image: receiverImg },
    { name: "Charging", image: chargingImg },
    { name: "Speaker", image: speakerImg },
    { name: "Back Glass", image: backGlassImg },
    { name: "Screen", image: screenImg },
  ];

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        container.scrollBy({ left: 150, behavior: "smooth" });

        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 1
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="services-wrapper py-5">
      <div className="text-center mb-4">
        <h2 className="services-title fw-bold">SERVICES AVAILABLE</h2>
        <div className="red-underline mx-auto mt-2"></div>
      </div>

      <div className="services-scroll-wrapper">
        <div className="services-scroll-row" ref={scrollRef}>
          {services.map((service, i) => (
            <div className="service-item text-center" key={i}>
              <img
                className="service-image mb-2"
                src={service.image}
                alt={service.name}
              />
              <h6 className="service-title">{service.name}</h6>
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS styles */}
      <style>{`
        .services-wrapper {
          background-color: #f9f9f9;
        }

        .services-title {
          font-size: 1.8rem;
          letter-spacing: 1px;
        }

        .red-underline {
          width: 60px;
          height: 4px;
          background-color: #d60000;
          border-radius: 2px;
        }

        .services-scroll-wrapper {
          overflow-x: auto;
        }

        .services-scroll-row {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: nowrap;
          gap: 12px; /* Reduced gap */
          padding: 20px;
          scroll-behavior: smooth;
          scrollbar-width: none; /* Firefox */
        }

        .services-scroll-row::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }

        .service-item {
          width: 150px;
          height: 183px;
          aspect-ratio: 1 / 1; /* Makes the box square */
          flex: 0 0 auto;
          background: #fff;
          padding: 12px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .service-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(214, 0, 0, 0.15);
        }

        .service-image {
          width:60px;
          height:60px;
          object-fit: contain;
        }

        .service-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: #333;
          margin: 0;
        }


        @media (max-width: 768px) {
          .services-title {
            font-size: 1.5rem;
          }

          .service-item {
            width: 90px;
            height: 90px;
            padding: 10px;
          }

          .service-image {
            width: 40px;
            height: 40px;
          }

          .service-title {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesAvailable;




