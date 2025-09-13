// import React from 'react';

// import img3 from '../assets/image/img-3.jpeg'; 

// const HeroSection = () => {
//   return ( 
//     <div className="hero-wrapper">
//       <div className="hero-box">
//         <div className="hero-left">
//           <h1>Best Mobile Rapair Service Center <br /> in Bangalore</h1>
//           <p>Caring for your Mac!</p>
//           <button className="repair-btn">FIX MY DEVICE</button>
//         </div>
//         <div className="hero-right">
//           <img src={img3} alt="Apple Service Center" className="hero-img" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


/******************************************************************************* */


// import React from 'react';
// import { Container, Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import slide1 from '../../src/assets/slider/s1.jpg';
// import slide2 from '../../src/assets/slider/s2.jpg';
// import slide3 from '../../src/assets/slider/s3.jpg';

// // Images array for the carousel
// const images = [
//   {
//     src: slide1,
//     alt: 'Expert Mobile Repairs',
//     caption: 'Expert Repairs for All Devices'
//   },
//   {
//     src: slide2,
//     alt: 'Reliable Mobile Service',
//     caption: 'Fast and Reliable Service'
//   },
//   {
//     src: slide3,
//     alt: 'Trusted Repair Quality',
//     caption: 'Trusted by Thousands'
//   }
// ];

// const HeroSection = () => {
//   return (
//     <div className="hero-wrapper bg-gray-50 py-4 py-md-5">
//       <Container fluid="lg">
//         <Carousel
//           interval={4000}
//           pause="hover"
//           className="shadow-sm rounded-3 overflow-hidden"
//           prevIcon={
//             <span className="carousel-control-prev-icon bg-dark bg-opacity-50 rounded-circle" />
//           }
//           nextIcon={
//             <span className="carousel-control-next-icon bg-dark bg-opacity-50 rounded-circle" />
//           }
//         >
//           {images.map((image, index) => (
//             <Carousel.Item key={index}>
//               <img
//                 className="d-block w-100"
//                 src={image.src}
//                 alt={image.alt}
//                 style={{
//                   height: 'clamp(300px, 60vw, 500px)',
//                   objectFit: 'cover'
//                 }}
//               />
//               <Carousel.Caption className="bg-dark bg-opacity-50 py-2 rounded">
//                 <h4 className="text-white fw-semibold mb-0">{image.caption}</h4>
//               </Carousel.Caption>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </Container>
//     </div>
//   );
// };

// export default HeroSection;
/******************************************************************************* */

// import React from 'react';
// import { Carousel, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import slide1 from '../../src/assets/slider/s1.jpg';
// import slide2 from '../../src/assets/slider/s2.jpg';
// import slide3 from '../../src/assets/slider/s3.jpg';

// const images = [
//   {
//     src: slide1,
//     alt: 'Expert Mobile Repairs',
//     caption: 'Expert Repairs for All Devices',
//     buttonText: 'Fix My Device Now'
//   },
//   {
//     src: slide2,
//     alt: 'Reliable Mobile Service',
//     caption: 'Fast and Reliable Service',
//     buttonText: 'Get Quick Repairs'
//   },
//   {
//     src: slide3,
//     alt: 'Trusted Repair Quality',
//     caption: 'Trusted by Thousands',
//     buttonText: 'Book Your Repair'
//   }
// ];

// const HeroSection = () => {
//   return (
//     <div className="hero-wrapper">
//       <Carousel
//         interval={4000}
//         pause="hover"
//         className="shadow-sm"
//         prevIcon={<span className="carousel-control-prev-icon bg-dark bg-opacity-50 rounded-circle p-3" />}
//         nextIcon={<span className="carousel-control-next-icon bg-dark bg-opacity-50 rounded-circle p-3" />}
//         style={{ height: '60vh', width: '90%' }} // Increased height
//       >
//         {images.map((image, index) => (
//           <Carousel.Item key={index}>
//             <img
//               className="d-block w-100"
//               src={image.src}
//               alt={image.alt}
//               style={{
//                 height: '60vh', // Increased height
//                 objectFit: 'cover',
//                 objectPosition: 'center',
//                 filter: 'brightness(0.75)' // Slightly darker for text contrast
//               }}
//             />
//             <Carousel.Caption
//               className="d-flex flex-column justify-content-center align-items-start h-100 px-5"
//               style={{ top: 0, bottom: 0 }} // Center vertically
//             >
//               <h2
//                 className="text-white fw-bold mb-4"
//                 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
//               >
//                 {image.caption}
//               </h2>
//               <Button
//                 variant="primary"
//                 size="lg"
//                 className="fw-semibold px-4 py-3 rounded-pill text-uppercase"
//                 style={{ backgroundColor: '#ff3b30', borderColor: '#ff3b30', boxShadow: '2px 2px 10px rgba(0,0,0,0.4)' }}
//               >
//                 {image.buttonText}
//               </Button>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default HeroSection;

import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from '../../src/assets/slider/s1.jpg';
import slide2 from '../../src/assets/slider/s2.jpg';
import slide3 from '../../src/assets/slider/s3.jpg';

// Corrected images array with direct references to imported images
const images = [
  {
    src: slide1, // Directly use the imported variable
    alt: 'Expert Mobile Repairs',
    caption: 'Expert Repairs for All Devices' // Fixed typo
  },
  {
    src: slide2,
    alt: 'Reliable Mobile Service',
    caption: 'Fast and Reliable Service'
  },
  {
    src: slide3,
    alt: 'Trusted Repair Quality',
    caption: 'Trusted by Thousands'
  }
];

const HeroSection = () => {
  return (
    <div className="hero-wrapper bg-gray-50 py-4 py-md-5">
      <Container fluid="lg">
        <Row className="align-items-center gx-4">
          {/* Right Section - Carousel */}
          <Col xs={12} md={12}>
            <Carousel
              interval={4000}
              pause="hover"
              className="shadow-sm  overflow-hidden"
              prevIcon={
                <span className="carousel-control-prev-icon bg-dark bg-opacity-50 rounded-circle" />
              }
              nextIcon={
                <span className="carousel-control-next-icon bg-dark bg-opacity-50 rounded-circle" />
              }
            >
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image.src}
                    alt={image.alt}
                    style={{
                      height: 'clamp(250px, 50vw, 400px)',
                      objectFit: 'cover'
                    }}
                  />
                  <Carousel.Caption className="bg-dark bg-opacity-50 py-2 ">
                    <h4 className="text-white fw-semibold mb-0">{image.caption}</h4>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;

