// import { useParams, useLocation } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import batteryImg from "../../assets/image/battery.png";
// import receiverImg from "../../assets/image/receiver.png";
// import speakerImg from "../../assets/image/speaker.png";
// import backGlassImg from "../../assets/image/back-glass.png";
// import screenImg from "../../assets/image/screen.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { toast } from "react-hot-toast";

// function MobileAccessories() {
//   const { mobileName } = useParams();
//   const { state } = useLocation();
//   const imageUrl = state?.image;

//   const [cart, setCart] = useState([]);
//   const [selectedIssues, setSelectedIssues] = useState({});
//   const [mobile, setMobile] = useState("");
//   const [userLocation, setUserLocation] = useState("");
//   const [isLoadingLocation, setIsLoadingLocation] = useState(false);
//   const [detectedAddress, setDetectedAddress] = useState(""); // formatted address from reverse geocode

//   useEffect(() => {
//     setMobile(mobileName);
//   }, [mobileName]);

//   // Reverse-geocode using OSM Nominatim (no API key required)
//   const getUserLocation = () => {
//     setIsLoadingLocation(true);
//     setUserLocation("Detecting your location...");

//     if (!navigator.geolocation) {
//       setUserLocation("Geolocation not supported. Please enter your address manually");
//       setDetectedAddress("");
//       setIsLoadingLocation(false);
//       toast.error("Geolocation not supported — enter address manually");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;

//         try {
//           // Nominatim reverse geocode endpoint
//           const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

//           const response = await fetch(url, {
//             method: "GET",
//             // Note: browsers disallow setting User-Agent header. Nominatim will accept typical browser requests.
//             headers: {
//               "Accept": "application/json"
//               // Do not set 'User-Agent' here (browser won't allow it)
//             }
//           });

//           const data = await response.json();
//           console.log("Nominatim response:", data);

//           if (data && (data.display_name || (data.address && Object.keys(data.address).length))) {
//             const address = data.display_name || formatAddressFromParts(data.address);
//             setUserLocation(address);      // shows in textarea
//             setDetectedAddress(address);   // used for submission unless user edits manually
//             toast.success("Location detected successfully!");
//           } else {
//             setUserLocation("No address found. Please enter your address manually.");
//             setDetectedAddress("");
//             toast.error("No address found. Please enter your address manually.");
//           }
//         } catch (err) {
//           console.error("Error reverse geocoding:", err);
//           setUserLocation("Error getting address. Please enter your address manually.");
//           setDetectedAddress("");
//           toast.error("Error getting address. Please enter your address manually.");
//         } finally {
//           setIsLoadingLocation(false);
//         }
//       },
//       (error) => {
//         console.error("Geolocation error:", error);
//         let errorMessage = "Please enter your address manually";
//         switch (error.code) {
//           case error.PERMISSION_DENIED:
//             errorMessage = "Location access denied. Please enter your address manually";
//             break;
//           case error.POSITION_UNAVAILABLE:
//             errorMessage = "Location information unavailable. Please enter your address";
//             break;
//           case error.TIMEOUT:
//             errorMessage = "Location request timed out. Please enter your address";
//             break;
//           default:
//             errorMessage = "Please enter your address manually";
//         }
//         setUserLocation(errorMessage);
//         setDetectedAddress("");
//         setIsLoadingLocation(false);
//         toast.error(errorMessage);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 }
//     );
//   };

//   // Helper that builds a readable address if display_name not present
//   const formatAddressFromParts = (parts = {}) => {
//     // Common parts in order of desirability
//     const keys = ['road', 'suburb', 'city', 'town', 'village', 'state', 'postcode', 'country'];
//     return keys.map(k => parts[k]).filter(Boolean).join(", ");
//   };

//   const services = [
//     { name: "Screen", image: screenImg },
//     { name: "Battery", image: batteryImg },
//     { name: "Receiver", image: receiverImg },
//     { name: "Speaker", image: speakerImg },
//     { name: "Back Glass", image: backGlassImg },
//   ];

//   const handleToggle = (name) => {
//     setSelectedIssues((prevIssues) => ({
//       ...prevIssues,
//       [name]: !prevIssues[name],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (cart.length === 0) {
//       toast.error("Please add at least one service");
//       return;
//     }

//     const form = e.target;
//     const name = form.name.value.trim();
//     const email = form.email.value.trim();
//     const phone = form.phone.value.trim();

//     // If user manually edited address, detectedAddress is cleared in textarea onChange
//     const area = detectedAddress || userLocation;

//     if (!name || !email || !phone || !area) {
//       toast.error("Please fill all required fields");
//       return;
//     }

//     // Prevent submitting status/error messages as address
//     const invalidMarkers = [
//       "Detecting your location",
//       "Please allow",
//       "Location access denied",
//       "Location information unavailable",
//       "Location request timed out",
//       "Geolocation not supported",
//       "No address found",
//       "Error getting address"
//     ];
//     if (invalidMarkers.some(marker => area.includes(marker))) {
//       toast.error("Please provide a valid location address");
//       return;
//     }

//     const issuesList = cart.join(", ");

//     const text = `📱 *New Repair Request*

// *Mobile:* ${mobileName}
// *Name:* ${name}
// *Email:* ${email}
// *Phone:* ${phone}
// *Location:* ${area}
// *Services Required:* ${issuesList}

// *Thank you!*`;

//     window.open(
//       `https://wa.me/919900004531?text=${encodeURIComponent(text)}`,
//       "_blank"
//     );

//     toast.success("Booking submitted via WhatsApp ✅");
//   };

//   return (
//     <div className="container">
//       {/* Mobile Header */}
//       <div className="d-flex flex-row align-items-center justify-content-between my-3">
//         <div className="d-flex align-items-center">
//           <h2 className="fw-bold text-dark">Mobile Accessories</h2>
//         </div>
//         <div className="d-flex align-items-center">
//           {imageUrl && (
//             <img
//               src={imageUrl}
//               alt={mobileName}
//               style={{ width: "80px", height: "80px", objectFit: "contain" }}
//             />
//           )}
//         </div>
//         <div className="d-flex align-items-center">
//           <h2 className="fw-bold text-dark">{mobileName}</h2>
//         </div>
//       </div>

//       {/* Services Section */}
//       <section>
//         <div className="container mt-4">
//           <div className="row">
//             {services.map((service) => (
//               <div
//                 key={service.name}
//                 className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3"
//               >
//                 <div
//                   className={`d-flex flex-row p-3 border gap-3 rounded shadow-sm align-items-center ${
//                     selectedIssues[service.name] ? "bg-light border-primary" : ""
//                   }`}
//                   style={{ cursor: "pointer" }}
//                   onClick={() => handleToggle(service.name)}
//                 >
//                   <div className="proThumb">
//                     <img
//                       src={service.image}
//                       alt={service.name}
//                       className="img-fluid"
//                       style={{
//                         width: "50px",
//                         height: "50px",
//                         objectFit: "contain",
//                       }}
//                     />
//                   </div>
//                   <div className="content d-flex flex-column flex-grow-1">
//                     <h6 className="title mb-2 mt-2">{service.name}</h6>
//                     <div className="d-flex gap-2 align-items-center">
//                       <button
//                         className="btn btn-danger btn-sm"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           if (!cart.includes(service.name)) {
//                             setCart([...cart, service.name]);
//                             toast.success("Service added to cart");
//                           } else {
//                             toast.error("Service already in cart");
//                           }
//                         }}
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Cart Summary */}
//       {cart.length > 0 && (
//         <div className="container mt-4">
//           <div className="alert alert-info">
//             <strong>Selected Services ({cart.length}):</strong> {cart.join(", ")}
//           </div>
//         </div>
//       )}

//       {/* Book Now Button */}
//       <div className="container mt-4">
//         <div className="text-center">
//           <button
//             className="btn btn-dark btn-lg px-5"
//             data-bs-toggle="modal"
//             data-bs-target="#quickContactModal"
//           >
//             Book Now ({cart.length} services)
//           </button>
//         </div>
//       </div>

//       {/* WhatsApp Modal */}
//       <div
//         className="modal fade"
//         id="quickContactModal"
//         tabIndex="-1"
//         aria-labelledby="quickContactModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered modal-lg">
//           <div className="modal-content border border-danger shadow-lg">
//             <div className="modal-header bg-danger text-white">
//               <h5 className="modal-title" id="quickContactModalLabel">
//                 {mobileName} - Service Booking
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

//               <form id="sendmail" onSubmit={handleSubmit}>
//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">Your Name *</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       name="name"
//                       placeholder="Enter Your Full Name"
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">Your Email *</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       name="email"
//                       placeholder="Enter Your Email"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">Mobile Number *</label>
//                     <input
//                       type="tel"
//                       className="form-control"
//                       name="phone"
//                       placeholder="Enter Your Mobile Number"
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">Detect Current Location</label>
//                     <button
//                       type="button"
//                       className="btn btn-outline-primary w-100"
//                       onClick={getUserLocation}
//                       disabled={isLoadingLocation}
//                     >
//                       {isLoadingLocation ? (
//                         <>
//                           <span className="spinner-border spinner-border-sm me-2" />
//                           Detecting Location...
//                         </>
//                       ) : (
//                         "📍 Get My Current Location"
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">Your Current Address *</label>
//                   <textarea
//                     className="form-control"
//                     name="message"
//                     placeholder="Click the button above to detect your current location automatically, or type your address manually"
//                     required
//                     value={userLocation}
//                     onChange={(e) => {
//                       setUserLocation(e.target.value);
//                       // If user edits manually, clear detectedAddress so manual address is used on submit
//                       setDetectedAddress("");
//                     }}
//                     rows="3"
//                   />
//                   <small className="text-muted">
//                     {isLoadingLocation
//                       ? "🔄 Detecting your current location..."
//                       : userLocation &&
//                         (userLocation.includes("Please allow") ||
//                           userLocation.includes("Location access denied") ||
//                           userLocation.includes("Location information unavailable") ||
//                           userLocation.includes("Location request timed out") ||
//                           userLocation.includes("Geolocation not supported") ||
//                           userLocation.includes("No address found") ||
//                           userLocation.includes("Error getting address"))
//                       ? "❌ " + userLocation
//                       : userLocation &&
//                         !userLocation.includes("Detecting your location")
//                       ? "✅ Location detected successfully! You can edit if needed."
//                       : "Click the button above to automatically detect your current location"}
//                   </small>
//                 </div>

//                 <div className="mt-4">
//                   <h6 className="text-danger mb-3">Selected Services:</h6>
//                   {cart.length > 0 ? (
//                     <div className="border rounded p-3">
//                       {cart.map((val, idx) => (
//                         <div
//                           key={idx}
//                           className="p-2 mb-2 bg-light border rounded text-break d-flex justify-content-between align-items-center"
//                         >
//                           <span>🔧 {val}</span>
//                           <button
//                             type="button"
//                             className="btn btn-sm btn-outline-danger"
//                             onClick={() => {
//                               const newCart = cart.filter((_, index) => index !== idx);
//                               setCart(newCart);
//                             }}
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="alert alert-warning">
//                       No services added yet. Please add services from above.
//                     </div>
//                   )}
//                 </div>

//                 <div className="modal-footer border-0 pt-4">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     data-bs-dismiss="modal"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="btn btn-success"
//                     disabled={cart.length === 0}
//                   >
//                     📱 Send via WhatsApp
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

// export default MobileAccessories;





// MobileAccessories.jsx
import React from "react";

/**
 * MobileAccessories.jsx
 * Temporary placeholder — shows "Coming Soon"
 */

export default function MobileAccessories() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "60vh", padding: "2rem" }}
      aria-live="polite"
    >
      <div className="text-center">
        <h1 className="display-6 fw-bold">Coming Soon </h1>

      </div>
    </div>
  );
}


