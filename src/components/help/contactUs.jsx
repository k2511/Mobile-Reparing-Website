// import React from 'react'

// const contactUs = () => {
//   return (

// <div className="container py-5">
//   <div className="row justify-content-center">
//     <div className="col-lg-8">
//       {/* Contact Us Box */}
//       <div className="contact-box p-4 p-md-5 shadow-lg rounded-4 bg-white border border-light">
//         <h2 className="text-center mb-4 fw-bold text-danger">Contact RedSetGo</h2>

//         <p className="lead text-center mb-5">
//           Fast, reliable, and transparent device repair services delivered right to your doorstep.
//         </p>

//         <div className="row mb-4">
//           <div className="col-md-6 mb-3">
//             <h5 className="fw-bold text-secondary">Our Story</h5>
//             <p>
//                RedSetGo started with a single repair center and now serves thousands
//               of satisfied customers across Maharashtra with certified technicians.
//             </p>
//           </div>

//           <div className="col-md-6 mb-3">
//             <h5 className="fw-bold text-secondary">Our Mission</h5>
//             <p>
//               To provide hassle-free device repairs using genuine parts, completed in front of you in under 30 minutes.
//               Honest service, no hidden charges.
//             </p>
//           </div>
//         </div>

//         {/* Contact Information */}
//         <div className="contact-info p-4  rounded-3 shadow-sm border border-light">
//           <h5 className="fw-bold mb-3 text-primary">Get in Touch</h5>

//           <p>
//             <strong>📍 Address:</strong> Konark Business Hub, 2nd Floor 3S-14, Kondhwa Main Road, Pune, Maharashtra 411048
//           </p>
//           <p>
//             <strong>📞 Phone:</strong> <a href="tel:+9916313616" className="text-decoration-none text-dark">9916313616</a>
//           </p>
//           <p>
//             <strong>🌐 Website:</strong>{" "}
//             <a href="https://www.redsetgo.in" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
//               www.redsetgo.in
//             </a>
//           </p>

//           {/* Contact Buttons */}
//           <div className="d-flex gap-3 mt-3">
//             <a
//               href="tel:+9916313616"
//               className="btn  btn-gray d-flex align-items-center"
//               style={{ backgroundColor:"#3B5998", color:"white"}}
//             >
//               <i className="bi bi-telephone-fill me-2" style={{color:"White"}}></i>Call
//             </a>

//             <a
//               href="https://wa.me/919916313616"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn  d-flex align-items-center"
//               style={{ backgroundColor: "#25D366", color: "#fff", borderColor: "#25D366" }}
//             >
//               <i className="bi bi-whatsapp me-2" style={{color:"white"}}></i>WhatsApp

//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//   );
// }

// export default contactUs

const ContactUs = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Contact Us Box */}
          <div className="contact-box p-4 p-md-5 shadow-lg rounded-4 bg-white border border-light">
            <h2 className="text-center mb-4 fw-bold text-danger">
              Contact RedSetGo
            </h2>

            <p className="lead text-center mb-5">
              Fast, reliable, and transparent device repair services delivered
              right to your doorstep.
            </p>

            <div className="row mb-4">
              <div className="col-md-6 mb-3">
                <h5 className="fw-bold text-secondary">Our Story</h5>
                <p>
                  RedSetGo started with a single repair center and now serves
                  thousands of satisfied customers across Maharashtra with
                  certified technicians.
                </p>
              </div>

              <div className="col-md-6 mb-3">
                <h5 className="fw-bold text-secondary">Our Mission</h5>
                <p>
                  To provide hassle-free device repairs using genuine parts,
                  completed in front of you in under 30 minutes. Honest service,
                  no hidden charges.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info p-4 rounded-3 shadow-sm border border-light">
              <h5 className="fw-bold mb-3 text-primary">Get in Touch</h5>

              <p>
                <strong>📍 Address:</strong> Konark Business Hub, 2nd Floor
                3S-14, Kondhwa Main Road, Pune, Maharashtra 411048
              </p>
              <p>
                <strong>📞 Phone:</strong>{" "}
                <a
                  href="tel:+9916313616"
                  className="text-decoration-none text-dark"
                >
                  9916313616
                </a>
              </p>
              <p>
                <strong>🌐 Website:</strong>{" "}
                <a
                  href="https://www.redsetgo.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-primary"
                >
                  www.redsetgo.in
                </a>
              </p>

              {/* Contact Buttons */}
              <div className="d-flex gap-3 mt-3">
                <a
                  href="tel:+9916313616"
                  className="btn btn-gray d-flex align-items-center"
                  style={{ backgroundColor: "#3B5998", color: "white" }}
                >
                  <i
                    className="bi bi-telephone-fill me-2"
                    style={{ color: "White" }}
                  ></i>
                  Call
                </a>

                <a
                  href="https://wa.me/919916313616"
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

      {/* ✅ Scoped Styles */}
      <style jsx>{`
        @media (min-width: 992px) {
          .contact-buttons.d-flex {
            min-height:30px; 
            padding-top: 0;
            padding-bottom: 0;
          }
        }

        @media (min-width: 992px) {
    .d-flex {
        min-height: 50px;
     
    }
}
      `}</style>
    </div>
  );
};

export default ContactUs;
