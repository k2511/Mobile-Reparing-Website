import React from 'react';

import img3 from '../assets/image/img-3.jpeg'; 

const HeroSection = () => {
  return ( 
    <div className="hero-wrapper">
      <div className="hero-box">
        <div className="hero-left">
          <h1>Best Apple Service Center <br /> in Bangalore</h1>
          <p>Caring for your Mac!</p>
          <button className="repair-btn">FIX MY DEVICE</button>
        </div>
        <div className="hero-right">
          <img src={img3} alt="Apple Service Center" className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
