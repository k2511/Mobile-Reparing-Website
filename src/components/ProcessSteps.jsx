import React, { useState } from "react";
import { Tabs, Tab, Modal, Button } from "react-bootstrap";
import imgOnsite from "../assets/image/onsite.png";
import imgPickup from "../assets/image/pickup.png";
import imgStore from "../assets/image/store.png";

const tabData = [
  {
    key: "onsite",
    title: "On-Site Repairs",
    description:
      "For simpler repairs (iPhone screen, battery issues | MacBook battery & display)",
    steps: [
      [
        "Schedule an On-site request",
        "Tell us about the device & the issues. Confirm your location & a convenient time.",
      ],
      [
        "Technician visit",
        "Our engineer visits your residence/office. Does the service in front of you.",
      ],
      ["Pay Online", "Check the device, pay via cash, card or UPI transfer."],
    ],
    image: imgOnsite,
  },
  {
    key: "pickup",
    title: "Pickup/Drop request",
    description:
      "Ideal for complex repairs or when you prefer service center attention.",
    steps: [
      [
        "Request Pickup",
        "Book a convenient slot. Our executive will pick up your device.",
      ],
      ["Get Notified", "We update you on repair status."],
      [
        "Device Returned",
        "Your repaired device will be dropped back to your address.",
      ],
    ],
    image: imgPickup,
  },
  {
    key: "store",
    title: "Store Walk-ins",
    description: "Visit any of our service centers directly.",
    steps: [
      [
        "Find Nearest Store",
        "Use our locator to find a nearby authorized center.",
      ],
      ["Walk In", "Bring your device and explain the issue to our staff."],
      [
        "Repair & Collect",
        "We’ll fix your device and hand it over to you on the spot or as scheduled.",
      ],
    ],
    image: imgStore,
  },
];

const RepairTabsWithModal = () => {
  const [activeTab, setActiveTab] = useState("onsite");
  const [modalImage, setModalImage] = useState(null);

  const openImage = (src) => setModalImage(src);
  const closeImage = () => setModalImage(null);

  return (
    <div className="container my-5 repair-tabs">
      <h4 className="text-center">OUR MAGICAL PROCESS</h4>
      <p className="text-center mb-5">Mobile repairing at home in just 3 easy steps</p>
            <div className="red-underline mx-auto mt-1 mb-4"></div>
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-4 justify-content-center tab-buttons"
        fill
      >
        {tabData.map(({ key, title, description, steps, image }) => (
          <Tab eventKey={key} title={title} key={key}>
            <div
              className={`row border rounded p-4 shadow-sm tab-content-box gap-0 ${
                activeTab === key ? "active" : ""
              }`}
            >
              <div className="col-md-6 mb-3 mb-md-0">
                <p className="text-muted">{description}</p>
                {steps.map(([stepTitle, stepDesc], idx) => (
                  <div key={idx} className="d-flex align-items-start mb-3">
                    <span className="badge step-badge me-3">{idx + 1}</span>
                    <div>
                      <h6 className="fw-bold mb-1">{stepTitle}</h6>
                      <p className="text-muted small mb-0">{stepDesc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img
                  src={image}
                  alt={`${title} illustration`}
                  className="img-fluid rounded shadow image-hover"
                  style={{ maxHeight: "300px", cursor: "pointer" }}
                  onClick={() => openImage(image)}
                />
              </div>
            </div>
          </Tab>
        ))}
      </Tabs>

      {/* Modal for Image Display */}
      <Modal show={!!modalImage} onHide={closeImage} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={modalImage}
            alt="Enlarged View"
            className="img-fluid rounded"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-custom-dark" onClick={closeImage}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Custom Styles */}
      <style jsx="true">{`
        .tab-buttons .nav-link {
          color: #333;
          font-weight: 500;
          transition: all 0.3s ease-in-out;
          width: 120px;
          text-align: center;
          border-radius: 8px;
          padding: 12px 0;
          margin: 0 5px;
        }

        .tab-buttons .nav-link.active {
          background-color: #000;
          color: #fff;
          border-radius: 8px;
        }

        .tab-buttons .nav-link:hover {
          background-color: #d60000;
          color: #fff;
        }

        .tab-content-box {
          max-width: 900px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .tab-content-box.active {
          opacity: 1;
          transform: translateY(0);
        }

        .repair-tabs .step-badge {
          background-color: #d60000;
          color: #fff;
          width: 32px;
          height: 32px;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .image-hover:hover {
          transform: scale(1.03);
          transition: transform 0.3s ease;
          box-shadow: 0 5px 15px rgba(214, 0, 0, 0.3);
        }

        .btn-custom-dark {
          background-color: #000 !important;
          color: #fff !important;
          border: none;
          padding: 10px 24px;
          border-radius: 6px;
          transition: background-color 0.3s ease;
          font-weight: bold;
          font-size: 1rem;
        }

        .btn-custom-dark:hover {
          background-color: #d60000 !important;
          color: #fff !important;
        }

        @media (max-width: 768px) {
          .tab-content-box {
            flex-direction: column;
          }

          .repair-tabs .step-badge {
            width: 28px;
            height: 28px;
            font-size: 0.9rem;
          }

          .tab-buttons .nav-link {
            font-size: 0.9rem;
            width: 100px;
            padding: 10px 0;
          }
        }

        @media (min-width: 1400px) {
          .container,
          .container-lg,
          .container-md,
          .container-sm,
          .container-xl,
          .container-xxl {
            /* max-width: 1320px; */
            width: 63%;
          }
        }

        .nav-fill .nav-item .nav-link,
        .nav-justified .nav-item .nav-link {
          width: 86%;
        }
      `}</style>
    </div>
  );
};

export default RepairTabsWithModal;
