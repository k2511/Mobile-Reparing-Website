import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const brands = [
  { name: "Noise", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ30tM0aZ1-P_dlbh64_XPl424xnSHQ1CfqZLpsFmgDMnwt9A0RHlqI1XOwpOhyKjnyXA8&usqp=CAU"},
  { name: "boAt", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAA21BMVEX///8AAADtHSbn5+d+fn53d3fw8PAcHBztDRrjAAj719j//v/sHSbmeHr1u77tHSTqAA2kpKT29vblAADAwMCTk5PGxsZgYGC1tbXi4uKvr69ra2vW1tbj4+OEhISLi4stLS1KSkpTU1Obm5tXV1fOzs7rAABkZGRCQkI0NDQjIyMZGRkODg49PT3/9vj0xMXphYf86uvslJnobHD6293oXmThDxztsrXkUVPjJzPkHSnjMTvrjY7mZWrsn6P0ysrvpqrmP0b96+fmTE/hVVriIy7iPEHzqKbripFbwQunAAAOCklEQVR4nO1daUPTShemLcVAimnThVIKtIWCKLIoouICinrv//9Fb5I2M2cm58yW8uaq83xiaSaTpzNnn5O1NQ8PDw8PDw8PDw8PDw8PDw8PDw8Pjz8G4X6jUfUc/gtoNBobVp+v1WrDp5rM74N+QkPT5oKUt1r8VNP5XdBJWVi3uSLjbeep5vOboFdz4+0v36njmitvf/VO3a+58/YX79SNWgne/t6dGr4sxVvNynr5g/CiVo43q6v+HBzUSvJmZfX9OWh63pzgeXOD580Nnjc3eN7c4Hlzg+fNDZ43N3je3OB5c4PnzQ2eNzd43tzgeXOD580Nnjc3eN7c4Hlzg+fNDZ43N6xz3g5srlPytjHoNI8n2b8nO4fD3VVMdH8w6h809/aa6/3RYL/MSFvPaaAX9M6fFXDOeUP+yyHnSUne4l7zWU3GzqhMsVw8OHwtj/jicBC6jJVcdNsm0d1CLukUHscGZrzN96jrX3ccM9S9HWrI04HLeJcnUZ1CcFX8/AF1+9XxNpwoh9gbWz/kRl854vmRfWHPu4CkrR7dXsgfPy1HmwFvvZeq6zNM7VZIfKifV99yu153adpa9fZ7aQYv9DNQQ8dbY2o0zNRizY3MZmZX2vOmTfOWbNQP4lMWRbUtNLyZC09Tw6Vh/FXPLCRn+JGWbulG7d6AD48tOcKg5C08thnKaMkNbUbsGfN22VbyJmgGqylQUPHWeCV9+PhwNBjv7u/vjufD/mlhsR/pn68pX6PGoSlvXwIlb636HdcMjQ0SMZhfM6Y/tyFvBcibuJynnYJV2hhJ63FP93hTjJyz2c7e3s4MVdqGhZ/Xmwk1SrRx21fGCvysOZx/n5A1kkGhfsy4QM3ZQQ9YzvvD9YLunhpN+027peFN0gwUSvO2vgsm31EYBbHAnGrFybSdHyF+1Xhd/FDthcm0P0U63uqCZiBRmrcZ99SaGiNUMFVoiRSKtE0oOyM+sl5xl109b+3P+nFWwBtfFXP9VfBJSbNLtD9GiuFi0Qc61d7/S1DX8hbdmVjSK+Pt2MjjgbKQcPUFD3dHM+quIOd0WvV6U22ELBeciWZYFW+mhgCQhi/RDwibr6MfUKBZY8d9bUcGxAXvDJ5jRbwZPGDxQuyGgk1jsPMlotXhqk+BCW/19rX+rqvhzcZFBFcivMBRDaOT0Kx/rfrg/aZOti15e6O/6Up4s/Os+ZKaFP4Hd51xqBMSR7si4dpbRQQJIIru9PdcBW/mm3SBIXklVBsW0XUYOKHZvtg0oi1dcJfaW66AN2PfELmppC6BdjSSbTlAnO6Y/NA/ZsstQfDF4hFceXM4EhiyOIDIOQhGWa5h4P+SodFfJjphga5WM5TmbWJzVY4BuuBik1WDA1x6RnzkvmukTBcb9avuhqV504Y2ULBcSx/8ETiw1mkDIBlRIy5c20a3aQvlMviou19FvPFtzv8Wah5dDa6JcVvkIvEVij5W1PqIrsKTe83tKuKN35dTxKWbWUxIBNipqEp5QPMKwS8sANxqBW9N5/9/5o1dzyUZD4M4Jfg57eiUvqEbMjFx7/CdqtEMVfHG85K5KBurn1sPHtBCpOPWCcZOffOGkHs6zVAZb0yQ584Gj0M61pPwBYfEnrYDzMeKHlM9i/EW/VLfrDLe1p5JA7B5zBwH5BKuKB8vbvFt+rCWxYAR3rpqzVBdHRezOha/ckPCQZkuwFdsYaM+4HmFze9rac4B41SjGarjjUXiFtuSu0quAwIJWaD+G7am6sGP9H83XQfNUGHdoCiNJk7TEDGhJrV1gkaQltUgH3DN8KC6VYW8NeF9uXByKs5agG39Z9I/cJ2ZVx8lmxhbb99MJl8Bb3k4KZPiuMdqCb5RxSzuxW1CEi3CrgMsGR2hRYQ5KuQtF3Dn6S8s2u2qTTMQi/Z9sqAQ3rp5mA0PaAbbijtVyBvbmukKY+5lX3udArN8FDEM9YgWhUSsFIQowSwWEXKUz9fbPhtHHoVL8whMpJcQb0DACd9mpjCLdghfTyHua6k0Q5W8TZdDpHVdbBaluo328lEEy/cK9RXqwLK9wvWGQjNUyVu+NwegmZq79ZaC2YTn4I+pVsBY+cjz8rj3qtIMVfKW33sINCEVrTUDt2ZArcL7EzTEFsA6kE+46YuUl0tzr4K3vLpjBMyQkg0M2cMAQ4TQCkLdEV71i5SX56iSt3XOG0sNljy2xNQLj6nc4AXkgRDwuO6qHAoE/4V9OgIxIPukooBpPg6vIcZlfj34ugbrjj7gG/VRN/cqeMv1wgiYvQalvyqwfE8eKw8vcBtDTvW9Rzdqa5MqIqyStzzpOQSGl23uXwIzn5kZ+Bw/ryCXo17gJTfBv8SNquQtLxDsPQFvLJL0A9+mkk2bFY8gzEV3hGaokrc84jt/Qt5uiKKQTZGPcO2yjfFGFhFWyVs+xBjIt1Xv08/4eQWkNhCXgxFRXl4hb8xHaADeSrn1oE5kqRcIz7OFLCNC77ZxzVCaN6tT0gKYjxADO8R9uAyspnpphzzHjbfUoJWrn4kdHeDl5RXyxmxd+LNzemwBVui0tHt/ENv07VpYqBrHM9NEEWGFvOW6IK3nYH5WqbAl8LMWUePrTUzWt1rdS4S3r2i4vN5FNUOFvOWyKD12wAIZcmbADnJY5Q1ulUU/sYu/41X6i6SXjAp5y0dIXSs0kGEPJjIni9/vItyaxeMcuKkXoUWE1fGWv/ZhUejAZlGqaQYr9F1U6xA2WZ2IqxG+VoCVl5fmzdkRZ8+Yqb6pwKIrWMZ+8W0SLQiiT/jVRDEEuqur442ZqNlv606zkMHajGS57O9ZXqFIxOJ8AiIQ8DRr/QQpL6+Ot3yAxflHtvomruOtQSmZreE3AcZbq04GOe7xYi+svLwy3ubiADxlXCIxw9Iy2RomWhBEwSO21jIQTQsQzVAZb2xjLj1JNo0SHip7mCydRWRFI0VJ4GfC1ypqhsp4Y7ddfvcs4ljC8mVjZl4u0YKgpTicQMTUEUVSFW89mSZ+Vsh5o/Iak1S8XRMRJNyOXQL1tVpIeXlVvLGKhLymlFfmO4dEeAOq9DeqBQGda0nwDxEdLhQRVsQbP77LEnbMhjhXXWgypexJQrT8tF6IWELcX/3EFUO0Ke/tinhj1eRcminLmk3Ay1TT4Nt9u4X69NSZtfD+6q5LNmUp6BLYd8VmkuV448uNV5Ryn9zNt5eux/MFiBGb6qWEtJ/tgFig2YKTy8sBb1ahL8abkzRi0g2Wg/CTQk6mCH+SNJd4TSyd6LZgu6WkpStNeRha1gyAN6szeKV44wd34dXgaL1DzaV09VeiXZlcDBjeb6ekKZba8jpJMwDerE5FleEtJgiaui39Bc7YxZmc/kQc0hXWTXi5vZRp+q4iUnk54M2qFKgMb5wfMQilOwupAjiDmdp/93htfStaHJBM9+pFQloi0wwPpbbaD4J3BnizEscleANNZqT9yAm1fc0l2KXZcnuLlwq28vx7QtotrT3RBSdqBthnzUaquPMGVoZcDAKastjVwcXSU1wQ7coWxVsXl29v28aH7dmlQrAT8mbj4DjzBtqkFBc4mI2+2REAaO+b6eIHosFK8C0lLUhWWiuRaGbdRNi1gkaBvNm0UGC8WRYQHSnvB9eNhRkOuhIs1ukvYTUlBvASwbvtZKVBkyOiIS84wdGAvNnY6Y68waZtmJ09AP83zlzAxshZemJL1Aq33c0c3S7/WQ9xLwulOIeaB6HgxFs8BXd7hX6kaT+fGbgknU3aggC2eWu/udlywo3g5YvxTtg/dmJBgQtvvRoEkbiCTfNmBppq4wxekP1Jyq+oyunVkBKDUDPAjWHayCmFPW8Nsc84JRSExkvn2pa1wvxfLXiWWxCcZJGjxVoJi3l6EvdSwBimXTfgfS10oy1vG1I7SjocILQZ1Qi5WGwjv1zCcvARnlSwgVyILpSXC80k1fsiHPHkJuPt1MRCHctt8lWiS2o3rEioSk2ql/p5S64Nj04eDOZYwKUcNI9gyFNoO6dyUedNGKgA22k2VFO3e1RoGqv2PyU6zjvo17khtQVlvtl2wQ8gq02VKMTMBc0gbNTaGS6tw8Fim6G8JXjdH+DcNXrrSGt0naIsNDs/lb+axrDQ2TunLdEKBZvXpBOejOdIMhWeFZEEz3FPmmI8P0KOJyL9VKfNo1FvPt7dbTQau+PB8Kg5LVKWQi9Gkc7gL/f6w8E4wQDr3A0KyLEqj+j2uzVvvxBPDGqGuDjF035n2BsMBsPOwY6wx1S8GcMk1jHXDyOCK95H5HlbbfqkFYH3WPZV2PAD/axyrIC3F2ZecEP96hB5UL5HbrAqtlY9MOoCzRHiJ92EZJgsYGmU5808BC730VYAGjVUebOuUZQEvA2VdFxE/RIX/Kk1b37B0bQJq80NX7YxgcYxUYul6TJQAFGHnjj3wro1fCOJtFroNw3h2LPNxBttBHFOeO1fXZOmL4BKT8gHj3b179RJIYv0WH6xAo1z6g0DKsTaRS27K48BniqIdA2PBCSrlgjOFfJh+u92hlruca+p5/x83ao9KkA4KrxyjGNamNEN3fA+Is9EFkG/piEqlJerX7o0U702rDE8mJJXPjvtlHvRXeMIHXzWQbb91UlA4sTsTR4JLrptcpR2cb+HRSM8w9l6zyCg0xh0DvemE3by4tVkunc4mju+pU1EPO80p2xZv5w2O2N0RuG2CsZOw6VyGMxniwf9Y7Dt0hnOLZPAYZyhVD09NXL2SpwnGHk1iDd2U4emsVGiVZGHh4eHh4eHh4eHh4eHh4eHh4eHh4fHH4r/Ae1aBqLnr9n9AAAAAElFTkSuQmCC" },
  { name: "Fire-Boltt", image: "data:image/jpeg;base64,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" },
  { name: "Fastrack", image: "https://avatars.mds.yandex.net/i?id=e7425079f758180a10738d57c03cc4beaf131548-4859870-images-thumbs&n=13" },
  { name: "Titan Smart", image: "https://avatars.mds.yandex.net/i?id=bbca47a99460886dc5f2225586848d868af8c4fa-5220588-images-thumbs&n=13" },
  { name: "Pebble", image: "https://avatars.mds.yandex.net/i?id=11b4c715505c8ec99eb32cd713dcebcd341aab30-5181228-images-thumbs&n=13" },
  { name: "pTron", image: "https://avatars.mds.yandex.net/i?id=2c300941dcd618850e68ed7bcf16da4805f36294-4571389-images-thumbs&n=13" },
];

const WatchesRepair = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBrandClick = (brand) => {
    navigate(`/smartwatches/${brand.name.toLowerCase().replace(/\s+/g, "-")}`, {
      state: {
        brandName: brand.name,
        brandImage: brand.image,
      },
    });
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #dee2e6",
          padding: "20px 0",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <p style={{ marginBottom: "8px", color: "#6c757d", fontSize: "14px" }}>
            Home / Repair / Smart Watches
          </p>
          <h1 style={{ fontSize: "30px", fontWeight: "700", margin: 0, color: "#212529" }}>
            Smart Watch Repair & Replacement
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <Container className="py-5 text-center">
        {/* Search Input */}
        <div style={{ marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Smart Watch Brands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "320px",
              padding: "12px 20px",
              border: "1px solid #ced4da",
              borderRadius: "30px",
              fontSize: "16px",
              outline: "none",
            }}
          />
        </div>

        {/* Brand Grid */}
        <Row xs={3} sm={4} md={5} lg={6} className="g-4">
          {filteredBrands.map((brand, idx) => (
            <Col key={idx} className="d-flex justify-content-center">
              <div
                className="brand-card"
                onClick={() => handleBrandClick(brand)}
              >
                <img src={brand.image} alt={brand.name} className="brand-logo" />
                <p className="brand-name">{brand.name}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Info Section */}
        <section
          style={{
            backgroundColor: "#fff",
            border: "1px solid #dee2e6",
            borderRadius: "12px",
            padding: "40px",
            textAlign: "center",
            marginTop: "60px",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px" }}>
            Smart Watch Repair & Replacement Services
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "16px",
            }}
          >
            Smart watches keep you connected on the go — from health tracking to instant
            notifications. If your watch isn’t working properly, our expert team provides
            fast repairs, genuine replacement parts, and professional service so you can
            get back to your routine quickly.
          </p>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "30px",
              color: "#212529",
            }}
          >
            We Fix All Popular Smart Watch Brands
          </h3>
        </section>
      </Container>

      {/* Scoped CSS */}
      <style>{`
        .brand-card {
          width: 150px;
          height: 160px;
          background: #fff;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          cursor: pointer;
        }
        .brand-card:hover {
          border-color: #e60000;
          box-shadow: 0 6px 18px rgba(230, 0, 0, 0.15);
          transform: translateY(-4px);
        }
        .brand-logo {
          max-height: 60px;
          max-width: 80%;
          object-fit: contain;
        }
        .brand-name {
          margin-top: 10px;
          font-size: 14px;
          font-weight: 500;
          color: #212529;
        }
      `}</style>
    </div>
  );
};

export default WatchesRepair;
