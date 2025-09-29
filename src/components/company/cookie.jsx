import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Privacy = () => {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5 px-3">
        <h1 className="fw-bold text-danger">Privacy Policy</h1>
        <p className="text-secondary mt-3">
          <span className="fw-bold text-dark">Last Updated:</span> Sept 29, 2025
        </p>
        <p className="lead text-secondary">
          ScreenGuru (“Company,” “we,” “our,” or “us”) respects your privacy and is committed to
          protecting your personal data. This Privacy Policy explains how we collect, use, and
          safeguard your information when you use our website, services, or applications.
        </p>
      </div>

      {/* Information We Collect */}
      <div className="mb-5 px-3">
        <h3 className="fw-bold text-danger mb-3">1. Information We Collect</h3>
        <ul className="list-unstyled">
          <li className="mb-2">📌 <span className="fw-bold">Personal identification details:</span> Name, email, phone number, and address.</li>
          <li className="mb-2">📌 <span className="fw-bold">Device details:</span> Model, IMEI number, and issue description.</li>
          <li className="mb-2">📌 <span className="fw-bold">Transaction details:</span> Payment method, billing address, and receipts.</li>
          <li className="mb-2">📌 <span className="fw-bold">Technical data:</span> IP address, browser type, and usage information when visiting our website.</li>
        </ul>
      </div>

      {/* How We Use Your Information */}
      <div className="mb-5 px-3">
        <h3 className="fw-bold text-danger mb-3">2. How We Use Your Information</h3>
        <ul className="list-unstyled">
          <li className="mb-2">✔️ To provide and manage mobile repair services.</li>
          <li className="mb-2">✔️ To communicate service updates and notifications.</li>
          <li className="mb-2">✔️ To process transactions and provide invoices.</li>
          <li className="mb-2">✔️ To improve our services, website, and customer support.</li>
        </ul>
      </div>

      {/* Sharing of Data */}
      <div className="mb-5 px-3">
        <h3 className="fw-bold text-danger mb-3">3. Sharing of Data</h3>
        <p>
          We never sell or rent personal data to third parties. Your data may only be shared with:
        </p>
        <ul className="list-unstyled">
          <li className="mb-2">🚚 Logistics partners (for pickup/delivery services).</li>
          <li className="mb-2">💳 Payment processors (for secure transactions).</li>
          <li className="mb-2">🔧 Service providers strictly necessary to deliver our services.</li>
        </ul>
        <p>All partners handling data are bound by confidentiality obligations.</p>
      </div>

      {/* Data Security */}
      <div className="mb-5 px-3">
        <h3 className="fw-bold text-danger mb-3">4. Data Security</h3>
        <ul className="list-unstyled">
          <li className="mb-2">🛡 Industry-standard encryption and security measures.</li>
          <li className="mb-2">🛡 Limited internal access based on roles.</li>
          <li className="mb-2">🛡 Customers are responsible for backing up personal data before submitting devices; ScreenGuru is not liable for data loss during repair.</li>
        </ul>
      </div>

      {/* Cookies & Website Usage */}
      <div className="mb-5 px-3">
        <h3 className="fw-bold text-danger mb-3">5. Cookies & Website Usage</h3>
        <p>
          Our website may use cookies to enhance user experience and analyze traffic. Users can opt
          out of cookies by adjusting browser settings.
        </p>
      </div>

      {/* Your Rights */}
      <div className="mb-5 px-3">
        <h3 className="fw-bold text-danger mb-3">6. Your Rights</h3>
        <ul className="list-unstyled">
          <li className="mb-2">✅ Access your personal data.</li>
          <li className="mb-2">✅ Correct or update your information.</li>
          <li className="mb-2">✅ Request deletion of your records (subject to legal obligations).</li>
        </ul>
        <p>
          Requests can be made via{" "}
          <a href="mailto:info@screenguru.in" className="text-danger fw-bold">
            info@screenguru.in
          </a>.
        </p>
      </div>

      {/* Updates to Policy */}
      <div className="mb-5 px-3">
        <h3 className="fw-bold text-danger mb-3">7. Updates to Policy</h3>
        <p>
          This Privacy Policy may be updated periodically. Any changes will be posted on this page
          with the revised date. Continued use of our services constitutes acceptance of the updated
          terms.
        </p>
      </div>

      {/* Contact Us */}
      <div className="mb-5 px-3">
        <h3 className="fw-bold text-danger mb-3">8. Contact Us</h3>
        <p>
          For privacy-related concerns, contact us at:
        </p>
        <ul className="list-unstyled">
          <li>📧 Email: <a href="mailto:info@screenguru.in" className="text-danger fw-bold">info@screenguru.in</a></li>
          <li>☎ Phone: <a href="tel:+919900004531" className="text-danger fw-bold">99000 04531</a></li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center mt-5 px-3">
        <h4 className="fw-bold text-dark mb-3">Have Questions About Privacy?</h4>
        <p className="mb-4">
          Reach out to our <span className="fw-bold text-danger">Privacy Team</span> for assistance.
        </p>
        <a href="/contact-us" className="btn btn-danger px-4 py-2 fw-bold shadow">
          Contact Our Team
        </a>
      </div>
    </div>
  );
};

export default Privacy;
