// // ScrollToHash.js
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToHash() {
//   const { hash } = useLocation();

//   useEffect(() => {
//     if (hash) {
//       const element = document.querySelector(hash);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [hash]);

//   return null;
// }


// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0); // scrolls to top of the page
//   }, [pathname]);

//   return null;
// }


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth" // makes the scroll smooth
    });
  }, [pathname]);

  return null;
}
