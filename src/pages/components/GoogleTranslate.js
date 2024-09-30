// import React, { useEffect } from 'react';

// const GoogleTranslate = () => {
//     useEffect(() => {
//         const addGoogleTranslateStyles = () => {
//             const style = document.createElement('style');
//             style.innerHTML = `
//         #google_translate_element {
//             display: inline-block;
//             padding: 8px;
//             border: 1px solid #d1d5db;
//             border-radius: 6px;
//             background-color: #ffffff;
//             box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
//             font-size: 0.875rem;
//         }
//         .goog-te-menu-frame {
//             border: 1px solid #d1d5db;
//             box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
//         }
//         .goog-te-menu2 {
//             font-size: 0.875rem;
//             line-height: 1.25rem;
//         }
//         .goog-te-menu2-item {
//             padding: 6px 10px;
//             border-bottom: 1px solid #e5e7eb;
//         }
//         .goog-te-menu2-item:hover {
//             background-color: #f3f4f6;
//             color: #1f2937;
//         }
//         .goog-te-menu2-item:last-child {
//             border-bottom: none;
//         }
//       `;
//             document.head.appendChild(style);
//         };

//         if (window.google && window.google.translate) {
//             addGoogleTranslateStyles();
//         } else {
//             const interval = setInterval(() => {
//                 if (window.google && window.google.translate) {
//                     clearInterval(interval);
//                     addGoogleTranslateStyles();
//                 }
//             }, 100);
//         }
//     }, []);

//     return <div id="google_translate_element"></div>;
// };

// export default GoogleTranslate;
