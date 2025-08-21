// import React, { useState } from "react";
// import img1 from "../../assets/mobileParts/img1.jpg"
// import img2 from "../../assets/mobileParts/img2.jpg"
// import img3 from "../../assets/mobileParts/img3.jpg"
// import img4 from "../../assets/mobileParts/img4.jpg"
// import img5 from "../../assets/mobileParts/img5.jpg"
// import img6 from "../../assets/mobileParts/img6.jpg"
// import img7 from "../../assets/mobileParts/img7.jpg"
// import img8 from "../../assets/mobileParts/img8.jpg"
// import img9 from "../../assets/mobileParts/img9.jpg"
// import img10 from "../../assets/mobileParts/img10.jpg"
// import img11 from "../../assets/mobileParts/img11.jpg"
// import img12 from "../../assets/mobileParts/img12.jpg"

// //computer parts

// import comp1 from "../../assets/computerParts/comp1.jpg"
// import comp2 from "../../assets/computerParts/comp2.jpg"
// import comp3 from "../../assets/computerParts/comp3.jpg"
// import comp4 from "../../assets/computerParts/comp4.jpg"
// import comp5 from "../../assets/computerParts/comp5.jpg"
// import comp6 from "../../assets/computerParts/comp6.jpg"
// import comp7 from "../../assets/computerParts/comp7.jpg"
// import comp8 from "../../assets/computerParts/comp8.jpg"
// import comp9 from "../../assets/computerParts/comp9.jpg"
// import comp10 from "../../assets/computerParts/comp10.jpg"
// import comp11 from "../../assets/computerParts/comp11.jpg"
// import comp12 from "../../assets/computerParts/comp12.jpg"
// import comp13 from "../../assets/computerParts/comp13.jpg"
// import comp14 from "../../assets/computerParts/comp14.jpg"



// import "./SparePart.css";

// const SparePart = () => {
//   const [activeTab, setActiveTab] = useState('mobile');

//   const mobileParts = [
//     { name: "Display", img:img1 },
//     { name: "Ringer", img:img2 },
//     { name: "CCB", img:img3},
//     { name: "Ear Speaker", img:img4  },
//     { name: "Back Panel", img: img5 },
//     { name: "Middle Frame", img: img6 },
//     { name: "Screen Protector", img: img7 },
//     { name: "CCB to Main Board Flex", img:img8 },
//     { name: "Power Button Outer", img:img9 },
//     { name: "Power Button Inner", img: img10 },
//     { name: "SIM Tray", img:img11 },
//     { name: "Battery", img:img12 }
//   ];

// const computerParts = [
//   { name: "SMPS", img: comp1, desc: "Switched-mode power supply units for stable power." },
//   { name: "VGA Cable", img: comp2, desc: "High-quality VGA cables for display connectivity." },
//   { name: "Power Cable", img: comp3, desc: "Durable power cables for reliable connections." },
//   { name: "RAM", img: comp4, desc: "High-performance memory modules for faster computing." },
//   { name: "Hard Disk", img: comp5, desc: "Reliable storage solutions with high capacity." },
//   { name: "SSD", img: comp6, desc: "Fast solid-state drives for lightning speed." },
//   { name: "Monitor", img: comp7, desc: "Crystal clear displays for optimal viewing experience." },
//   { name: "AntiVirus", img: comp8, desc: "Comprehensive security software solutions." },
//   { name: "Keyboard", img: comp9, desc: "Ergonomic keyboards for comfortable typing." },
//   { name: "Mouse", img: comp10, desc: "Precision mice for smooth navigation." },
//   { name: "MotherBoard", img: comp11, desc: "High-quality motherboards for system stability." },
//   { name: "Graphics Card", img: comp12, desc: "Powerful graphics cards for enhanced performance." },
//   { name: "USB Extension", img: comp13, desc: "Convenient USB extension cables and hubs." },
//   {name:"Hdmi cable", img:comp14, desc:"It's a digital interface that's become the standard for transmitting high-quality video and audio signals between devices"}
// ];


//   const currentParts = activeTab === 'mobile' ? mobileParts : computerParts;

//   return (
//     <div className="spare-parts">
//       <div className="spare-parts-header">
//         <h2>Spare Parts</h2>
//         <p>
//           Explore our wide range of <span>genuine and reliable spare parts</span> 
//           for mobile phones and computers. We ensure quality and compatibility 
//           for hassle-free repairs.
//         </p>
//       </div>

//       {/* Tab Navigation */}
//       <div className="tab-navigation">
//         <button 
//           className={`tab-button ${activeTab === 'mobile' ? 'active' : ''}`}
//           onClick={() => setActiveTab('mobile')}
//         >
//           <span className="tab-icon">📱</span>
//           Mobile Parts
//         </button>
//         <button 
//           className={`tab-button ${activeTab === 'computer' ? 'active' : ''}`}
//           onClick={() => setActiveTab('computer')}
//         >
//           <span className="tab-icon">💻</span>
//           Computer Parts
//         </button>
//       </div>

//       {/* Parts Grid */}
//       <div className="parts-container">
//         <div className="section-title">
//           <h3>{activeTab === 'mobile' ? 'Mobile Parts' : 'Computer Parts'}</h3>
//         </div>
        
//         <div className="parts-grid">
//           {currentParts.map((part, index) => (
//             <div key={index} className="part-card">
//               <div className="part-image-container">
//                 <img src={part.img} alt={part.name} loading="lazy" />
//               </div>
//               <div className="part-content">
//                 <h4>{part.name}</h4>
//                 <p className="desc">{part.desc}</p>
//                 <button className="view-details-btn">Order Now</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SparePart;

//////////////*********************************************/




// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";

// // mobile parts
// import img1 from "../../assets/mobileParts/img1.jpg";
// import img2 from "../../assets/mobileParts/img2.jpg";
// import img3 from "../../assets/mobileParts/img3.jpg";
// import img4 from "../../assets/mobileParts/img4.jpg";
// import img5 from "../../assets/mobileParts/img5.jpg";
// import img6 from "../../assets/mobileParts/img6.jpg";
// import img7 from "../../assets/mobileParts/img7.jpg";
// import img8 from "../../assets/mobileParts/img8.jpg";
// import img9 from "../../assets/mobileParts/img9.jpg";
// import img10 from "../../assets/mobileParts/img10.jpg";
// import img11 from "../../assets/mobileParts/img11.jpg";
// import img12 from "../../assets/mobileParts/img12.jpg";

// // computer parts
// import comp1 from "../../assets/computerParts/comp1.jpg";
// import comp2 from "../../assets/computerParts/comp2.jpg";
// import comp3 from "../../assets/computerParts/comp3.jpg";
// import comp4 from "../../assets/computerParts/comp4.jpg";
// import comp5 from "../../assets/computerParts/comp5.jpg";
// import comp6 from "../../assets/computerParts/comp6.jpg";
// import comp7 from "../../assets/computerParts/comp7.jpg";
// import comp8 from "../../assets/computerParts/comp8.jpg";
// import comp9 from "../../assets/computerParts/comp9.jpg";
// import comp10 from "../../assets/computerParts/comp10.jpg";
// import comp11 from "../../assets/computerParts/comp11.jpg";
// import comp12 from "../../assets/computerParts/comp12.jpg";
// import comp13 from "../../assets/computerParts/comp13.jpg";
// import comp14 from "../../assets/computerParts/comp14.jpg";

// import "./SparePart.css";

// const SparePart = () => {
//   const [activeTab, setActiveTab] = useState("mobile");
//   const [showModal, setShowModal] = useState(false);
//   const [selectedPart, setSelectedPart] = useState(null);
//   const [formData, setFormData] = useState({
//     model: "",
//     brand: "",
//     quantity: "1",
//   });

//   const handleShowModal = (part) => {
//     setSelectedPart(part);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setFormData({ model: "", brand: "", quantity: "1" });
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleOrder = () => {
//     const { model, brand, quantity } = formData;
//     const message = `📦 *Order Request* \n\n🛠️ Part: ${selectedPart?.name}\n🏷️ Brand: ${brand}\n📱 Model: ${model}\n🔢 Quantity: ${quantity}`;
//     const whatsappURL = `https://wa.me/919916313616?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappURL, "_blank");
//     handleCloseModal();
//   };

//   const mobileParts = [
//     { name: "Display", img: img1 },
//     { name: "Ringer", img: img2 },
//     { name: "CCB", img: img3 },
//     { name: "Ear Speaker", img: img4 },
//     { name: "Back Panel", img: img5 },
//     { name: "Middle Frame", img: img6 },
//     { name: "Screen Protector", img: img7 },
//     { name: "CCB to Main Board Flex", img: img8 },
//     { name: "Power Button Outer", img: img9 },
//     { name: "Power Button Inner", img: img10 },
//     { name: "SIM Tray", img: img11 },
//     { name: "Battery", img: img12 },
//   ];

//   const computerParts = [
//     { name: "SMPS", img: comp1, desc: "Switched-mode power supply units for stable power." },
//     { name: "VGA Cable", img: comp2, desc: "High-quality VGA cables for display connectivity." },
//     { name: "Power Cable", img: comp3, desc: "Durable power cables for reliable connections." },
//     { name: "RAM", img: comp4, desc: "High-performance memory modules for faster computing." },
//     { name: "Hard Disk", img: comp5, desc: "Reliable storage solutions with high capacity." },
//     { name: "SSD", img: comp6, desc: "Fast solid-state drives for lightning speed." },
//     { name: "Monitor", img: comp7, desc: "Crystal clear displays for optimal viewing experience." },
//     { name: "AntiVirus", img: comp8, desc: "Comprehensive security software solutions." },
//     { name: "Keyboard", img: comp9, desc: "Ergonomic keyboards for comfortable typing." },
//     { name: "Mouse", img: comp10, desc: "Precision mice for smooth navigation." },
//     { name: "MotherBoard", img: comp11, desc: "High-quality motherboards for system stability." },
//     { name: "Graphics Card", img: comp12, desc: "Powerful graphics cards for enhanced performance." },
//     { name: "USB Extension", img: comp13, desc: "Convenient USB extension cables and hubs." },
//     { name: "Hdmi cable", img: comp14, desc: "Digital interface for transmitting high-quality video and audio." },
//   ];

//   const currentParts = activeTab === "mobile" ? mobileParts : computerParts;

//   return (
//     <div className="spare-parts container py-4">
//       <div className="spare-parts-header text-center mb-4">
//         <h2 className="fw-bold text-danger">Spare Parts</h2>
//         <p className="text-dark">
//           Explore our wide range of{" "}
//           <span className="fw-bold">genuine and reliable spare parts</span> for
//           mobile phones and computers. We ensure quality and compatibility for
//           hassle-free repairs.
//         </p>
//       </div>

//       {/* Tab Navigation */}
//       <div className="tab-navigation text-center mb-4">
//         <button
//           className={`btn me-2 ${activeTab === "mobile" ? "btn-danger" : "btn-outline-dark"}`}
//           onClick={() => setActiveTab("mobile")}
//         >
//           📱 Mobile Parts
//         </button>
//         <button
//           className={`btn ${activeTab === "computer" ? "btn-danger" : "btn-outline-dark"}`}
//           onClick={() => setActiveTab("computer")}
//         >
//           💻 Computer Parts
//         </button>
//       </div>

//       {/* Parts Grid */}
//       <div className="row">
//         {currentParts.map((part, index) => (
//           <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
//             <div className="card h-100 shadow-sm border-0">
//               <img src={part.img} alt={part.name} className="card-img-top" />
//               <div className="card-body text-center">
//                 <h6 className="fw-bold">{part.name}</h6>
//                 {part.desc && <p className="small text-muted">{part.desc}</p>}
//                 <Button
//                   variant="danger"
//                   size="sm"
//                   onClick={() => handleShowModal(part)}
//                 >
//                   Order Now
//                 </Button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Order Form Modal */}
//       <Modal show={showModal} onHide={handleCloseModal} centered>
//         <Modal.Header closeButton className="bg-dark text-white">
//           <Modal.Title>Order {selectedPart?.name}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Brand</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="brand"
//                 placeholder="Enter brand"
//                 value={formData.brand}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Model</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="model"
//                 placeholder="Enter model"
//                 value={formData.model}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Quantity</Form.Label>
//               <Form.Control
//                 type="number"
//                 min="1"
//                 name="quantity"
//                 value={formData.quantity}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Cancel
//           </Button>
//           <Button variant="danger" onClick={handleOrder}>
//             Send via WhatsApp
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default SparePart;



import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

// mobile parts
import img1 from "../../assets/mobileParts/img1.jpg";
import img2 from "../../assets/mobileParts/img2.jpg";
import img3 from "../../assets/mobileParts/img3.jpg";
import img4 from "../../assets/mobileParts/img4.jpg";
import img5 from "../../assets/mobileParts/img5.jpg";
import img6 from "../../assets/mobileParts/img6.jpg";
import img7 from "../../assets/mobileParts/img7.jpg";
import img8 from "../../assets/mobileParts/img8.jpg";
import img9 from "../../assets/mobileParts/img9.jpg";
import img10 from "../../assets/mobileParts/img10.jpg";
import img11 from "../../assets/mobileParts/img11.jpg";
import img12 from "../../assets/mobileParts/img12.jpg";

// computer parts
import comp1 from "../../assets/computerParts/comp1.jpg";
import comp2 from "../../assets/computerParts/comp2.jpg";
import comp3 from "../../assets/computerParts/comp3.jpg";
import comp4 from "../../assets/computerParts/comp4.jpg";
import comp5 from "../../assets/computerParts/comp5.jpg";
import comp6 from "../../assets/computerParts/comp6.jpg";
import comp7 from "../../assets/computerParts/comp7.jpg";
import comp8 from "../../assets/computerParts/comp8.jpg";
import comp9 from "../../assets/computerParts/comp9.jpg";
import comp10 from "../../assets/computerParts/comp10.jpg";
import comp11 from "../../assets/computerParts/comp11.jpg";
import comp12 from "../../assets/computerParts/comp12.jpg";
import comp13 from "../../assets/computerParts/comp13.jpg";
import comp14 from "../../assets/computerParts/comp14.jpg";

import "./SparePart.css";

const SparePart = () => {
  const [activeTab, setActiveTab] = useState("mobile");
  const [showModal, setShowModal] = useState(false);
  const [selectedPart, setSelectedPart] = useState(null);
  const [formData, setFormData] = useState({
    model: "",
    brand: "",
    quantity: "1",
  });

  const handleShowModal = (part) => {
    setSelectedPart(part);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ model: "", brand: "", quantity: "1" });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    const { model, brand, quantity } = formData;
    const message = `📦 *Order Request* \n\n🛠️ Part: ${selectedPart?.name}\n🏷️ Brand: ${brand}\n📱 Model: ${model}\n🔢 Quantity: ${quantity}`;
    const whatsappURL = `https://wa.me/919916313616?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
    handleCloseModal();
  };

  const mobileParts = [
    { name: "Display", img: img1 },
    { name: "Ringer", img: img2 },
    { name: "CCB", img: img3 },
    { name: "Ear Speaker", img: img4 },
    { name: "Back Panel", img: img5 },
    { name: "Middle Frame", img: img6 },
    { name: "Screen Protector", img: img7 },
    { name: "CCB to Main Board Flex", img: img8 },
    { name: "Power Button Outer", img: img9 },
    { name: "Power Button Inner", img: img10 },
    { name: "SIM Tray", img: img11 },
    { name: "Battery", img: img12 },
  ];

  const computerParts = [
    { name: "SMPS", img: comp1, desc: "Switched-mode power supply units for stable power." },
    { name: "VGA Cable", img: comp2, desc: "High-quality VGA cables for display connectivity." },
    { name: "Power Cable", img: comp3, desc: "Durable power cables for reliable connections." },
    { name: "RAM", img: comp4, desc: "High-performance memory modules for faster computing." },
    { name: "Hard Disk", img: comp5, desc: "Reliable storage solutions with high capacity." },
    { name: "SSD", img: comp6, desc: "Fast solid-state drives for lightning speed." },
    { name: "Monitor", img: comp7, desc: "Crystal clear displays for optimal viewing experience." },
    { name: "AntiVirus", img: comp8, desc: "Comprehensive security software solutions." },
    { name: "Keyboard", img: comp9, desc: "Ergonomic keyboards for comfortable typing." },
    { name: "Mouse", img: comp10, desc: "Precision mice for smooth navigation." },
    { name: "MotherBoard", img: comp11, desc: "High-quality motherboards for system stability." },
    { name: "Graphics Card", img: comp12, desc: "Powerful graphics cards for enhanced performance." },
    { name: "USB Extension", img: comp13, desc: "Convenient USB extension cables and hubs." },
    { name: "Hdmi cable", img: comp14, desc: "Digital interface for transmitting high-quality video and audio." },
  ];

  const currentParts = activeTab === "mobile" ? mobileParts : computerParts;

  return (
    <div className="spare-parts container py-4">
      {/* Header */}
      <div className="spare-parts-header text-center mb-4">
        <h2 className="fw-bold text-danger">Spare Parts</h2>
        <p className="text-muted">
          Explore our wide range of{" "}
          <span className="fw-bold text-dark">genuine and reliable spare parts</span> for
          mobile phones and computers. We ensure quality and compatibility for hassle-free repairs.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation text-center mb-4">
        <button
          className={`btn me-2 ${activeTab === "mobile" ? "btn-danger" : "btn-outline-dark"}`}
          onClick={() => setActiveTab("mobile")}
        >
          📱 Mobile Parts
        </button>
        <button
          className={`btn ${activeTab === "computer" ? "btn-danger" : "btn-outline-dark"}`}
          onClick={() => setActiveTab("computer")}
        >
          💻 Computer Parts
        </button>
      </div>

      {/* Parts Grid */}
      <div className="row">
        {currentParts.map((part, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="card part-card shadow-sm border-0 h-100">
              <div className="image-container">
                <img src={part.img} alt={part.name} className="card-img-top part-img" />
              </div>
              <div className="card-body text-center d-flex flex-column justify-content-between">
                <h6 className="fw-bold text-truncate">{part.name}</h6>
                {part.desc && <p className="small text-muted">{part.desc}</p>}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleShowModal(part)}
                >
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Form Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Order {selectedPart?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                name="brand"
                placeholder="Enter brand"
                value={formData.brand}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                name="model"
                placeholder="Enter model"
                value={formData.model}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                min="1"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleOrder}>
            Send via WhatsApp
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SparePart;
