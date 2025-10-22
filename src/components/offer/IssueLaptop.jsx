// // components/offer/IssueLaptop.jsx (corrected: added missing import, capitalized display name for better UX)
// import { useParams, useLocation } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { toast } from "react-hot-toast";

// function IssueLaptop() {
//   const { laptopName } = useParams();
//   const { state } = useLocation();
//   const imageUrl = state?.brandImage; // Fixed: use 'brandImage' from state
//   const brandName = state?.brandName || laptopName; // Fallback to param if no state

//   const [cart, setCart] = useState([]);
//   const [selectedIssues, setSelectedIssues] = useState({});
//   const [laptop, setLaptop] = useState("");

//   // Location states
//   const [userLocation, setUserLocation] = useState("");
//   const [isLoadingLocation, setIsLoadingLocation] = useState(false);
//   const [detectedAddress, setDetectedAddress] = useState("");
//   const [coords, setCoords] = useState(null);

//   useEffect(() => {
//     setLaptop(brandName.charAt(0).toUpperCase() + brandName.slice(1)); // Capitalize for display
//   }, [brandName]);

//   // --- Laptop Issues ---
//   const issues = [
//     { id: 1, title: "Display Issue", image: "https://www.shutterstock.com/image-vector/broken-laptop-icon-cracked-screen-600nw-2646940071.jpg" },
//     { id: 2, title: "Battery Issue", image: "data:image/png;base64,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" },
//     { id: 3, title: "Motherboard Issue", image: "https://media.istockphoto.com/id/1030840676/vector/processor-vector-icon-microchip-icon-cpu-icon.jpg?s=612x612&w=0&k=20&c=NzQTMccU0YjBetxMzjHE3Pkk1vzucGOX4UKQKJCVxHQ=" },
//     { id: 4, title: "Operating System Issue", image: "https://www.shutterstock.com/image-vector/technical-support-icon-computer-service-600nw-1938409267.jpg" },
//     { id: 5, title: "Keyboard Issue", image: "https://img.freepik.com/premium-vector/outline-drawing-laptop-vector-illustration_835895-5650.jpg" },
//     { id: 6, title: "Speaker Issue", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAeFBMVEX///8AAAA/Pz+/v79HR0e3t7f39/f7+/sHBwdzc3OLi4uHh4d7e3t3d3eDg4Pq6urb29vx8fEdHR0mJiZSUlJnZ2dcXFwVFRWrq6vj4+MrKyvGxsYNDQ3m5uZMTEyQkJA5OTnR0dFYWFiZmZkwMDCvr6+ioqIhISEAaszjAAAE0klEQVR4nO2c2XqqMBRGQVtBbAs4oj1VqR3e/w0PyU4ordikBt2R719XVGvMkgw7AwkCAAAAAAAAAAAAAAAAAAAAAAAAwAvWk/mAkXmy7kQjX4TsLHJ3j+yT20Iwy1w9XqbcDsRn6ihyx22g2bp5DCmRYsjIB/2YQyeRV5HEwu3HcGcpcrF0SmIlknCuaK5kIhdTlxQikULcVX7OR5YtlwRGPolEDglApGMgooFIx0BEA5GOgYgGIh3jhUjWQfDsgUhUjWjuRi4pCPhFIjkyOzikIOEXkWO7cOCQgoRdRE2J3bzIWM2AjB2yIGEWeQj7ITIJ+yGyCw0ia/vJQ06RQ/i7yGgbhvt3y8QYRT5IYZGcEqEbtrW7K3wiBXksg5MiqkWbWa19sIncx/KrX6PTIveq2G1slj64RIbkMa++ukWkXCzEhPTHhkzmFgkyiSgPGSsei2T/qlcGIiR+JpXCnCKPyPM/+b0DGfMei1D3siqry3wvLqfm4PhKIulh0uCVSsyeyn5TpFg+ZXW7vBK1PJWz/TtPRNK21bk3VYcbIsIgngT5G/2HjCRlKz3zRCRp8dikzTdJRJaj6nr0PpBXH9VrkVxqffZD5OHYY1b3cw0RtRxZ5T9a1jfi6agO+STy+dXLNURUI7CqCt1IlkbRCJfy/vkk8vjFrhF3NCt7upMqSaCaLrk2KV8ydYpXFHk68eb35rfQRSqry9beppJ4JxLIIiUKXn0jlrre/4Z/InPxpwjeZRssOkUZPJp6Ev9E5GyEmB0a6Nr+66c1ENGgaNX8EFn1pLLL5ld0f/42v+H4i+REh7hOjjvEyLcO8Ttlm4gab4kQJfc4RPnOS4uIChoLPUc/qz/sSdC4axE5HcY/BqOCrrwL49O27ZunBlZJkKtJB/8GVkF+SBpsKZ8tQ933xdO6voFyqPsim2PzOtCVRH5Q3uzkw0/UCOrX6SBxP4YzXftNMInohnbbPkGXjcei4T2QRvhqkSCXiJ4ynd/6lGlVrymX5knszUvLe0fwiZiXFWiebm63e59RxLzQU/Xug3vLxDhFzEtvqf2zFKwijRnI214MVbOIfRAJHvsiordw3L6IMumBCM2792CbkzTZumRB4oFIEKz7sRWwGyCigUjHQEQDkY6BiAYiHQMRDYlwPgNOdCPiCxCpyLkz3wR3pBbhPN2F6EakP81vZ/k5G2eRQK5zOD+05gq1OU5JyL0vtg9HXIzCXURO305L8z9eklLuk5g4pZHSuubmjhFal//neKBTc72GFdNOKCNj83dcgwdXjyBIYm6JqgcwPwdgQbZkVomXXZ1eNCrvGSnZ+zGvyLgHhxrH0uXBiYAap/O1Jub0r4fDkWcFd96/c3bM9+xBD9IkPjPmW6/o89zDQwHlZHrWWaDq6TSbBzcvT0Q7Jd/O6FIcPnoJ1N7UM35WChZX3Rzs2gGqoD/+9XMUvsfGrcXXQzU9fwzn1fZKiw2g14M6g/hPR4FmNDB0G112Dm2bWv0hWElpJ6vb6aEXgJ5nnlkPeiNqtgeeNFhfjOjpgDvbGS4VKbKejduOipksj7ttexraM6xGvrlnEVYbsU2pX3Pn0gar/dt77lyasTvnKl1wx7omxq5HlgMAAAAAAAAAAAAAAAAAAAAAAADn8R+qQlLqTiMeygAAAABJRU5ErkJggg==" },
//     { id: 7, title: "Touchpad Issue", image: "https://media.istockphoto.com/id/843134660/vector/laptop-computer-notebook-and-cursor-click-thin-line-icon-linear-vector-symbol.jpg?s=612x612&w=0&k=20&c=ff6gyz8iEdtAXBKHMklxnUeQK5pD8-p-XqlNEPzRkzM=" },
//   ];

//   const handleToggle = (id) => {
//     setSelectedIssues((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const handleAddService = (e, title) => {
//     e.stopPropagation();
//     e.preventDefault();

//     if (cart.includes(title)) {
//       toast("Already added");
//       return;
//     }
//     setCart((prev) => [...prev, title]);
//     toast.success("Service added");
//   };

//   // --- Detect location + reverse geocode ---
//   const getUserLocation = () => {
//     setIsLoadingLocation(true);
//     setUserLocation("Detecting your location...");

//     if (!navigator.geolocation) {
//       setUserLocation("Geolocation not supported. Please enter address manually");
//       setDetectedAddress("");
//       setIsLoadingLocation(false);
//       toast.error("Geolocation not supported — enter address manually");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;
//         setCoords({ latitude, longitude });

//         try {
//           const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
//           const response = await fetch(url);
//           const data = await response.json();

//           if (data && data.display_name) {
//             setUserLocation(data.display_name);
//             setDetectedAddress(data.display_name);
//             toast.success("Location detected successfully!");
//           } else {
//             setUserLocation("No address found. Please enter manually.");
//             toast.error("No address found.");
//           }
//         } catch (err) {
//           console.error("Error reverse geocoding:", err);
//           setUserLocation("Error getting address. Please enter manually.");
//           toast.error("Error getting address.");
//         } finally {
//           setIsLoadingLocation(false);
//         }
//       },
//       (error) => {
//         console.error("Geolocation error:", error);
//         setUserLocation("Location error. Please enter manually.");
//         setIsLoadingLocation(false);
//         toast.error("Location error.");
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 }
//     );
//   };

//   // --- Submit to WhatsApp ---
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value.trim();
//     const phone = form.phone.value.trim();

//     const area = detectedAddress || userLocation || form.message.value.trim();
//     const issuesList = cart.join(", ") || "No services selected";

//     if (!name || !phone || !area) {
//       toast.error("Please fill all required fields");
//       return;
//     }

//     let mapsLink = "";
//     if (coords) {
//       mapsLink = `\n*Google Maps:* https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`;
//     }

//     const text = `💻 *New Laptop Repair Request*\n\n*Laptop:* ${laptop}\n*Name:* ${name}\n*Phone:* ${phone}\n*Location:* ${area}${mapsLink}\n\n*Services Required:* ${issuesList}\n\n✅ Thank you!`;

//     window.open(
//       `https://wa.me/919900004531?text=${encodeURIComponent(text)}`,
//       "_blank"
//     );

//     toast.success("Booking submitted via WhatsApp ✅");
//   };

//   return (
//     <div className="container py-3">
//       {/* Laptop Title & Image */}
//       <div className="d-flex flex-column flex-md-row align-items-center mb-3 text-center text-md-start">
//         {imageUrl && (
//           <img
//             src={imageUrl}
//             alt={laptop}
//             className="img-fluid me-md-3 mb-2 mb-md-0"
//             style={{ maxWidth: "120px", height: "auto" }}
//           />
//         )}
//         <h2 className="fw-bold text-dark mb-0">{laptop}</h2>
//       </div>

//       {/* Issues List */}
//       <section>
//         <div className="container mt-2">
//           <div className="row">
//             {issues.map((issue) => (
//               <div key={issue.id} className="col-lg-4 col-md-6 col-sm-12 mb-3">
//                 <div
//                   className={`d-flex flex-row p-3 border gap-3 rounded shadow-sm align-items-start h-100 cursor-pointer ${
//                     selectedIssues[issue.id] ? "bg-light border-primary" : ""
//                   }`}
//                   onClick={() => handleToggle(issue.id)}
//                 >
//                   <div className="proThumb mt-2 me-2">
//                     <img
//                       src={issue.image}
//                       alt={issue.title}
//                       className="img-fluid"
//                       style={{ width: "50px", height: "50px", objectFit: "contain" }}
//                     />
//                   </div>
//                   <div className="content mt-1 d-flex flex-column flex-grow-1">
//                     <h6 className="issue-title title fs-6 mb-2 text-break">{issue.title}</h6>
//                     <button
//                       className="btn btn-danger btn-sm mt-auto align-self-start mb-3"
//                       onClick={(e) => handleAddService(e, issue.title)}
//                     >
//                       Add
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <div className="card shadow-lg border-0 mt-4">
//         <div className="card-body">
//           <h5 className="text-danger fw-bold mb-3 text-center text-md-start">Book Your Laptop Service</h5>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <input type="text" className="form-control" name="name" placeholder="Enter Name" required />
//             </div>
//             <div className="mb-3">
//               <input type="tel" className="form-control" name="phone" placeholder="Enter Mobile" required />
//             </div>

//             <div className="mb-3">
//               <button
//                 type="button"
//                 className="btn btn-outline-primary w-100"
//                 onClick={getUserLocation}
//                 disabled={isLoadingLocation}
//               >
//                 {isLoadingLocation ? "Detecting..." : "📍 Get My Current Location"}
//               </button>
//             </div>

//             <div className="mb-3">
//               <textarea
//                 className="form-control"
//                 name="message"
//                 placeholder="Click above to detect automatically, or type your address"
//                 required
//                 value={userLocation}
//                 onChange={(e) => {
//                   setUserLocation(e.target.value);
//                   setDetectedAddress("");
//                 }}
//                 rows="3"
//               />
//             </div>

//             {/* Selected Services */}
//             <div className="mb-3">
//               {cart.length === 0 ? (
//                 <div className="text-muted text-center">No services added yet</div>
//               ) : (
//                 cart.map((val, idx) => (
//                   <div
//                     key={idx}
//                     className="p-2 mb-2 bg-light border rounded d-flex justify-content-between align-items-center"
//                   >
//                     <span className="small">{val}</span>
//                     <button
//                       type="button"
//                       className="btn btn-sm btn-outline-danger"
//                       onClick={() => setCart((prev) => prev.filter((it) => it !== val))}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 ))
//               )}
//             </div>

//             <button type="submit" className="btn btn-danger w-100">
//               Submit via WhatsApp
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default IssueLaptop;






// components/offer/IssueLaptop.jsx (corrected: adjusted params for /:brand/:model route; renamed textarea to 'address' for semantics; fixed handleSubmit to use form.address; capitalized display; ensured state fallback handles brand/model; added model to laptop display)
import { useParams, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { toast } from "react-hot-toast";

function IssueLaptop() {
  const { brand, model } = useParams(); // Updated for /laptops/:brand/:model route
  const { state } = useLocation();
  const imageUrl = state?.brandImage || state?.modelImage; // Fallback to model image if passed
  const brandName = state?.brandName || brand; // Fallback to param
  const modelName = state?.modelName || model; // Fallback to param

  const [cart, setCart] = useState([]);
  const [selectedIssues, setSelectedIssues] = useState({});
  const [laptop, setLaptop] = useState("");

  // Location states
  const [userLocation, setUserLocation] = useState("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [detectedAddress, setDetectedAddress] = useState("");
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    // Capitalize and combine brand + model for display (e.g., "Dell Inspiron")
    const capitalizedBrand = brandName ? brandName.charAt(0).toUpperCase() + brandName.slice(1) : "";
    const capitalizedModel = modelName ? modelName.charAt(0).toUpperCase() + modelName.slice(1) : "";
    setLaptop(capitalizedModel ? `${capitalizedBrand} ${capitalizedModel}` : capitalizedBrand);
  }, [brandName, modelName]);

  // --- Laptop Issues ---
  const issues = [
    { id: 1, title: "Display Issue", image: "https://www.shutterstock.com/image-vector/broken-laptop-icon-cracked-screen-600nw-2646940071.jpg" },
    { id: 2, title: "Battery Issue", image: "data:image/png;base64,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" },
    { id: 3, title: "Motherboard Issue", image: "https://media.istockphoto.com/id/1030840676/vector/processor-vector-icon-microchip-icon-cpu-icon.jpg?s=612x612&w=0&k=20&c=NzQTMccU0YjBetxMzjHE3Pkk1vzucGOX4UKQKJCVxHQ=" },
    { id: 4, title: "Operating System Issue", image: "https://www.shutterstock.com/image-vector/technical-support-icon-computer-service-600nw-1938409267.jpg" },
    { id: 5, title: "Keyboard Issue", image: "https://img.freepik.com/premium-vector/outline-drawing-laptop-vector-illustration_835895-5650.jpg" },
    { id: 6, title: "Speaker Issue", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAeFBMVEX///8AAAA/Pz+/v79HR0e3t7f39/f7+/sHBwdzc3OLi4uHh4d7e3t3d3eDg4Pq6urb29vx8fEdHR0mJiZSUlJnZ2dcXFwVFRWrq6vj4+MrKyvGxsYNDQ3m5uZMTEyQkJA5OTnR0dFYWFiZmZkwMDCvr6+ioqIhISEAaszjAAAE0klEQVR4nO2c2XqqMBRGQVtBbAs4oj1VqR3e/w0PyU4ordikBt2R719XVGvMkgw7AwkCAAAAAAAAAAAAAAAAAAAAAAAAwAvWk/mAkXmy7kQjX4TsLHJ3j+yT20Iwy1w9XqbcDsRn6ihyx22g2bp5DCmRYsjIB/2YQyeRV5HEwu3HcGcpcrF0SmIlknCuaK5kIhdTlxQikULcVX7OR5YtlwRGPolEDglApGMgooFIx0BEA5GOgYgGIh3jhUjWQfDsgUhUjWjuRi4pCPhFIjkyOzikIOEXkWO7cOCQgoRdRE2J3bzIWM2AjB2yIGEWeQj7ITIJ+yGyCw0ia/vJQ06RQ/i7yGgbhvt3y8QYRT5IYZGcEqEbtrW7K3wiBXksg5MiqkWbWa19sIncx/KrX6PTIveq2G1slj64RIbkMa++ukWkXCzEhPTHhkzmFgkyiSgPGSsei2T/qlcGIiR+JpXCnCKPyPM/+b0DGfMei1D3siqry3wvLqfm4PhKIulh0uCVSsyeyn5TpFg+ZXW7vBK1PJWz/TtPRNK21bk3VYcbIsIgngT5G/2HjCRlKz3zRCRp8dikzTdJRJaj6nr0PpBXH9VrkVxqffZD5OHYY1b3cw0RtRxZ5T9a1jfi6agO+STy+dXLNURUI7CqCt1IlkbRCJfy/vkk8vjFrhF3NCt7upMqSaCaLrk2KV8ydYpXFHk68eb35rfQRSqry9beppJ4JxLIIiUKXn0jlrre/4Z/InPxpwjeZRssOkUZPJp6Ev9E5GyEmB0a6Nr+66c1ENGgaNX8EFn1pLLL5ld0f/42v+H4i+REh7hOjjvEyLcO8Ttlm4gab4kQJfc4RPnOS4uIChoLPUc/qz/sSdC4axE5HcY/BqOCrrwL49O27ZunBlZJkKtJB/8GVkF+SBpsKZ8tQ933xdO6voFyqPsim2PzOtCVRH5Q3uzkw0/UCOrX6SBxP4YzXftNMInohnbbPkGXjcei4T2QRvhqkSCXiJ4ynd/6lGlVrymX5knszUvLe0fwiZiXFWiebm63e59RxLzQU/Xug3vLxDhFzEtvqf2zFKwijRnI214MVbOIfRAJHvsiordw3L6IMumBCM2792CbkzTZumRB4oFIEKz7sRWwGyCigUjHQEQDkY6BiAYiHQMRDYlwPgNOdCPiCxCpyLkz3wR3pBbhPN2F6EakP81vZ/k5G2eRQK5zOD+05gq1OU5JyL0vtg9HXIzCXURO305L8z9eklLuk5g4pZHSuubmjhFal//neKBTc72GFdNOKCNj83dcgwdXjyBIYm6JqgcwPwdgQbZkVomXXZ1eNCrvGSnZ+zGvyLgHhxrH0uXBiYAap/O1Jub0r4fDkWcFd96/c3bM9+xBD9IkPjPmW6/o89zDQwHlZHrWWaDq6TSbBzcvT0Q7Jd/O6FIcPnoJ1N7UM35WChZX3Rzs2gGqoD/+9XMUvsfGrcXXQzU9fwzn1fZKiw2g14M6g/hPR4FmNDB0G112Dm2bWv0hWElpJ6vb6aEXgJ5nnlkPeiNqtgeeNFhfjOjpgDvbGS4VKbKejduOipksj7ttexraM6xGvrlnEVYbsU2pX3Pn0gar/dt77lyasTvnKl1wx7omxq5HlgMAAAAAAAAAAAAAAAAAAAAAAADn8R+qQlLqTiMeygAAAABJRU5ErkJggg==" },
    { id: 7, title: "Touchpad Issue", image: "https://media.istockphoto.com/id/843134660/vector/laptop-computer-notebook-and-cursor-click-thin-line-icon-linear-vector-symbol.jpg?s=612x612&w=0&k=20&c=ff6gyz8iEdtAXBKHMklxnUeQK5pD8-p-XqlNEPzRkzM=" },
  ];

  const handleToggle = (id) => {
    setSelectedIssues((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddService = (e, title) => {
    e.stopPropagation();
    e.preventDefault();

    if (cart.includes(title)) {
      toast("Already added");
      return;
    }
    setCart((prev) => [...prev, title]);
    toast.success("Service added");
  };

  // --- Detect location + reverse geocode ---
  const getUserLocation = () => {
    setIsLoadingLocation(true);
    setUserLocation("Detecting your location...");

    if (!navigator.geolocation) {
      setUserLocation("Geolocation not supported. Please enter address manually");
      setDetectedAddress("");
      setIsLoadingLocation(false);
      toast.error("Geolocation not supported — enter address manually");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });

        try {
          const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
          const response = await fetch(url);
          const data = await response.json();

          if (data && data.display_name) {
            setUserLocation(data.display_name);
            setDetectedAddress(data.display_name);
            toast.success("Location detected successfully!");
          } else {
            setUserLocation("No address found. Please enter manually.");
            toast.error("No address found.");
          }
        } catch (err) {
          console.error("Error reverse geocoding:", err);
          setUserLocation("Error getting address. Please enter manually.");
          toast.error("Error getting address.");
        } finally {
          setIsLoadingLocation(false);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        setUserLocation("Location error. Please enter manually.");
        setIsLoadingLocation(false);
        toast.error("Location error.");
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 }
    );
  };

  // --- Submit to WhatsApp ---
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const address = form.address.value.trim(); // Updated to use 'address' field

    const area = detectedAddress || userLocation || address;
    const issuesList = cart.join(", ") || "No services selected";

    if (!name || !phone || !area) {
      toast.error("Please fill all required fields");
      return;
    }

    let mapsLink = "";
    if (coords) {
      mapsLink = `\n*Google Maps:* https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`;
    }

    const text = `💻 *New Laptop Repair Request*\n\n*Laptop:* ${laptop}\n*Name:* ${name}\n*Phone:* ${phone}\n*Location:* ${area}${mapsLink}\n\n*Services Required:* ${issuesList}\n\n✅ Thank you!`;

    window.open(
      `https://wa.me/919900004531?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    toast.success("Booking submitted via WhatsApp ✅");
  };

  return (
    <div className="container py-3">
      {/* Laptop Title & Image */}
      <div className="d-flex flex-column flex-md-row align-items-center mb-3 text-center text-md-start">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={laptop}
            className="img-fluid me-md-3 mb-2 mb-md-0"
            style={{ maxWidth: "120px", height: "auto" }}
          />
        )}
        <h2 className="fw-bold text-dark mb-0">{laptop}</h2>
      </div>

      {/* Issues List */}
      <section>
        <div className="container mt-2">
          <div className="row">
            {issues.map((issue) => (
              <div key={issue.id} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <div
                  className={`d-flex flex-row p-3 border gap-3 rounded shadow-sm align-items-start h-100 cursor-pointer ${
                    selectedIssues[issue.id] ? "bg-light border-primary" : ""
                  }`}
                  onClick={() => handleToggle(issue.id)}
                >
                  <div className="proThumb mt-2 me-2">
                    <img
                      src={issue.image}
                      alt={issue.title}
                      className="img-fluid"
                      style={{ width: "50px", height: "50px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="content mt-1 d-flex flex-column flex-grow-1">
                    <h6 className="issue-title title fs-6 mb-2 text-break">{issue.title}</h6>
                    <button
                      className="btn btn-danger btn-sm mt-auto align-self-start mb-3"
                      onClick={(e) => handleAddService(e, issue.title)}
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

      {/* Contact Form */}
      <div className="card shadow-lg border-0 mt-4">
        <div className="card-body">
          <h5 className="text-danger fw-bold mb-3 text-center text-md-start">Book Your Laptop Service</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="text" className="form-control" name="name" placeholder="Enter Name" required />
            </div>
            <div className="mb-3">
              <input type="tel" className="form-control" name="phone" placeholder="Enter Mobile" required />
            </div>

            <div className="mb-3">
              <button
                type="button"
                className="btn btn-outline-primary w-100"
                onClick={getUserLocation}
                disabled={isLoadingLocation}
              >
                {isLoadingLocation ? "Detecting..." : "📍 Get My Current Location"}
              </button>
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                name="address" // Corrected: renamed for clarity
                placeholder="Click above to detect automatically, or type your address"
                required
                value={userLocation}
                onChange={(e) => {
                  setUserLocation(e.target.value);
                  setDetectedAddress("");
                }}
                rows="3"
              />
            </div>

            {/* Selected Services */}
            <div className="mb-3">
              {cart.length === 0 ? (
                <div className="text-muted text-center">No services added yet</div>
              ) : (
                cart.map((val, idx) => (
                  <div
                    key={idx}
                    className="p-2 mb-2 bg-light border rounded d-flex justify-content-between align-items-center"
                  >
                    <span className="small">{val}</span>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => setCart((prev) => prev.filter((it) => it !== val))}
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            <button type="submit" className="btn btn-danger w-100">
              Submit via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IssueLaptop;