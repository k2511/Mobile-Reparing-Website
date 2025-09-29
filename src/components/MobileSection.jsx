import React from "react";

const MobileSection = () => {
  return (
    <>
      <style>{`
        .mobile-section {
          background-color: #fff;
          padding: 80px 0;
        }

        .right-box {
          background-color: #f3f6ff;
          border-radius: 12px;
          max-width: 520px;
          padding: 30px;
          margin-left: auto;
          margin-right: auto;
        }

        .box-content {
          text-align: left;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .features-list li {
          font-size: 15px;
          line-height: 1.6;
          padding: 8px 32px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .features-list li::before {
          content: "✓";
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: red;
          color: #fff;
          font-weight: bold;
          font-size: 14px;
          flex-shrink: 0;
        }

        .section-subtitle {
          color: red;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .section-title {
          font-size: 34px;
          line-height: 1.3;
          font-weight: 600;
          margin-bottom: 20px;
          color: #1a202c;
        }

        .section-description {
          color: #718096;
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .experience-warranty-wrapper {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .experience-block {
          display: flex;
          align-items: center;
          padding-right: 20px;
          margin-right: 15px;
          border-right: 2px dotted red;
        }

        .experience-number {
          color: black;
          font-weight: 600;
          font-size: 60px;
          line-height: 1;
          margin-right: 12px;
        }

        .experience-text {
          color: #718096;
          font-size: 13px;
          text-transform: uppercase;
          margin: 0;
        }

        .warranty-title {
          font-size: 18px;
          line-height: 1.4;
          font-weight: 700;
          margin-bottom: 8px;
          color: #1a202c;
        }

        .warranty-description {
          color: #718096;
          font-size: 14px;
          line-height: 1.6;
        }

        .box-title {
          font-size: 20px;
          line-height: 1.4;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1a202c;
        }

        .box-description {
          color: #718096;
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        /* Tablet responsiveness */
        @media (max-width: 991.98px) {
          .section-title { font-size: 30px; }
          .box-title { font-size: 18px; }
          .experience-number { font-size: 50px; }
        }

        /* Mobile responsiveness + animation */
        @media (max-width: 767.98px) {
          .mobile-section { padding: 60px 0; }

          .box-content, .section-title, .section-description {
            text-align: center;
          }

          .section-title { font-size: 26px; }

          /* Center experience + warranty in one column */
          .experience-warranty-wrapper {
            flex-direction: column; /* Stack vertically */
            justify-content: center; /* Center vertically if possible */
            align-items: center; /* Center horizontally */
            gap: 20px;
            text-align: center;
          }

          .experience-block {
            flex-direction: column;
            border-right: none; /* Remove right border */
            padding: 0;
            margin: 0;
            text-align: center;
          }

          .experience-number { font-size: 48px; margin-bottom: 8px; }

          /* Mobile animation */
          .experience-warranty-wrapper, .right-box {
            opacity: 0;
            transform: translateY(30px);
            animation: slideUpMobile 0.8s ease-out forwards;
          }

          .experience-warranty-wrapper { animation-delay: 0.1s; }
          .right-box { animation-delay: 0.3s; }

          @keyframes slideUpMobile {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .section-title { font-size: 24px; }
          .section-description { font-size: 14px; }
          .box-title { font-size: 17px; }
          .features-list li { font-size: 13px; gap: 8px; }
          .features-list li::before { width: 20px; height: 20px; font-size: 11px; }
          .experience-number { font-size: 40px; }
          .warranty-title { font-size: 16px; }
          .warranty-description { font-size: 13px; }
        }
      `}</style>

      <section className="mobile-section">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Left Content */}
            <div className="col-lg-6 col-12 mb-5 mb-lg-0">
              <p className="section-subtitle text-center">WHO WE ARE</p>
              <h2 className="section-title">
                Driven By Quality, <br /> Focused On Customer <br /> Satisfaction
              </h2>
              <p className="section-description">
                Hendrerit sodales egestas quisque pulvinar ultrices parturient
                ultricies vel nostra maecenas cubilia. Eget consequat aliquet
                ligula tellus a finibus dictumst maximus blandit eleifend.
              </p>

              {/* Experience + Warranty */}
              <div className="experience-warranty-wrapper">
                <div className="experience-block">
                  <div className="experience-number">15+</div>
                  <p className="experience-text">Years Experience</p>
                </div>
                <div className="warranty-block">
                  <h5 className="warranty-title">Comprehensive Warranty</h5>
                  <p className="warranty-description">
                    Consequat quis erat si tellus habitasse vulputate cubilia
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6 col-12">
              <div className="right-box">
                <div className="box-content">
                  <h5 className="box-title">
                    Fast, Reliable Solutions <br /> For All Device Problems
                  </h5>
                  <p className="box-description">
                    Tempus suspendisse nostra donec a convallis curabitur cursus
                    dolor porttitor massa tempor
                  </p>
                  <ul className="features-list">
                    {[
                      "Affordable Pricing",
                      "Expert Technicians",
                      "High-Quality Parts",
                      "Free Diagnostics",
                      "Convenient Service"
                    ].map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileSection;
