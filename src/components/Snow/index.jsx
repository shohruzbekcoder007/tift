import React, { useEffect } from 'react';
import './Snow.css'; // Create a CSS file for styling

const Snow = () => {
//   useEffect(() => {
//     // Function to create snowflakes
//     const createSnowflake = () => {
//       const snowflake = document.createElement('div');
//       snowflake.className = 'snowflake';
//       snowflake.style.left = `${Math.random() * window.innerWidth}px`;
//       document.body.appendChild(snowflake);

//       // Animate snowflake
//       snowflake.animate(
//         [
//           { transform: 'translateY(-100vh)' },
//           { transform: 'translateY(100vh)' },
//         ],
//         {
//           duration: Math.random() * 3000 + 3000, // Random duration between 3-6 seconds
//           iterations: Infinity,
//           easing: 'linear',
//         }
//       );
//     };

//     // Create initial snowflakes
//     for (let i = 0; i < 50; i++) {
//       createSnowflake();
//     }

//     // Create new snowflake every 200 milliseconds
//     const snowfallInterval = setInterval(createSnowflake, 200);

//     // Cleanup on component unmount
//     return () => clearInterval(snowfallInterval);
//   }, []);

  return <div class="snowflakes" aria-hidden="true">
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
  <div class="snowflake">
    <div class="inner">❅</div>
  </div>
</div>; // Empty fragment, as this component doesn't render any visible content
};

export default Snow;
