import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HelpCenter = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5 px-3">
        <h1 className="fw-bold text-danger">Help Center</h1>
        <p className="lead text-secondary mt-3">
          Got questions? Find quick answers, expert tips, and reliable support
          for all your device repair needs in Pune.
        </p>
        <p className="mt-2">
          <span className="fw-bold">What do you need help with today?</span>{" "}
          Type your questions, whether it's about booking a repair, checking
          service status, or payment details.
        </p>
      </div>

      {/* Four Info Boxes */}
      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <div className="p-4 shadow-sm rounded-3 bg-light h-100 text-center border-top border-danger border-3">
            <h5 className="fw-bold text-dark mb-3">Get Started</h5>
            <p>
              Your step-by-step guide to booking a repair with our expert team.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="p-4 shadow-sm rounded-3 bg-light h-100 text-center border-top border-danger border-3">
            <h5 className="fw-bold text-dark mb-3">Services</h5>
            <p>
              Details about our mobile, laptop, smartwatch, and motherboard
              repair services.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="p-4 shadow-sm rounded-3 bg-light h-100 text-center border-top border-danger border-3">
            <h5 className="fw-bold text-dark mb-3">Order & Payment</h5>
            <p>
              Answers about payment methods, invoices, and order tracking for
              your repairs.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="p-4 shadow-sm rounded-3 bg-light h-100 text-center border-top border-danger border-3">
            <h5 className="fw-bold text-dark mb-3">Booking</h5>
            <p>
              Easy ways to schedule your repair online or at our prime service
              center.
            </p>
          </div>
        </div>
      </div>

      {/* Scoped Styles */}
      <style jsx>{`
        @media (max-width: 576px) {
          h1 {
            font-size: 1.6rem;
          }
          h5 {
            font-size: 1rem;
          }
          p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HelpCenter;
