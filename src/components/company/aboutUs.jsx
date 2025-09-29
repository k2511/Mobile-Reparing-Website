import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5 px-3">
        <h1 className="fw-bold text-danger">Trusted Repair Experts</h1>
        <p className="lead text-secondary mt-3">
          Dedicated to Device Solutions. At{" "}
          <span className="fw-bold text-dark">Screen Guru</span>, we blend
          skill, innovation, and care to keep your devices performing at their
          best. From quick fixes to complex repairs, we deliver results you can
          rely on.
        </p>
      </div>

      {/* Who We Are */}
      <div className="row justify-content-center text-center mb-5 px-3">
        <div className="col-lg-10">
          <h3 className="fw-bold text-danger mb-3">Who We Are</h3>
          <p className="mb-3">
            <span className="fw-bold">Driven by Quality, Focused on Customer Satisfaction</span>
          </p>
          <p>
            With over <span className="fw-bold text-danger">15+ years</span> of
            expertise, we’ve earned the trust of thousands worldwide. Our goal
            is simple — to make technology stress-free with fast, reliable, and
            transparent service.
          </p>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="row g-4 text-center mb-5 px-3">
        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded-3 bg-light border-top border-danger border-3 h-100">
            <h5 className="fw-bold text-dark mb-3">15+ Years of Experience</h5>
            <p>Proven expertise trusted by global customers & brands.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded-3 bg-light border-top border-danger border-3 h-100">
            <h5 className="fw-bold text-dark mb-3">Comprehensive Warranty</h5>
            <p>
              Every repair is backed by a warranty, ensuring durability and{" "}
              peace of mind.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded-3 bg-light border-top border-danger border-3 h-100">
            <h5 className="fw-bold text-dark mb-3">
              Fast, Reliable Solutions
            </h5>
            <p>
              From cracked screens to performance glitches, we deliver dependable
              care with precision.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us List */}
      <div className="mb-5 px-3 text-center">
        <h3 className="fw-bold text-danger mb-4">Why Choose Us</h3>
        <ul className="list-unstyled">
          <li>✔ Clear, Upfront Pricing</li>
          <li>✔ Certified Technicians</li>
          <li>✔ Premium Quality Parts</li>
          <li>✔ Free Diagnostics</li>
          <li>✔ Flexible Service Options</li>
        </ul>
      </div>

      {/* Visual Section */}
      <div className="row g-4 text-center mb-5 px-3">
        <div className="col-md-6">
          <div className="p-4 shadow-sm rounded-3 bg-dark text-white h-100">
            <h5 className="fw-bold text-danger mb-3">Experienced Technicians</h5>
            <p>
              Certified experts deliver fast, precise repairs to ensure
              smartphones, Smartwatches,Tablets perform at their best.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4 shadow-sm rounded-3 bg-dark text-white h-100">
            <h5 className="fw-bold text-danger mb-3">Trusted Specialists</h5>
            <p>
              From cracked screens to hardware failures, reliable solutions
              restore performance and extend device life.
            </p>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="text-center mb-5 px-3">
        <h3 className="fw-bold text-danger mb-3">
          Trusted by 25,000+ Brands & Device Owners
        </h3>
        <p className="text-muted">
          From individual customers to global companies, we provide reliable
          repairs and support services for leading technology brands. Whether
          it’s smartphones, tablets, or laptops from{" "}
          <span className="fw-bold">Apple, Dell, HP, Lenovo, ASUS, Acer, or Microsoft Surface</span>, 
          our certified technicians ensure every device performs at its best.
        </p>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-5 px-3">
        <h4 className="fw-bold text-dark mb-3">
          Ready to Experience Reliable Device Care?
        </h4>
        <p className="mb-4">
          Contact <span className="fw-bold text-danger">Screen Guru</span> today
          and let our experts restore your device quickly and reliably.
        </p>
        <a
          href="/contact-us"
          className="btn btn-danger px-4 py-2 fw-bold shadow"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
