import { useParams, useLocation } from "react-router-dom";
import React from "react";
import batteryImg from "../../assets/image/battery.png";
import micImg from "../../assets/image/me.png";
import receiverImg from "../../assets/image/receiver.png";
import speakerImg from "../../assets/image/speaker.png";
import backGlassImg from "../../assets/image/back-glass.png";
import screenImg from "../../assets/image/screen.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

function IssueBrand() {
  const { mobileName } = useParams();

  const [cart, setCart] = useState([]);
  const { state } = useLocation();
  const imageUrl = state?.image;

  const [selectedIssues, setSelectedIssues] = useState({});
  const [mobile, setMobile] = useState("");

  useEffect(() => {
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
                            setCart([...cart, issue.title]);
                            toast.success("Service added");
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

      <div
        className="quickContactArea text-white  d-flex justify-content-center align-items-center border rounded-3"
        data-bs-toggle="modal"
        data-bs-target="#quickContactModal"
        style={{ height: "80px" }}
      >
        <button className="btn  btn-dark rounded">Book Now </button>
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
                {mobileName}
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
                    name="submit"
                    className="btn btn-danger "
                    onClick={(e) => {
                      e.preventDefault();
                      const form = e.target.form;
                      const name = form.name.value;
                      const email = form.email.value;
                      const phone = form.phone.value;
                      const area = form.message.value;

                      const issuesList = cart.join(", ");
                      const text = `New Repair Request:%0A
📱 Mobile: ${mobileName}%0A
👤 Name: ${name}%0A
📧 Email: ${email}%0A
📞 Phone: ${phone}%0A
📍 Area: ${area}%0A
🛠️ Services: ${issuesList}`;

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

export default IssueBrand;

// import { useParams, useLocation } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { toast } from "react-hot-toast";

// // ✅ Import React Icons
// import { MdPhoneIphone, MdEmail, MdAddShoppingCart, MdSend } from "react-icons/md";
// import { FaUser, FaTools, FaMapMarkerAlt, FaPhone, FaCheckCircle } from "react-icons/fa";

// function IssueBrand() {
//   const { mobileName } = useParams();
//   const { state } = useLocation();
//   const imageUrl = state?.image;

//   const [cart, setCart] = useState([]);
//   const [selectedIssues, setSelectedIssues] = useState({});
//   const [mobile, setMobile] = useState("");

//   useEffect(() => {
//     setMobile(mobileName);
//   }, [mobileName]);

//   const issues = [
//     {
//       id: 1,
//       title: "Display Broken",
//       image: "https://ongofix.com/upload/issues/348045Phone's Display Broken Icon.png",
//     },
//     {
//       id: 4,
//       title: "Wifi Problem",
//       image: "https://ongofix.com/upload/issues/240342Wifi Issue Icon.png",
//     },
//     {
//       id: 5,
//       title: "Receiver Issue",
//       image: "https://ongofix.com/upload/issues/434715Receiver Issue Icon.png",
//     },
//     {
//       id: 6,
//       title: "Microphone Issue",
//       image: "https://ongofix.com/upload/issues/678757Microphone Issue Icon.png",
//     },
//     {
//       id: 7,
//       title: "Software Diagnosis",
//       image: "https://ongofix.com/upload/issues/565992Software Problem Icon.png",
//     },
//     {
//       id: 8,
//       title: "Camera Glass Broken",
//       image: "https://ongofix.com/upload/issues/431109Rear Camera Problem Icon.png",
//     },
//   ];

//   const handleToggle = (id) => {
//     setSelectedIssues((prevIssues) => ({
//       ...prevIssues,
//       [id]: !prevIssues[id],
//     }));
//   };

//   return (
//     <div className="container">
//       {/* Mobile Info */}
//       <div className="d-flex flex-row">
//         {imageUrl && (
//           <img
//             className="fw-bold"
//             src={imageUrl}
//             alt={mobileName}
//             style={{ width: "100px" }}
//           />
//         )}
//         <div className="d-flex items-center my-auto ms-3">
//           <h2 className="fw-bold text-dark">{mobileName}</h2>
//         </div>
//       </div>

//       {/* Issues Section */}
//       <section>
//         <div className="container mt-5">
//           <div className="row">
//             {issues.map((issue) => (
//               <div key={issue.id} className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4">
//                 <div
//                   className={`d-flex flex-row p-3 border gap-3 rounded shadow-sm align-items-center cursor-pointer ${
//                     selectedIssues[issue.id] ? "bg-light border-primary" : ""
//                   }`}
//                   onClick={() => handleToggle(issue.id)}
//                 >
//                   <div className="proThumb mr-3">
//                     <img
//                       src={issue.image}
//                       alt={issue.title}
//                       className="img-fluid"
//                       style={{
//                         width: "40px",
//                         height: "60px",
//                         objectFit: "contain",
//                       }}
//                     />
//                   </div>
//                   <div className="content d-flex flex-column flex-grow-1">
//                     <h5 className="title fs-6">{issue.title}</h5>
//                     <div className="d-flex gap-2 align-items-center">
//                       <div className="rightSide">
//                         <button
//                           className="text-white px-3 py-1 rounded-3 bg-danger d-flex align-items-center gap-2"
//                           aria-label="Add service"
//                           onClick={() => {
//                             setCart([...cart, issue.title]);
//                             toast.success("Service added");
//                           }}
//                         >
//                           <MdAddShoppingCart /> Add
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Book Now Button */}
//       <div
//         className="quickContactArea text-white d-flex justify-content-center align-items-center border rounded-3"
//         data-bs-toggle="modal"
//         data-bs-target="#quickContactModal"
//         style={{ height: "80px" }}
//       >
//         <button className="btn btn-dark rounded d-flex align-items-center gap-2">
//           <FaTools /> Book Now
//         </button>
//       </div>

//       {/* WhatsApp Modal */}
//       <div
//         className="modal fade"
//         id="quickContactModal"
//         tabIndex="-1"
//         aria-labelledby="quickContactModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered modal-md">
//           <div className="modal-content border border-danger shadow-lg">
//             <div className="modal-header bg-danger text-white">
//               <h5 className="modal-title" id="quickContactModalLabel">
//                 {mobileName}
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close btn-close-white"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>

//             <div className="modal-body">
//               <h6 className="mb-3 text-danger fw-bold">
//                 Please provide your information for service booking
//               </h6>

//               <form id="sendmail">
//                 <div className="mb-3 d-flex align-items-center gap-2">
//                   <FaUser />
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="name"
//                     placeholder="Enter Name"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3 d-flex align-items-center gap-2">
//                   <MdEmail />
//                   <input
//                     type="email"
//                     className="form-control"
//                     name="email"
//                     placeholder="Enter Email"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3 d-flex align-items-center gap-2">
//                   <FaPhone />
//                   <input
//                     type="number"
//                     className="form-control"
//                     name="phone"
//                     placeholder="Enter Mobile"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3 d-flex align-items-start gap-2">
//                   <FaMapMarkerAlt className="mt-2" />
//                   <textarea
//                     className="form-control"
//                     name="message"
//                     placeholder="Enter Area"
//                     required
//                   ></textarea>
//                 </div>

//                 {/* Selected Issues */}
//                 <div className="mt-4">
//                   {cart.map((val, idx) => (
//                     <div
//                       key={idx}
//                       className="p-2 mb-2 bg-white border border-danger rounded text-break d-flex align-items-center gap-2"
//                     >
//                       <FaCheckCircle className="text-success" /> {val}
//                     </div>
//                   ))}
//                 </div>

//                 <div className="modal-footer border-0">
//                   <button
//                     type="submit"
//                     className="btn btn-danger d-flex align-items-center gap-2"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       const form = e.target.form;
//                       const name = form.name.value;
//                       const email = form.email.value;
//                       const phone = form.phone.value;
//                       const area = form.message.value;

//                       const issuesList = cart.join(", ");

//                       // ✅ Plain text only for WhatsApp message
//                       const text = `New Repair Request:
// Mobile: ${mobileName}
// Name: ${name}
// Email: ${email}
// Phone: ${phone}
// Area: ${area}
// Services: ${issuesList}`;

//                       window.open(
//                         `https://wa.me/919916313616?text=${encodeURIComponent(text)}`,
//                         "_blank"
//                       );

//                       toast.success("Submitted via WhatsApp ✅");
//                     }}
//                   >
//                     <MdSend /> Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default IssueBrand;


/****************Final code here */
