import React from 'react';

const Gallery = () => (
  <section className="container py-5">
    <h2 className="text-center mb-4">Our Work Gallery</h2>
    <div className="row g-3">
      {[1,2,3,4,5,6].map(i => (
        <div key={i} className="col-sm‑6 col-md‑4">
          <img src={`https://source.unsplash.com/400x400/?phone,repair,${i}`} alt="Repair work" className="img-fluid rounded shadow"/>
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
