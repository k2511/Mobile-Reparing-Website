import React from 'react';

const AboutUs = () => {
  return (
     <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-danger">About RedSetGo</h1>
        <p className="lead text-secondary mt-3">
          Fast, reliable, and transparent device repair services delivered right to your doorstep.
        </p>
      </div>

      {/* Company Story & Mission */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://via.placeholder.com/500x300"
            alt="RedSetGo Repairs"
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <h3 className="fw-bold text-danger mb-3">Our Story</h3>
          <p>
           RedSetGo began as a single repair center with a simple mission: 
            provide fast and honest device repair services. Over the years, we have grown to serve 
            thousands of satisfied customers across Maharashtra with our team of certified technicians.
          </p>

          <h3 className="fw-bold text-danger mt-4 mb-3">Our Mission</h3>
          <p>
            To make device repair hassle-free and transparent. We use genuine parts and perform repairs 
            right in front of you in under 30 minutes, with no hidden charges—just reliable service.
          </p>
        </div>
      </div>

      {/* Vision & Values */}
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow-sm rounded-3 bg-light h-100">
            <h5 className="fw-bold text-danger mb-3">Vision</h5>
            <p>
              To be the most trusted and convenient device repair service in India, redefining customer experience.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="p-4 shadow-sm rounded-3 bg-light h-100">
            <h5 className="fw-bold text-danger mb-3">Values</h5>
            <p>
              Integrity, transparency, speed, and customer satisfaction guide every repair we perform.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="p-4 shadow-sm rounded-3 bg-light h-100">
            <h5 className="fw-bold text-danger mb-3">Why Choose Us</h5>
            <p>
              Fast doorstep service, certified technicians, genuine parts, and a commitment to honesty.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-5">
        <h4 className="fw-bold text-danger mb-3">Ready to Fix Your Device?</h4>
        <p className="mb-4">Contact RedSetGo today and get your device repaired quickly and reliably.</p>
        <a href="/contact" className="btn btn-danger px-4 py-2">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutUs;