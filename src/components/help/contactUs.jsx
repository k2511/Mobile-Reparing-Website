import React from 'react'

const contactUs = () => {
  return (
    // <div className="container py-5">
    //   <div className="row justify-content-center">
    //     <div className="col-lg-8">
    //       {/* About Us Box */}
    //       <div className="about-box p-4 p-md-5 shadow-sm rounded-3 bg-white">
    //         <h2 className="text-center mb-4 fw-bold">Conatct Us</h2>
            
    //         <div className="about-content">
    //           <p className="lead mb-4">
    //             At RedSetGo Repairs, we're revolutionizing device repair with our fast, reliable, 
    //             and transparent doorstep service.
    //           </p>
              
    //           <div className="row">
    //             <div className="col-md-6 mb-3">
    //               <h4 className="fw-bold">Our Story</h4>
    //               <p>
    //                 Founded in 2015 in Pune, we started with a single repair center and have grown 
    //                 to serve thousands of happy customers across Maharashtra with our team of 
    //                 certified technicians.
    //               </p>
    //             </div>
                
    //             <div className="col-md-6 mb-3">
    //               <h4 className="fw-bold">Our Mission</h4>
    //               <p>
    //                 To provide hassle-free device repairs using genuine parts, with repairs done 
    //                 right in front of you in under 30 minutes. No hidden charges, just honest service.
    //               </p>
    //             </div>
    //           </div>
              
             
             
    //         </div>
    //       </div>
    //     </div>
    //   </div>
 
    // </div>
<div className="container py-5">
  <div className="row justify-content-center">
    <div className="col-lg-8">
      {/* Contact Us Box */}
      <div className="contact-box p-4 p-md-5 shadow-lg rounded-4 bg-white border border-light">
        <h2 className="text-center mb-4 fw-bold text-danger">Contact RedSetGo</h2>

        <p className="lead text-center mb-5">
          Fast, reliable, and transparent device repair services delivered right to your doorstep.
        </p>

        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <h5 className="fw-bold text-secondary">Our Story</h5>
            <p>
               RedSetGo started with a single repair center and now serves thousands 
              of satisfied customers across Maharashtra with certified technicians.
            </p>
          </div>

          <div className="col-md-6 mb-3">
            <h5 className="fw-bold text-secondary">Our Mission</h5>
            <p>
              To provide hassle-free device repairs using genuine parts, completed in front of you in under 30 minutes. 
              Honest service, no hidden charges.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="contact-info p-4 bg-light rounded-3 shadow-sm border border-light">
          <h5 className="fw-bold mb-3 text-primary">Get in Touch</h5>

          <p>
            <strong>📍 Address:</strong> Konark Business Hub, 2nd Floor 3S-14, Kondhwa Main Road, Pune, Maharashtra 411048
          </p>
          <p>
            <strong>📞 Phone:</strong> <a href="tel:+917676786764" className="text-decoration-none text-dark">7676786764</a>
          </p>
          <p>
            <strong>🌐 Website:</strong>{" "}
            <a href="https://www.resetgo.in" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
              www.resetgo.in
            </a>
          </p>

          {/* Contact Buttons */}
          <div className="d-flex gap-3 mt-3">
            <a
              href="tel:+917676786764"
              className="btn btn-gray d-flex align-items-center"
              style={{ backgroundColor: "red", borderColor: "red" }}
            >
              <i className="bi bi-telephone-fill me-2"></i>Call
            </a>

            <a
              href="https://wa.me/917676786764"
              target="_blank"
              rel="noopener noreferrer"
              className="btn d-flex align-items-center"
              style={{ backgroundColor: "#25D366", color: "#fff", borderColor: "#25D366" }}
            >
              <i className="bi bi-whatsapp me-2"></i>WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


     
  );
}

export default contactUs



