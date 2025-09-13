import React from "react";

const Warranty = () => {
  return (
    <div className="container py-4 py-md-5">
      {/* Title */}
      <h1 className="text-center fw-bold mb-4 text-danger display-6 display-md-5">
        Warranty Policy
      </h1>

      {/* Intro */}
      <p className="fs-6 fs-md-5 text-secondary lh-lg">
        At{" "}
        <span className="text-danger fw-semibold">RedSetGo</span>, we stand
        behind every repair we perform and are committed to ensuring the highest
        quality service.
      </p>

      {/* What’s Covered */}
      <section className="mt-4">
        <h3 className="h5 fw-semibold text-dark mb-3">What’s Covered</h3>
        <ul className="lh-lg text-secondary ps-3">
          <li>
            Most repairs come with a{" "}
            <span className="text-danger fw-semibold">30-day warranty</span>.
          </li>
          <li>Coverage applies to faulty parts or workmanship issues.</li>
        </ul>
      </section>

      {/* What’s Not Covered */}
      <section className="mt-4">
        <h3 className="h5 fw-semibold text-dark mb-3">What’s Not Covered</h3>
        <ul className="lh-lg text-secondary ps-3">
          <li>Physical damage after service.</li>
          <li>Liquid exposure.</li>
          <li>Repairs attempted by third parties.</li>
        </ul>
      </section>

      {/* How to Claim */}
      <section className="mt-4">
        <h3 className="h5 fw-semibold text-dark mb-3">How to Claim</h3>
        <p className="text-secondary lh-lg">
          Bring your device along with proof of service to any{" "}
          <span className="text-danger fw-semibold">RedSetGo</span> location. Our
          team will quickly review your claim and work to resolve it as
          efficiently as possible.
        </p>
      </section>

      {/* Note */}
      <div className="mt-4 border-start border-4 border-danger ps-3">
        <p className="fw-medium text-dark mb-0">
          <strong className="text-danger">Note:</strong> Warranty claims are only
          valid with original proof of service.
        </p>
      </div>
    </div>
  );
};

export default Warranty;
