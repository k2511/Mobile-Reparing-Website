import { useParams, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { toast } from "react-hot-toast";

function IssueBrand() {
  const { mobileName } = useParams();
  const { state } = useLocation();
  const imageUrl = state?.image;

  const [cart, setCart] = useState([]);
  const [selectedIssues, setSelectedIssues] = useState({});
  const [mobile, setMobile] = useState("");

  // Location states
  const [userLocation, setUserLocation] = useState("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [detectedAddress, setDetectedAddress] = useState("");
  const [coords, setCoords] = useState(null); // latitude/longitude store

  useEffect(() => {
    setMobile(mobileName);
  }, [mobileName]);

  const issues = [
    { id: 1, title: "Display Broken / Glass Repair", image: "https://ongofix.com/upload/issues/348045Phone’s Display Broken Icon.png" },
    { id: 4, title: "Battery Issue", image: "https://ongofix.com/upload/issues/713964Battery%20Issue%20Icon.png" },
    { id: 5, title: "Motherboard Issue", image: "https://img.freepik.com/premium-photo/technician-replacing-power-ic-smartphone-motherboard_77206-253.jpg" },
    { id: 8, title: "Back Glass Issue", image: "https://ongofix.com/upload/issues/436464Back%20Glass%20Icon.png" },
    { id: 2, title: "Speaker Issue", image: "https://ongofix.com/upload/brands/945749audio.png" },
    { id: 3, title: "Charging Issue", image: "https://ongofix.com/upload/issues/369326Charging%20Issue%20Icon.png" },
    { id: 6, title: "Mic Issue", image: "https://ongofix.com/upload/issues/678757Microphone Issue Icon.png" },
    { id: 7, title: "Camera Issue", image: "https://ongofix.com/upload/issues/431109Rear%20Camera%20Problem%20Icon.png" },
  ];

  const handleToggle = (id) => {
    setSelectedIssues((prevIssues) => ({
      ...prevIssues,
      [id]: !prevIssues[id],
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

  // --- Nominatim reverse geocode (no API key required) ---
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
        setCoords({ latitude, longitude }); // save coords for maps link

        try {
          const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
          const response = await fetch(url, {
            method: "GET",
            headers: { Accept: "application/json" },
          });

          const data = await response.json();
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
          console.error("Error reverse geocoding:", err);
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

  // helper to build readable address if display_name missing
  const formatAddressFromParts = (parts = {}) => {
    const keys = ['road', 'suburb', 'city', 'town', 'village', 'state', 'postcode', 'country'];
    return keys.map(k => parts[k]).filter(Boolean).join(", ");
  };

  // --- Submit (uses detectedAddress or edited textarea) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();

    const area = detectedAddress || userLocation || form.message.value.trim();
    const issuesList = cart.join(", ") || "No services selected";

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

    // add Google Maps link if coords available
    let mapsLink = "";
    if (coords) {
      mapsLink = `\n*Maps Link:* https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`;
    }

    const text = `📱 *New Repair Request*

*Mobile:* ${mobileName}
*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Location:* ${area}
*Services Required:* ${issuesList}${mapsLink}

*Thank you!*`;

    window.open(
      `https://wa.me/919900004531?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    toast.success("Booking submitted via WhatsApp ✅");
  };

  return (
       <div className="container">
      {/* Mobile Title & Image */}
      <div className="d-flex flex-row align-items-center mb-3">
        {imageUrl && <img src={imageUrl} alt={mobileName} style={{ width: "100px" }} className="me-3" />}
        <h2 className="fw-bold text-dark mb-0">{mobileName}</h2>
      </div>

      {/* Special Offer Card */}
      <div className="my-5 position-relative special-offer-wrapper">
        <div className="special-offer-sticker">Special Offer</div>

        <div className="card special-offer-card shadow-lg border-0">
          <div className="card-body d-flex justify-content-between align-items-start flex-column flex-md-row">
            <div className="offer-info mt-4">
              <p className="mb-1 fs-6">
                <strong>Starting price (display replacement):</strong>{" "}
                <span className="text-primary">Rs. 899</span>
              </p>
              <p className="mb-1 fs-6">
                <strong>Starting price (glass replacement):</strong>{" "}
                <span className="text-primary">Rs. 499</span>
              </p>
              <p className="text-success fw-bold mb-2 fs-6">
                FREE 5 items with display change:
              </p>
              <ul className="mb-0 list-group list-group-flush free-items-list">
                <li className="list-group-item p-1">Data cable</li>
                <li className="list-group-item p-1">Headphone</li>
                <li className="list-group-item p-1">Mobile stand</li>
                <li className="list-group-item p-1">PUBG gloves</li>
                <li className="list-group-item p-1">Data cable protector</li>
              </ul>
            </div>

            <div className="mt-3 mt-md-0 d-flex align-items-center justify-content-center">
              <span className="badge special-badge">Limited Time</span>
            </div>
          </div>
        </div>

        <style jsx>{`
          .special-offer-wrapper {
            position: relative;
            animation: fadeInUp 1s ease forwards;
            overflow: visible;
          }
          .special-offer-sticker {
            position: absolute;
            top: -15px;
            left: -2px;
            z-index: 1000;
            background: linear-gradient(45deg, #ff416c, #ff4b2b);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.75rem;
            font-weight: bold;
            font-size: 1rem;
            text-transform: uppercase;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
            animation: bounce 2s infinite;
          }
          .special-offer-card {
            border-radius: 1rem;
            background: linear-gradient(135deg, #fffdf4, #ffe3b3);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            overflow: visible;
          }
          .special-offer-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
          }
          .special-badge {
            background: linear-gradient(45deg, #ff416c, #ff4b2b);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.9rem;
            font-weight: bold;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            animation: shine 2s infinite;
          }
          .free-items-list li {
            border: none;
            background: transparent;
            padding-left: 0;
            font-weight: 500;
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          @keyframes shine {
            0% { box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
            50% { box-shadow: 0 8px 20px rgba(255, 65, 108, 0.7); }
            100% { box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 768px) {
            .special-offer-card {
              flex-direction: column;
            }
          }
        `}</style>
      </div>

      {/* Issues List */}
      <section>
        <div className="container mt-2">
          <div className="row">
            {issues.map((issue) => (
              <div key={issue.id} className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4">
                <div
                  className={`d-flex flex-row p-3 border gap-3 rounded shadow-sm align-items-start cursor-pointer ${selectedIssues[issue.id] ? "bg-light border-primary" : ""}`}
                  onClick={() => handleToggle(issue.id)}
                >
                  <div className="proThumb mt-2 me-3">
                    <img
                      src={issue.image}
                      alt={issue.title}
                      className="img-fluid"
                      style={{ width: "40px", height: "60px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="content mt-2 d-flex flex-column flex-grow-1">
                    <h5 className="issue-title title fs-6 mb-2 text-break">{issue.title}</h5>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="rightSide">
                        <button className="btn btn-danger btn-sm" onClick={(e) => handleAddService(e, issue.title)}>Add</button>
                      </div>
                      {selectedIssues[issue.id] && <span className="badge bg-primary ms-2">Selected</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Now Button & Modal */}
      <div className="quickContactArea text-white d-flex justify-content-center align-items-center border rounded-3" data-bs-toggle="modal" data-bs-target="#quickContactModal" style={{ height: "80px" }}>
        <button className="btn btn-dark rounded">Book Now</button>
      </div>

      <div className="modal fade" id="quickContactModal" tabIndex="-1" aria-labelledby="quickContactModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content border border-danger shadow-lg">
            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title" id="quickContactModalLabel">{mobileName}</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h6 className="mb-3 text-danger fw-bold">Please provide your information for service booking</h6>
              <form id="sendmail" onSubmit={handleSubmit}>
                <input type="hidden" name="ajax_send_main" />
                <div className="mb-3">
                  <input type="text" className="form-control" name="name" placeholder="Enter Name" required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" name="email" placeholder="Enter Email" required />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control" name="phone" placeholder="Enter Mobile" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Detect Current Location</label>
                  <div className="d-grid gap-2">
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
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Area / Address *</label>
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Click the button above to detect your current location automatically, or type your address manually"
                    required
                    value={userLocation}
                    onChange={(e) => {
                      setUserLocation(e.target.value);
                      // if user edits manually clear detectedAddress so the manual value is used
                      setDetectedAddress("");
                    }}
                    rows="3"
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

                <div className="mt-4">
                  {cart.length === 0 ? (
                    <div className="text-muted">No services added yet</div>
                  ) : (
                    cart.map((val, idx) => (
                      <div key={idx} className="p-2 mb-2 bg-white border border-danger rounded text-break d-flex justify-content-between align-items-center">
                        <span className="me-2">{val}</span>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCart((prev) => prev.filter((it) => it !== val));
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    ))
                  )}
                </div>

                <div className="modal-footer border-0">
                  <button type="submit" name="submit" className="btn btn-danger">
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




