// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const EWaste = () => {
//   return (
//     <div className="container py-5">
//       {/* Header */}
//       <div className="text-center mb-5 px-3">
//         <h1 className="fw-bold text-danger">E-Waste Policy</h1>
//         <p className="lead text-secondary mt-3">
//           At <span className="fw-bold text-dark">RedSetGo</span>, we take responsibility for  
//           minimizing the environmental impact of technology.
//         </p>
//       </div>

//       {/* Our Commitment */}
//       <div className="mb-5 px-3">
//         <h3 className="fw-bold text-danger mb-3">Our Commitment</h3>
//         <ul className="list-unstyled">
//           <li className="mb-3">♻️ <span className="fw-bold">Certified Recycling –</span> All unusable parts and devices are processed through licensed e-waste partners.</li>
//           <li className="mb-3">📦 <span className="fw-bold">Drop-Off Programs –</span> Customers can hand over old devices at our locations for safe disposal.</li>
//           <li className="mb-3">🔧 <span className="fw-bold">Refurbishment First –</span> Whenever possible, we repair and repurpose devices instead of discarding them.</li>
//         </ul>
//       </div>

//       {/* Why It Matters */}
//       <div className="mb-5 px-3">
//         <h3 className="fw-bold text-danger mb-3">Why It Matters</h3>
//         <p className="text-secondary">
//           E-waste is one of the world’s fastest-growing waste streams. By recycling responsibly, we:
//         </p>
//         <ul className="list-unstyled">
//           <li className="mb-2">✅ Prevent harmful toxins from entering the environment</li>
//           <li className="mb-2">✅ Reduce the demand for raw materials mining</li>
//           <li className="mb-2">✅ Encourage a circular economy for electronics</li>
//         </ul>
//       </div>

//       {/* Closing Note */}
//       <div className="text-center mt-5 px-3">
//         <h4 className="fw-bold text-dark mb-3">🌍 Together, We Can Make Technology More Sustainable</h4>
//         <p className="mb-4">
//           Join <span className="fw-bold text-danger">RedSetGo</span> in building a cleaner, greener future through responsible e-waste management.
//         </p>
//         <a href="/contact-us" className="btn btn-danger px-4 py-2 fw-bold shadow">
//           Learn More
//         </a>
//       </div>
//     </div>
//   );
// };

// export default EWaste;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EWaste = () => {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-8 col-md-10 px-3">
          <h1 className="fw-bold text-danger display-5">E-Waste Policy</h1>
          <p className="lead text-dark mt-3 fs-6">
            At <span className="fw-bold text-danger">RedSetGo</span>, we take responsibility for  
            minimizing the environmental impact of technology.
          </p>
        </div>
      </div>

      {/* Our Commitment */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8 col-md-10">
          <div className="p-4 shadow-sm rounded-3 bg-light">
            <h3 className="fw-bold text-danger mb-3 text-center">Our Commitment</h3>
            <ul className="list-unstyled fs-6 text-dark">
              <li className="mb-3">♻️ <span className="fw-bold">Certified Recycling –</span> All unusable parts and devices are processed through licensed e-waste partners.</li>
              <li className="mb-3">📦 <span className="fw-bold">Drop-Off Programs –</span> Customers can hand over old devices at our locations for safe disposal.</li>
              <li className="mb-3">🔧 <span className="fw-bold">Refurbishment First –</span> Whenever possible, we repair and repurpose devices instead of discarding them.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why It Matters */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8 col-md-10">
          <div className="p-4 shadow-sm rounded-3 bg-light">
            <h3 className="fw-bold text-danger mb-3 text-center">Why It Matters</h3>
            <p className="text-dark fs-6 text-center">
              E-waste is one of the world’s fastest-growing waste streams. By recycling responsibly, we:
            </p>
            <ul className="list-unstyled fs-6 text-dark text-start">
              <li className="mb-2">✅ Prevent harmful toxins from entering the environment</li>
              <li className="mb-2">✅ Reduce the demand for raw materials mining</li>
              <li className="mb-2">✅ Encourage a circular economy for electronics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Closing Note */}
      <div className="row justify-content-center text-center mt-5">
        <div className="col-lg-8 col-md-10 px-3">
          <h4 className="fw-bold text-dark mb-3 fs-5">
            🌍 Together, We Can Make Technology More Sustainable
          </h4>
          <p className="mb-4 fs-6 text-secondary">
            Join <span className="fw-bold text-danger">RedSetGo</span> in building a cleaner, greener future through responsible e-waste management.
          </p>
          <a href="/contact-us" className="btn btn-danger px-4 py-2 fw-bold shadow">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default EWaste;
