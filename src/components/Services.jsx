import React from "react";
import batteryImg from "../assets/image/battery.png";
import micImg from "../assets/image/me.png";
import receiverImg from "../assets/image/receiver.png";
// import chargingImg from "../assets/image/charging.png";
import speakerImg from "../assets/image/speaker.png";
import backGlassImg from "../assets/image/back-glass.png";
import screenImg from "../assets/image/screen.png";

const ServicesAvailable = () => {
  const services = [
    { name: "Screen", image: screenImg },
    { name: "Battery", image: batteryImg },
    { name: "Mic", image: micImg },
    { name: "Receiver", image: receiverImg },
    // { name: "Charging", image: chargingImg },
    { name: "Speaker", image: speakerImg },
    { name: "Back Glass", image: backGlassImg },
  ];

  return (
    <div className="services-wrapper py-5">
      <div className="text-center mb-4">
        <h2 className="services-title fw-bold">SERVICES AVAILABLE</h2>
        <div className="red-underline mx-auto mt-2"></div>
      </div>

      <div className="services-grid px-3">
        {services.map((service, i) => (
          <div key={i} className="service-item text-center">
            <img
              className="service-image mb-2"
              src={service.image}
              alt={service.name}
            />
            <h6 className="service-title">{service.name}</h6>
          </div>
        ))}
      </div>

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
          height: 3px;
          background-color: #d60000;
          border-radius: 2px;
        }

        .services-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          // max-width: 1200px;
          margin: 0 auto;
        }

        .service-item {
          width: 160px;
          height: 160px;
          background: #fff;
          padding: 16px;
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
          width: 50px;
          height: 50px;
          object-fit: contain;
        }

        .service-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #333;
          margin: 0;
        }

        @media (max-width: 768px) {
          .services-title {
            font-size: 1.5rem;
          }

          .service-item {
            width: 120px;
            height: 140px;
            padding: 12px;
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
