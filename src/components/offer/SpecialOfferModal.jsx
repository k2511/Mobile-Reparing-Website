// import React from "react";
// import "./SpecialOfferModal.css";

// const SpecialOfferModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   const handleCall = () => {
//     window.open('tel:9900004531');
//   };

//   return (
//     <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <div className="modal-header">
//           <div className="offer-badge">LIMITED TIME OFFER</div>
//           <button className="close-icon" onClick={onClose} aria-label="Close">×</button>
//         </div>

//         <div className="modal-body">
//           <div className="pricing-section">
//             <h3 className="section-title">Exclusive Repair Deals</h3>

//             <div className="price-cards">
//               <div className="price-card">
//                 <div className="card-header">Display Replacement</div>
//                 <div className="price">₹899</div>
//                 <div className="original-price">₹1,499</div>
//                 <div className="discount-badge">Save 40%</div>
//               </div>

//               <div className="price-card">
//                 <div className="card-header">Glass Replacement</div>
//                 <div className="price">₹499</div>
//                 <div className="original-price">₹899</div>
//                 <div className="discount-badge">Save 45%</div>
//               </div>
//             </div>
//           </div>

//           <div className="two-column-layout">
//             <div className="free-items-section">
//               <div className="free-title">
//                 <span className="free-icon">🎁</span>
//                 FREE With Display Change
//               </div>

//               <div className="free-items-grid">
//                 <div className="free-item">
//                   <div className="item-icon">🔌</div>
//                   <span>Data Cable</span>
//                 </div>
//                 <div className="free-item">
//                   <div className="item-icon">🎧</div>
//                   <span>Headphone</span>
//                 </div>
//                 <div className="free-item">
//                   <div className="item-icon">📱</div>
//                   <span>Mobile Stand</span>
//                 </div>
//                 <div className="free-item">
//                   <div className="item-icon">🎮</div>
//                   <span>PUBG Gloves</span>
//                 </div>
//                 <div className="free-item">
//                   <div className="item-icon">🛡️</div>
//                   <span>Cable Protector</span>
//                 </div>
//               </div>
//             </div>

//             <div className="right-column">
//               <div className="contact-section">
//                 <div className="contact-title">📞 Call Now to Avail Offer</div>
//                 <button className="contact-number" onClick={handleCall} aria-label="Call 99000 04531">
//                   99000 04531
//                 </button>
//                 <div className="contact-note">Tap to call directly</div>
//               </div>

//               <div className="value-proposition">
//                 <div className="value-item">
//                   <span className="value-icon">⚡</span>
//                   Same Day Service
//                 </div>
//                 <div className="value-item">
//                   <span className="value-icon">🔧</span>
//                   Expert Technicians
//                 </div>
//                 <div className="value-item">
//                   <span className="value-icon">🛡️</span>
//                   90 Days Warranty
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="modal-footer">
//           <button className="cta-button" onClick={onClose}>
//             Claim This Offer
//           </button>
          
//           <div className="urgency-text">
//             🔥 Limited spots available - Offer ends soon!
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpecialOfferModal;


import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./SpecialOfferModal.css";

const SpecialOfferModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCall = () => {
    window.open("tel:9900004531");
  };

  // 🔥 Claim Offer button par ye chalega
const handleClaimOffer = () => {
  onClose(); 
  setTimeout(() => {
    navigate("/issue-brand", {
      state: {
        image: "https://ongofix.com/upload/issues/348045Phone’s Display Broken Icon.png",
      },
    });
  }, 100);
};


  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="offer-badge">LIMITED TIME OFFER</div>
          <button
            className="close-icon"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <div className="pricing-section">
            <h3 className="section-title">Exclusive Repair Deals</h3>

            <div className="price-cards">
              <div className="price-card">
                <div className="card-header">Display Replacement</div>
                <div className="price">₹899</div>
                <div className="original-price">₹1,499</div>
                <div className="discount-badge">Save 40%</div>
              </div>

              <div className="price-card">
                <div className="card-header">Glass Replacement</div>
                <div className="price">₹499</div>
                <div className="original-price">₹899</div>
                <div className="discount-badge">Save 45%</div>
              </div>
            </div>
          </div>

          {/* 2 Column Layout */}
          <div className="two-column-layout">
            {/* Free items */}
            <div className="free-items-section">
              <div className="free-title">
                <span className="free-icon">🎁</span>
                FREE With Display Change
              </div>

              <div className="free-items-grid">
                <div className="free-item">
                  <div className="item-icon">🔌</div>
                  <span>Data Cable</span>
                </div>
                <div className="free-item">
                  <div className="item-icon">🎧</div>
                  <span>Headphone</span>
                </div>
                <div className="free-item">
                  <div className="item-icon">📱</div>
                  <span>Mobile Stand</span>
                </div>
                <div className="free-item">
                  <div className="item-icon">🎮</div>
                  <span>PUBG Gloves</span>
                </div>
                <div className="free-item">
                  <div className="item-icon">🛡️</div>
                  <span>Cable Protector</span>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="right-column">
              <div className="contact-section">
                <div className="contact-title">📞 Call Now to Avail Offer</div>
                <button
                  className="contact-number"
                  onClick={handleCall}
                  aria-label="Call 99000 04531"
                >
                  99000 04531
                </button>
                <div className="contact-note">Tap to call directly</div>
              </div>

              <div className="value-proposition">
                <div className="value-item">
                  <span className="value-icon">⚡</span>
                  Same Day Service
                </div>
                <div className="value-item">
                  <span className="value-icon">🔧</span>
                  Expert Technicians
                </div>
                <div className="value-item">
                  <span className="value-icon">🛡️</span>
                  90 Days Warranty
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="cta-button" onClick={handleClaimOffer}>
            Claim This Offer
          </button>

          <div className="urgency-text">
            🔥 Limited spots available - Offer ends soon!
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferModal;
