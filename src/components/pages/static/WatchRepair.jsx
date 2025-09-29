// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { toast } from "react-hot-toast";

// const brands = [
//   { name: "Samsung", image: "https://avatars.mds.yandex.net/i?id=1fd94090c52dcbff6956af8d9752b01b594188f6-4377722-images-thumbs&n=13" },
//   { name: "Iphone", image: "https://yandex-images.clstorage.net/X5D2Ul200/5ff30ekXBx/7HWj4pmea8yx8SDo8yx4dOkj3PnWZ46-p1toMxzGkbvupWFwTgXgvZNVjXwCy-cVoUWYfQXOhDHz51ApgYxuKKMi4q6CgCTGsPEj5fo3cXPiK9yhk3u43o9-Fw1npeudwogpIRBVsKSFB9EmPqTwea9k-AVB4_xX4rYwSNvQJ3n8W4TCpoICwIDVduDxNlZ38Evg388BqMmbZwE0coXNqMCcFi0WQIOM_gf2LCSUqWuER9UFccDkRuO9F3XV0jlE2WOu5oa7LtKXxGHGxDRaVNlm2srAELfnvnIXNm-e0YzdsAIQDlaHqv4p0AYgtKpqoWLOPW3Z_Er_mg1uwM0odf9wmsWllxfnvtRq1co4RF7UdebP8Cax7Ih4OTNDmvOT_ZcbJhNigrrmKswoJrCqW5BY2DFy3eFi4KYqR8bMBlX0f6bErKgG6IHXT9P6F01l4Gbz1-M7gMiJcCUwWLXSrOWSPhUYaLad3yr4JRuUm0GAb8wrc8XYW-G9Infb_RNDyn2u866bCOyP6XzcwC59Y8Vu6unNDJbUvnUdE1uP7pbDtSMSPEWajOwd7w43tLRumWL0O1zT0HLAgj132eo8Y_xfsceJigfkocxl9Pk7Zn3SW9nm9iqA2IllGgpEu8aS5Y8CLjt4rKnRN_c4NIG9eohJ0htZ89Ft-7wwaeXqKXrgX63ShJwmyZf1efrhJmlhyGL86ts8psqCeSQBbpHWqd62JhUJfrCO3gXmExaRqHWwV8wZdOXeVfqfEWLRzzxf0keQ-6y-PNG96ljY3RRdcPV51e7ILb3KjVkgJUem8rzaqBMXEma5vdoR2RMmk5ReuUziOF_s_1f6uxxs0Monc9Z7ncupqQnHss969t0rTH3nZPve6TiE75h4JT9ivcCq36wbMTReoIzNDvcJJ5ifS6R10Cd3xuJS3rIpT_rIKEHOXq7hip4O0YPyePP2F21p92fc08Anrtm9RyMoerQ" },
// ];

// const issuesList = [
//   "Screen Replacement",
//   "Battery Replacement",
//   "Strap Replacement",
//   "Water Damage Repair",
//   "Bluetooth/WiFi Issue",
//   "Speaker/Mic Issue"
// ];

// const whatsappNumber = "919900004531";

// const WatchesRepair = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedBrand, setSelectedBrand] = useState(null);
//   const [selectedIssues, setSelectedIssues] = useState([]);

//   // Location states
//   const [userLocation, setUserLocation] = useState("");
//   const [isLoadingLocation, setIsLoadingLocation] = useState(false);
//   const [detectedAddress, setDetectedAddress] = useState(""); // formatted address from reverse geocode

//   const filteredBrands = brands.filter(brand => brand.name.toLowerCase().includes(searchQuery.toLowerCase()));

//   const toggleIssue = (issue) => {
//     setSelectedIssues(prev => prev.includes(issue) ? prev.filter(i => i !== issue) : [...prev, issue]);
//   };

//   // Reverse-geocode using OSM Nominatim (no API key)
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
//           const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
//           const res = await fetch(url, { headers: { Accept: "application/json" } });
//           const data = await res.json();
//           console.log("Nominatim:", data);

//           if (data && (data.display_name || (data.address && Object.keys(data.address).length))) {
//             const address = data.display_name || formatAddressFromParts(data.address);
//             setUserLocation(address);      // show in textarea
//             setDetectedAddress(address);   // used for submission unless user edits manually
//             toast.success("Location detected successfully!");
//           } else {
//             setUserLocation("No address found. Please enter your address manually.");
//             setDetectedAddress("");
//             toast.error("No address found. Please enter your address manually.");
//           }
//         } catch (err) {
//           console.error("Reverse geocode error:", err);
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

//   // helper to build readable address if display_name missing
//   const formatAddressFromParts = (parts = {}) => {
//     const keys = ['road', 'suburb', 'city', 'town', 'village', 'state', 'postcode', 'country'];
//     return keys.map(k => parts[k]).filter(Boolean).join(", ");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!selectedBrand) {
//       toast.error("Please select a brand first");
//       return;
//     }

//     const form = e.target;
//     const name = form.name.value.trim();
//     const email = form.email.value.trim();
//     const phone = form.phone.value.trim();

//     // prefer detectedAddress (if not edited), otherwise use userLocation (textarea)
//     const area = detectedAddress || userLocation || form.message.value.trim();
//     const issuesText = selectedIssues.join(", ") || "No issues selected";

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

//     const baseText = `Smart Watch Repair Request:
// Brand: ${selectedBrand.name}
// Name: ${name}
// Email: ${email}
// Phone: ${phone}
// Area: ${area}
// Issues: ${issuesText}`;

//     // Send only the formatted address (no lat/lng). If desired, you can add a maps link.
//     window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(baseText)}`, "_blank");
//     toast.success("Submitted via WhatsApp ✅");
//     // Optionally reset after submit:
//     setSelectedBrand(null);
//     setSelectedIssues([]);
//     setUserLocation("");
//     setDetectedAddress("");
//   };

//   return (
//     <Container className="py-5 text-center">
//       <input
//         type="text"
//         placeholder="Search Smart Watch Brands..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         style={{ padding: "10px", width: "300px", marginBottom: "30px" }}
//       />
//       <Row xs={2} sm={3} md={4} className="g-4">
//         {filteredBrands.map((brand, idx) => (
//           <Col key={idx}>
//             <div className="brand-card" onClick={() => setSelectedBrand(brand)}>
//               <img src={brand.image} alt={brand.name} className="brand-logo" />
//               <p>{brand.name}</p>
//             </div>
//           </Col>
//         ))}
//       </Row>

//       {selectedBrand && (
//         <div className="modal show d-block" tabIndex="-1">
//           <div className="modal-dialog modal-dialog-centered modal-md">
//             <div className="modal-content border border-danger shadow-lg">
//               <div className="modal-header bg-danger text-white">
//                 <h5 className="modal-title">{selectedBrand.name}</h5>
//                 <button type="button" className="btn-close btn-close-white" onClick={() => setSelectedBrand(null)}></button>
//               </div>
//               <div className="modal-body">
//                 <form onSubmit={handleSubmit}>
//                   <input type="text" name="name" className="form-control mb-2" placeholder="Enter Name" required/>
//                   <input type="email" name="email" className="form-control mb-2" placeholder="Enter Email" required/>
//                   <input type="tel" name="phone" className="form-control mb-2" placeholder="Enter Mobile" required/>

//                   <div className="mb-3">
//                     <label className="form-label">Detect Current Location</label>
//                     <div className="d-grid gap-2 mb-2">
//                       <button
//                         type="button"
//                         className="btn btn-outline-primary"
//                         onClick={getUserLocation}
//                         disabled={isLoadingLocation}
//                       >
//                         {isLoadingLocation ? (
//                           <>
//                             <span className="spinner-border spinner-border-sm me-2" />
//                             Detecting Location...
//                           </>
//                         ) : (
//                           "📍 Get My Current Location"
//                         )}
//                       </button>
//                     </div>

//                     <textarea
//                       name="message"
//                       className="form-control"
//                       placeholder="Click the button above to detect your current location automatically, or type your address manually"
//                       required
//                       value={userLocation}
//                       onChange={(e) => {
//                         setUserLocation(e.target.value);
//                         setDetectedAddress(""); // if user edits manually, prefer manual text
//                       }}
//                       rows={3}
//                     />
//                     <small className="text-muted">
//                       {isLoadingLocation
//                         ? "🔄 Detecting your current location..."
//                         : userLocation &&
//                           (userLocation.includes("Please allow") ||
//                             userLocation.includes("Location access denied") ||
//                             userLocation.includes("Location information unavailable") ||
//                             userLocation.includes("Location request timed out") ||
//                             userLocation.includes("Geolocation not supported") ||
//                             userLocation.includes("No address found") ||
//                             userLocation.includes("Error getting address"))
//                         ? "❌ " + userLocation
//                         : userLocation &&
//                           !userLocation.includes("Detecting your location")
//                         ? "✅ Location detected successfully! You can edit if needed."
//                         : "Click the button above to automatically detect your current location"}
//                     </small>
//                   </div>

//                   <div className="mb-2 text-start">
//                     <p>Select Issues:</p>
//                     {issuesList.map((issue, i) => (
//                       <div key={i} className="form-check">
//                         <input
//                           type="checkbox"
//                           className="form-check-input"
//                           id={`issue-${i}`}
//                           checked={selectedIssues.includes(issue)}
//                           onChange={() => toggleIssue(issue)}
//                         />
//                         <label className="form-check-label" htmlFor={`issue-${i}`}>{issue}</label>
//                       </div>
//                     ))}
//                   </div>

//                   <button type="submit" className="btn btn-danger w-100">Submit via WhatsApp</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <style>{`
//         .brand-card { cursor: pointer; padding: 20px; background: #fff; border-radius: 15px; box-shadow: 0 3px 8px rgba(0,0,0,0.1); }
//         .brand-logo { width: 80px; height: 80px; object-fit: contain; margin-bottom: 10px; }
//       `}</style>
//     </Container>
//   );
// };

// export default WatchesRepair;




import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { toast } from "react-hot-toast";

const brands = [
  { name: "Samsung", image: "https://avatars.mds.yandex.net/i?id=1fd94090c52dcbff6956af8d9752b01b594188f6-4377722-images-thumbs&n=13" },
  { name: "Iphone", image: "https://yandex-images.clstorage.net/X5D2Ul200/5ff30ekXBx/7HWj4pmea8yx8SDo8yx4dOkj3PnWZ46-p1toMxzGkbvupWFwTgXgvZNVjXwCy-cVoUWYfQXOhDHz51ApgYxuKKMi4q6CgCTGsPEj5fo3cXPiK9yhk3u43o9-Fw1npeudwogpIRBVsKSFB9EmPqTwea9k-AVB4_xX4rYwSNvQJ3n8W4TCpoICwIDVduDxNlZ38Evg388BqMmbZwE0coXNqMCcFi0WQIOM_gf2LCSUqWuER9UFccDkRuO9F3XV0jlE2WOu5oa7LtKXxGHGxDRaVNlm2srAELfnvnIXNm-e0YzdsAIQDlaHqv4p0AYgtKpqoWLOPW3Z_Er_mg1uwM0odf9wmsWllxfnvtRq1co4RF7UdebP8Cax7Ih4OTNDmvOT_ZcbJhNigrrmKswoJrCqW5BY2DFy3eFi4KYqR8bMBlX0f6bErKgG6IHXT9P6F01l4Gbz1-M7gMiJcCUwWLXSrOWSPhUYaLad3yr4JRuUm0GAb8wrc8XYW-G9Infb_RNDyn2u866bCOyP6XzcwC59Y8Vu6unNDJbUvnUdE1uP7pbDtSMSPEWajOwd7w43tLRumWL0O1zT0HLAgj132eo8Y_xfsceJigfkocxl9Pk7Zn3SW9nm9iqA2IllGgpEu8aS5Y8CLjt4rKnRN_c4NIG9eohJ0htZ89Ft-7wwaeXqKXrgX63ShJwmyZf1efrhJmlhyGL86ts8psqCeSQBbpHWqd62JhUJfrCO3gXmExaRqHWwV8wZdOXeVfqfEWLRzzxf0keQ-6y-PNG96ljY3RRdcPV51e7ILb3KjVkgJUem8rzaqBMXEma5vdoR2RMmk5ReuUziOF_s_1f6uxxs0Monc9Z7ncupqQnHss969t0rTH3nZPve6TiE75h4JT9ivcCq36wbMTReoIzNDvcJJ5ifS6R10Cd3xuJS3rIpT_rIKEHOXq7hip4O0YPyePP2F21p92fc08Anrtm9RyMoerQ" },
];

const issuesList = [
  "Screen Replacement",
  "Battery Replacement",
  "Strap Replacement",
  "Water Damage Repair",
  "Bluetooth/WiFi Issue",
  "Speaker/Mic Issue"
];

const whatsappNumber = "919900004531";

const WatchesRepair = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedIssues, setSelectedIssues] = useState([]);

  // Location states
  const [userLocation, setUserLocation] = useState("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [detectedAddress, setDetectedAddress] = useState("");
  const [coords, setCoords] = useState(null); // ✅ store lat/lng

  const filteredBrands = brands.filter(brand =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleIssue = (issue) => {
    setSelectedIssues(prev =>
      prev.includes(issue) ? prev.filter(i => i !== issue) : [...prev, issue]
    );
  };

  // Reverse-geocode using OSM Nominatim
  const getUserLocation = () => {
    setIsLoadingLocation(true);
    setUserLocation("Detecting your location...");

    if (!navigator.geolocation) {
      setUserLocation("Geolocation not supported. Please enter your address manually");
      setDetectedAddress("");
      setIsLoadingLocation(false);
      toast.error("Geolocation not supported — enter address manually");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude }); // ✅ Save coordinates

        try {
          const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
          const res = await fetch(url, { headers: { Accept: "application/json" } });
          const data = await res.json();

          if (data && (data.display_name || (data.address && Object.keys(data.address).length))) {
            const address = data.display_name || formatAddressFromParts(data.address);
            setUserLocation(address);
            setDetectedAddress(address);
            toast.success("Location detected successfully!");
          } else {
            setUserLocation("No address found. Please enter your address manually.");
            setDetectedAddress("");
            toast.error("No address found. Please enter your address manually.");
          }
        } catch (err) {
          console.error("Reverse geocode error:", err);
          setUserLocation("Error getting address. Please enter your address manually.");
          setDetectedAddress("");
          toast.error("Error getting address. Please enter your address manually.");
        } finally {
          setIsLoadingLocation(false);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        let errorMessage = "Please enter your address manually";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied. Please enter your address manually";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information unavailable. Please enter your address";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out. Please enter your address";
            break;
          default:
            errorMessage = "Please enter your address manually";
        }
        setUserLocation(errorMessage);
        setDetectedAddress("");
        setIsLoadingLocation(false);
        toast.error(errorMessage);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 }
    );
  };

  const formatAddressFromParts = (parts = {}) => {
    const keys = ['road', 'suburb', 'city', 'town', 'village', 'state', 'postcode', 'country'];
    return keys.map(k => parts[k]).filter(Boolean).join(", ");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedBrand) {
      toast.error("Please select a brand first");
      return;
    }

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();

    const area = detectedAddress || userLocation || form.message.value.trim();
    const issuesText = selectedIssues.join(", ") || "No issues selected";

    if (!name || !email || !phone || !area) {
      toast.error("Please fill all required fields");
      return;
    }

    const invalidMarkers = [
      "Detecting your location",
      "Please allow",
      "Location access denied",
      "Location information unavailable",
      "Location request timed out",
      "Geolocation not supported",
      "No address found",
      "Error getting address"
    ];
    if (invalidMarkers.some(marker => area.includes(marker))) {
      toast.error("Please provide a valid location address");
      return;
    }

    // ✅ Add Google Maps link if coords available
    let mapsLink = "";
    if (coords) {
      mapsLink = `\nGoogle Maps: https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`;
    }

    const baseText = `Smart Watch Repair Request:
Brand: ${selectedBrand.name}
Name: ${name}
Email: ${email}
Phone: ${phone}
Area: ${area}
Issues: ${issuesText}${mapsLink}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(baseText)}`, "_blank");
    toast.success("Submitted via WhatsApp ✅");

    setSelectedBrand(null);
    setSelectedIssues([]);
    setUserLocation("");
    setDetectedAddress("");
    setCoords(null);
  };

  return (
    <Container className="py-5 text-center">
      <input
        type="text"
        placeholder="Search Smart Watch Brands..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: "10px", width: "300px", marginBottom: "30px" }}
      />
      <Row xs={2} sm={3} md={4} className="g-4">
        {filteredBrands.map((brand, idx) => (
          <Col key={idx}>
            <div className="brand-card" onClick={() => setSelectedBrand(brand)}>
              <img src={brand.image} alt={brand.name} className="brand-logo" />
              <p>{brand.name}</p>
            </div>
          </Col>
        ))}
      </Row>

      {selectedBrand && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content border border-danger shadow-lg">
              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title">{selectedBrand.name}</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setSelectedBrand(null)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <input type="text" name="name" className="form-control mb-2" placeholder="Enter Name" required />
                  <input type="email" name="email" className="form-control mb-2" placeholder="Enter Email" required />
                  <input type="tel" name="phone" className="form-control mb-2" placeholder="Enter Mobile" required />

                  <div className="mb-3">
                    <label className="form-label">Detect Current Location</label>
                    <div className="d-grid gap-2 mb-2">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={getUserLocation}
                        disabled={isLoadingLocation}
                      >
                        {isLoadingLocation ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" />
                            Detecting Location...
                          </>
                        ) : (
                          "📍 Get My Current Location"
                        )}
                      </button>
                    </div>

                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Click the button above to detect your current location automatically, or type your address manually"
                      required
                      value={userLocation}
                      onChange={(e) => {
                        setUserLocation(e.target.value);
                        setDetectedAddress("");
                      }}
                      rows={3}
                    />
                    <small className="text-muted">
                      {isLoadingLocation
                        ? "🔄 Detecting your current location..."
                        : userLocation &&
                          (userLocation.includes("Please allow") ||
                            userLocation.includes("Location access denied") ||
                            userLocation.includes("Location information unavailable") ||
                            userLocation.includes("Location request timed out") ||
                            userLocation.includes("Geolocation not supported") ||
                            userLocation.includes("No address found") ||
                            userLocation.includes("Error getting address"))
                        ? "❌ " + userLocation
                        : userLocation &&
                          !userLocation.includes("Detecting your location")
                        ? "✅ Location detected successfully! You can edit if needed."
                        : "Click the button above to automatically detect your current location"}
                    </small>
                  </div>

                  <div className="mb-2 text-start">
                    <p>Select Issues:</p>
                    {issuesList.map((issue, i) => (
                      <div key={i} className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={`issue-${i}`}
                          checked={selectedIssues.includes(issue)}
                          onChange={() => toggleIssue(issue)}
                        />
                        <label className="form-check-label" htmlFor={`issue-${i}`}>{issue}</label>
                      </div>
                    ))}
                  </div>

                  <button type="submit" className="btn btn-danger w-100">Submit via WhatsApp</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .brand-card { cursor: pointer; padding: 20px; background: #fff; border-radius: 15px; box-shadow: 0 3px 8px rgba(0,0,0,0.1); }
        .brand-logo { width: 80px; height: 80px; object-fit: contain; margin-bottom: 10px; }
      `}</style>
    </Container>
  );
};

export default WatchesRepair;
