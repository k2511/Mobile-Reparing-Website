import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Privacy = () => {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5 px-3">
        <h1 className="fw-bold text-danger">Privacy Policy</h1>
        <p className="text-secondary mt-3">
          <span className="fw-bold text-dark">Last Updated:</span> August 21, 2025
        </p>
        <p className="lead text-secondary">
          At <span className="fw-bold text-dark">RedSetGo</span>, your privacy is our priority.  
          This Privacy Policy explains how we collect, use, store, and protect your information  
          when you visit our website or use our services.
        </p>
      </div>

      {/* Information We Collect */}
      <div className="mb-5 px-3">
        <h3 className="fw-bold text-danger mb-3">Information We Collect</h3>
        <ul className="list-unstyled">
          <li className="mb-2">📌 <span className="fw-bold">Personal details:</span> name, phone number, email, and billing information.</li>
          <li className="mb-2">📌 <span className="fw-bold">Device details:</span> model, IMEI/serial numbers, repair history.</li>
          <li className="mb-2">📌 <span className="fw-bold">Website data:</span> cookies, analytics, and browsing behavior.</li>
        </ul>
      </div>

      {/* How We Use Your Information */}
      <div className="mb-5 px-3">
        <h3 className="fw-bold text-danger mb-3">How We Use Your Information</h3>
        <ul className="list-unstyled">
          <li className="mb-2">✔️ To provide and manage repair services</li>
          <li className="mb-2">✔️ To process payments and invoices</li>
          <li className="mb-2">✔️ To improve customer experience and support</li>
          <li className="mb-2">✔️ To comply with legal obligations</li>
        </ul>
      </div>

      {/* Data Sharing */}
      <div className="mb-5 px-3">
        <h3 className="fw-bold text-danger mb-3">Data Sharing</h3>
        <p>
          We do not sell or rent your data. Your information may only be shared with:
        </p>
        <ul className="list-unstyled">
          <li className="mb-2">🔒 Payment providers (for secure transactions)</li>
          <li className="mb-2">🚚 Logistics partners (for pickup/delivery services)</li>
          <li className="mb-2">🔧 Authorized suppliers (for spare parts orders)</li>
        </ul>
      </div>

      {/* Data Protection */}
      <div className="mb-5 px-3">
        <h3 className="fw-bold text-danger mb-3">Data Protection</h3>
        <ul className="list-unstyled">
          <li className="mb-2">🛡 Industry-standard encryption and firewall</li>
          <li className="mb-2">🛡 Limited internal access based on roles</li>
          <li className="mb-2">🛡 Regular monitoring to prevent breaches</li>
        </ul>
      </div>

      {/* Your Rights */}
      <div className="mb-5 px-3">
        <h3 className="fw-bold text-danger mb-3">Your Rights</h3>
        <ul className="list-unstyled">
          <li className="mb-2">✅ Request access to your data</li>
          <li className="mb-2">✅ Correct or update personal information</li>
          <li className="mb-2">✅ Request deletion of your records (subject to legal obligations)</li>
        </ul>
        <p>
          For full details, please contact us at{" "}
          <a href="mailto:privacy@redsetgo.com" className="text-danger fw-bold">
            privacy@redsetgo.com
          </a>.
        </p>
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
