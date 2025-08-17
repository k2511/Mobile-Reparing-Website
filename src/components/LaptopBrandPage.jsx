import React from "react";
import { useParams, useLocation } from "react-router-dom";

const LaptopBrandPage = () => {
  const { brand } = useParams();
  const location = useLocation();
  const { brandName, brandImage } = location.state || {};

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>{brandName || brand}</h1>
      {brandImage && (
        <img
          src={brandImage}
          alt={brandName}
          style={{ maxWidth: "200px", margin: "20px 0" }}
        />
      )}
      <p>Show available laptop models, repair options, and services for {brandName || brand}.</p>
    </div>
  );
};

export default LaptopBrandPage;
