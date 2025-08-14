import { useParams, useLocation } from "react-router-dom";
import React from "react";
import batteryImg from "../../assets/image/battery.png";
import micImg from "../../assets/image/me.png";
import receiverImg from "../../assets/image/receiver.png";
// import chargingImg from "../../assets/image/charging.png";
import speakerImg from "../../assets/image/speaker.png";
import backGlassImg from "../../assets/image/back-glass.png";
import screenImg from "../../assets/image/screen.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

function IssueBrand() {
  const {  mobileName } = useParams();

  const [cart, setCart] = useState([]); // get mobile-name from URL
  const { state } = useLocation();
  const imageUrl = state?.image;

  const [selectedIssues, setSelectedIssues] = useState({});
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    console.log("mobe", mobileName);
    setMobile(mobileName);
  }, [mobileName]);

  const services = [
    { name: "Screen", image: screenImg },
    { name: "Battery", image: batteryImg },
    { name: "Mic", image: micImg },
    { name: "Receiver", image: receiverImg },
    { name: "Speaker", image: speakerImg },
    { name: "Back Glass", image: backGlassImg },
  ];

  const issues = [
    {
      id: 1,
      title: "Display Broken",
      image:
        "https://ongofix.com/upload/issues/348045Phone’s Display Broken Icon.png",
    },

    {
      id: 4,
      title: "Wifi Problem",
      image: "https://ongofix.com/upload/issues/240342Wifi Issue Icon.png",
    },
    {
      id: 5,
      title: "Receiver Issue",
      image: "https://ongofix.com/upload/issues/434715Receiver Issue Icon.png",
    },
    {
      id: 6,
      title: "Microphone Issue",
      image:
        "https://ongofix.com/upload/issues/678757Microphone Issue Icon.png",
    },
    {
      id: 7,
      title: "Software Diagnosis",
      image:
        "https://ongofix.com/upload/issues/565992Software Problem Icon.png",
    },
    {
      id: 8,
      title: "Camera Glass Broken",
      image:
        "https://ongofix.com/upload/issues/431109Rear Camera Problem Icon.png",
    },
  ];

  // console.log("dfdf", cart.length);
  // for (let i = 0; i < cart.length; i++) {
  //   console.log("cart data", cart[i]);
  // }

  const handleToggle = (id) => {
    setSelectedIssues((prevIssues) => ({
      ...prevIssues,
      [id]: !prevIssues[id],
    }));
  };

  return (
    <div className="container ">
      <div className="d-flex flex-row ">
        <div className="d-flex items-center justify-content-start align-items-center">
          {imageUrl && (
            <img
              className="fw-bold "
              src={imageUrl}
              alt={mobileName}
              style={{ width: "100px" }}
            />
          )}
        </div>

        <div className="d-flex  items-center  my-auto">
          <h2 className="fw-bold text-dark ">{mobileName}</h2>
          
        </div>
      </div>

      {/* <div>
        <p className="fw-semibold gap-3">Pick Your Repair Service</p>
      </div> */}

      <section>
        <div className="container mt-5">
          <div className="row">
            {issues.map((issue) => (
              <div
                key={issue.id}
                className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4"
              >
                <div
                  className={`d-flex flex-row p-3 border  gap-3 rounded shadow-sm align-items-center cursor-pointer ${
                    selectedIssues[issue.id] ? "bg-light border-primary" : ""
                  }`}
                  onClick={() => handleToggle(issue.id)}
                >
                  <div className="proThumb mr-3">
                    <img
                      src={issue.image}
                      alt={issue.title}
                      className="img-fluid"
                      style={{
                        width: "40px",
                        height: "60px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="content d-flex  flex-column flex-grow-1">
                    <h5 className="title  fs-6 ">{issue.title}</h5>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="rightSide">
                        <button
                          className="text-white px-3 rounded-3 bg-danger"
                          onClick={() => {
                            setCart([...cart, issue.title]); // add to cart
                            toast.success("Service added"); // show toast
                          }}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div
          className="quickContactArea"
          data-toggle="modal"
          data-target="#quickContactModal"
        >
          <div className="quickContactAreainner">
            <div className="leftSide d-flex justify-content-center">
              <div className="icon">
                <img
                  src="https://ongofix.com/assets/images/icon/tools.png"
                  className="img-fluid"
                  alt=""
                  style={{
                    width: "20px",
                    height: "30px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="content gap-3 px-3">
                <p>
                  <strong>Looking for other repair service?</strong>
                  <span className="text-danger px-2">
                    Leave a message our team will get in touch with you!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="quickContactArea text-white  d-flex justify-content-center align-items-center border rounded-3"
        data-bs-toggle="modal"
        data-bs-target="#quickContactModal"
        style={{ height: "80px" }}
      >
        <button className="btn  btn-dark rounded">Book Now </button>
      </div>

      {/* <div
        className="modal fade modal-center quickContactModal"
        id="quickContactModal"
        tabIndex="-1"
        aria-labelledby="quickContactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog quickContactModalDiolog opacity-animate3">
          <div className="modal-content quickContactModalContent">
            <div className="text-center my-3">
              <h2 className="bg-dark text-white py-2 px-3 rounded">
                {mobileName}
              </h2>
            </div>
            <form id="sendmail">
              <input type="hidden" name="ajax_send_main" />

             
              <div className="modal-header quickContactModalHeader">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

            
              <div className="modal-body quickContactModalBosy">
                <h6>Please provide your information for service booking </h6>

                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    placeholder="Enter Mobile"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Enter Area"
                    required
                  ></textarea>
                </div>

                <div className="alert alert-success d-none">
                  <p>Thank you for contacting us..</p>
                </div>
              </div>

              
              <div className="modal-footer quickContactModalFooter">
                <button type="submit" name="submit" className="btn btn-danger">
                  Submit
                </button>
              </div>
              <div className="mt-3">
                {cart.map((val, idx) => (
                  <div key={idx} className="p-2 mb-2 bg-light border rounded">
                    {val}
                  </div>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div> */}


      <div
  className="modal fade"
  id="quickContactModal"
  tabIndex="-1"
  aria-labelledby="quickContactModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered modal-md">
    <div className="modal-content border border-danger shadow-lg">
      {/* Header */}
      <div className="modal-header bg-danger text-white">
        <h5 className="modal-title" id="quickContactModalLabel">
          {mobileName}
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      {/* Body */}
      <div className="modal-body">
        <h6 className="mb-3 text-danger fw-bold">
          Please provide your information for service booking
        </h6>

        <form id="sendmail">
          <input type="hidden" name="ajax_send_main" />

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

          <div className="alert alert-success d-none">
            <p>Thank you for contacting us.</p>
          </div>

          {/* Cart Items */}
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

          {/* Footer */}
          <div className="modal-footer border-0">
            <button type="submit" name="submit" className="btn btn-danger " onClick={() => {
              toast.success('submitted')
            }}>
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

export default IssueBrand;




