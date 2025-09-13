import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { toast } from "react-hot-toast";

function WatchRepairs() {
  const { state } = useLocation();
  const imageUrl = state?.image;
  const watchName = state?.watchName || "Smart Watch";

  const [cart, setCart] = useState([]);
  const [selectedIssues, setSelectedIssues] = useState({});

  const issues = [
    {
      id: 1,
      title: "Screen Replacement",
      image:
        "https://ongofix.com/upload/issues/348045Phone’s Display Broken Icon.png",
    },
    {
      id: 2,
      title: "Battery Replacement",
      image:
        "https://ongofix.com/upload/issues/678757Microphone Issue Icon.png",
    },
    {
      id: 3,
      title: "Strap Replacement",
      image:
        "https://ongofix.com/upload/issues/431109Rear Camera Problem Icon.png",
    },
    {
      id: 4,
      title: "Water Damage Repair",
      image: "https://ongofix.com/upload/issues/240342Wifi Issue Icon.png",
    },
    {
      id: 5,
      title: "Bluetooth/WiFi Issue",
      image:
        "https://ongofix.com/upload/issues/565992Software Problem Icon.png",
    },
    {
      id: 6,
      title: "Speaker/Mic Issue",
      image: "https://ongofix.com/upload/issues/434715Receiver Issue Icon.png",
    },
  ];

  const handleToggle = (id) => {
    setSelectedIssues((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="d-flex flex-row mb-3">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={watchName}
            style={{ width: "100px" }}
            className="me-3"
          />
        )}
        <h2 className="fw-bold text-dark my-auto">Watch Repairs</h2>
      </div>

      {/* Issues Grid */}
      <section>
        <div className="container mt-4">
          <div className="row">
            {issues.map((issue) => (
              <div
                key={issue.id}
                className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4"
              >
                <div
                  className={`d-flex flex-row p-3 border gap-3 rounded shadow-sm align-items-center cursor-pointer ${
                    selectedIssues[issue.id] ? "bg-light border-primary" : ""
                  }`}
                  onClick={() => handleToggle(issue.id)}
                >
                  <img
                    src={issue.image}
                    alt={issue.title}
                    style={{
                      width: "40px",
                      height: "60px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{issue.title}</h6>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCart([...cart, issue.title]);
                        toast.success("Service added");
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Now Button */}
      <div
        className="quickContactArea text-white d-flex justify-content-center align-items-center border rounded-3 my-4"
        data-bs-toggle="modal"
        data-bs-target="#quickContactModal"
        style={{ height: "80px" }}
      >
        <button className="btn btn-dark rounded">Book Now</button>
      </div>

      {/* WhatsApp Modal */}
      <div
        className="modal fade"
        id="quickContactModal"
        tabIndex="-1"
        aria-labelledby="quickContactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content border border-danger shadow-lg">
            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title" id="quickContactModalLabel">
                {watchName} Repair
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <h6 className="mb-3 text-danger fw-bold">
                Please provide your information for service booking
              </h6>

              <form id="sendmail">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    placeholder="Enter Mobile"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Enter Area"
                    required
                  ></textarea>
                </div>

                <div className="mt-4">
                  {cart.map((val, idx) => (
                    <div
                      key={idx}
                      className="p-2 mb-2 bg-white border border-danger rounded text-break"
                    >
                      {val}
                    </div>
                  ))}
                </div>

                <div className="modal-footer border-0">
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={(e) => {
                      e.preventDefault();
                      const form = e.target.form;
                      const name = form.name.value;
                      const email = form.email.value;
                      const phone = form.phone.value;
                      const area = form.message.value;

                      const issuesList = cart.join(", ");

                      const text = `New Watch Repair Request:
Watch: ${watchName}
Name: ${name}
Email: ${email}
Phone: ${phone}
Area: ${area}
Services: ${issuesList}`;

                      window.open(
                        `https://wa.me/919916313616?text=${encodeURIComponent(
                          text
                        )}`,
                        "_blank"
                      );

                      toast.success("Submitted via WhatsApp ✅");
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchRepairs;
