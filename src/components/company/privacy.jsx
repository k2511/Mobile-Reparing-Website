import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Cookies = () => {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5 px-3">
        <h1 className="fw-bold text-danger">Cookies Policy</h1>
        <p className="text-muted mt-2">
          <small>Last Updated: 21 August, 2025</small>
        </p>
        <p className="lead text-secondary mt-3">
          Our website uses cookies to provide you with a better, more
          personalized experience.
        </p>
      </div>

      {/* What Are Cookies */}
      <div className="mb-5 px-3 text-center text-md-start">
        <h3 className="fw-bold text-danger mb-3">What Are Cookies?</h3>
        <p className="text-secondary">
          Cookies are small files stored on your browser when you visit our site.
        </p>
      </div>

      {/* Why We Use Cookies */}
      <div className="mb-5 px-3 text-center text-md-start">
        <h3 className="fw-bold text-danger mb-3">Why We Use Cookies</h3>
        <ul className="list-unstyled text-secondary">
          <li className="mb-2">🍪 <span className="fw-bold">Essential cookies –</span> ensure the site functions correctly.</li>
          <li className="mb-2">📊 <span className="fw-bold">Performance cookies –</span> track website usage and improve features.</li>
          <li className="mb-2">⚙️ <span className="fw-bold">Preference cookies –</span> remember your settings and choices.</li>
          <li className="mb-2">🎯 <span className="fw-bold">Marketing cookies –</span> deliver relevant ads and promotions.</li>
        </ul>
      </div>

      {/* User Control */}
      <div className="mb-5 px-3 text-center text-md-start">
        <h3 className="fw-bold text-danger mb-3">Your Choices</h3>
        <p className="text-secondary">
          You can manage or disable cookies in your browser settings. Please note
          that some features of our site may not function properly without
          cookies.
        </p>
      </div>

      {/* Closing Note */}
      <div className="text-center mt-5 px-3">
        <h5 className="fw-bold text-dark mb-3">
          By continuing to browse our website, you agree to the use of cookies in line with this policy.
        </h5>
        <a
          href="/contact-us"
          className="btn btn-danger px-4 py-2 fw-bold shadow mt-3"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Cookies;
