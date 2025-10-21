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
  const [coords, setCoords] = useState(null);

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

  // --- Detect location + reverse geocode ---
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

    const area = detectedAddress || userLocation || form.message.value.trim();
    const issuesList = cart.join(", ") || "No services selected";

    if (!name || !phone || !area) {
      toast.error("Please fill all required fields");
      return;
    }

    let mapsLink = "";
    if (coords) {
      mapsLink = `\n*Google Maps:* https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`;
    }

    const text = `📱 *New Repair Request*\n\n*Mobile:* ${mobileName}\n*Name:* ${name}\n*Phone:* ${phone}\n*Location:* ${area}${mapsLink}\n\n*Services Required:* ${issuesList}\n\n✅ Thank you!`;

    window.open(
      `https://wa.me/919900004531?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    toast.success("Booking submitted via WhatsApp ✅");
  };

  return (
    <div className="container py-3">
      {/* Mobile Title & Image */}
      <div className="d-flex flex-column flex-md-row align-items-center mb-3 text-center text-md-start">
        {imageUrl && (
          <img
            // src={imageUrl}
            alt={mobileName}
            className="img-fluid me-md-3 mb-2 mb-md-0"
            style={{ maxWidth: "120px", height: "auto" }}
          />
        )}
        <h2 className="fw-bold text-dark mb-0">{mobileName}</h2>
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
          <h5 className="text-danger fw-bold mb-3 text-center text-md-start">Book Your Service</h5>
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
                name="message"
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

            <button type="submit" className="btn btn-danger w-100">Submit via WhatsApp</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IssueBrand;



