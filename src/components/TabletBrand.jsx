import { useParams, useLocation } from "react-router-dom";

const TabletBrandPage = () => {
  const { brand } = useParams();
  const location = useLocation();
  const { brandName, brandImage } = location.state || {};

  return (
    <div>
      <h1>{brandName || brand}</h1>
      {brandImage && <img src={brandImage} alt={brandName} />}
      <p>Show available tablet models, repair options, etc.</p>
    </div>
  );
};

export default TabletBrandPage;
