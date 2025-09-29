import React from "react";

const ContactUs = () => {
  // WhatsApp number with country code
  const whatsappNumber = "919900004528"; // India +91
  const prefilledMessage = encodeURIComponent(
    "Hi Screen Guru, I want to inquire about your repair services."
  );

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Contact Us Box */}
          <div className="contact-box p-4 p-md-5 shadow-lg rounded-4 bg-white border-light">
            <h2 className="text-center mb-4 fw-bold text-danger">Screen Guru</h2>

            <p className="lead text-center mb-5">
              Fast, Reliable Gadget Repairs in Pune.
              Don’t let a malfunction slow you down. Whether you need mobile repair, 
              laptop support, or electronic gadget servicing, our certified technicians 
              in Pune are ready to restore your device quickly. From screen replacement 
              to battery fixes and software troubleshooting, we've got you covered.
            </p>

            <div className="row mb-4">
              <div className="col-md-12 mb-3">
                <h5 className="fw-bold text-secondary">Get in Touch</h5>
                <p>Need Help? Our Experts Repair Team Is Just a Call Away</p>
                <p>
                  Want a quick quote or technical advice? Fill out the form below, 
                  and one of our repair specialists will reach out promptly.
                </p>
              </div>

              <div className="col-md-12 mb-3">
                <h5 className="fw-bold text-secondary">WE'RE HERE TO HELP YOU</h5>
                <p>Get in Touch With Our Repair Support Team</p>
                <p>
                  Facing device troubles? Our Pune-based specialists are ready to help 
                  with quick and affordable repairs for smartphones, laptops, and smartwatches.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info p-4 rounded-3 shadow-sm border border-light">
              <h5 className="fw-bold mb-3 text-primary">Get in Touch</h5>

              <p>
                <strong>📍 Address:</strong> Shree Tulsi Krupa Plaza, 12/1, SP Road, opposite to Dasappa Hospital, Thigalarpet, Halsurpete, Nagarathpete, Bengaluru, Karnataka 560002
              </p>
              <p>
                <strong>📞 Phone:</strong>{" "}
                <a
                  href="tel:+919900004528"
                  className="text-decoration-none text-dark"
                >
                  9900004528
                </a>
              </p>
              <p>
                <strong>🌐 Website:</strong>{" "}
                <a
                  href="https://www.screenguru.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-primary"
                >
                  www.screenguru.in
                </a>
              </p>

              {/* Contact Buttons */}
              <div className="d-flex gap-3 mt-3">
                <a
                  href="tel:+919900004528"
                  className="btn d-flex align-items-center"
                  style={{ backgroundColor: "#3B5998", color: "white" }}
                >
                  <i
                    className="bi bi-telephone-fill me-2"
                    style={{ color: "white" }}
                  ></i>
                  Call
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${prefilledMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn d-flex align-items-center"
                  style={{
                    backgroundColor: "#25D366",
                    color: "#fff",
                    borderColor: "#25D366",
                  }}
                >
                  <i
                    className="bi bi-whatsapp me-2"
                    style={{ color: "white" }}
                  ></i>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped Styles */}
      <style jsx>{`
        @media (min-width: 992px) {
          .contact-buttons.d-flex {
            min-height: 30px; 
            padding-top: 0;
            padding-bottom: 0;
          }
          .d-flex {
            min-height: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
