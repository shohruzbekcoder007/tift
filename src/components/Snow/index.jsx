import React, { useEffect, useState } from 'react';
import './Snow.css';

const Snowflakes = () => {
   const [SnowFlake, setSnowFlake] = useState([...Array(7)])
  useEffect(() => {
    const snowflakes = document.querySelectorAll('.snowflake');
    window.innerWidth > 600 && setSnowFlake([...Array(15)])
    snowflakes.forEach((snowflake) => {
      const fontSize = window.innerWidth > 600
        ? `calc(1rem + (2rem - 1rem) * ${Math.random()})`
        : `calc(.7rem + (1.3rem - .7rem) * ${Math.random()})`;

      const leftPosition = Math.random() * 100;
      const animationDuration = Math.random() * 5 + 3;
      const animationDelay = Math.random() * 3;

      snowflake.style.fontSize = fontSize;
      snowflake.style.left = `${leftPosition}%`;
      snowflake.style.animationDuration = `${animationDuration}s`;
      snowflake.style.animationDelay = `${animationDelay}s`;
    });
  }, []);

  return (
    <div className="snowflakes" aria-hidden="true">
      {SnowFlake.map((_, index) => (
        <div key={index} className="snowflake">
          <div className="inner">&#10052;</div>
        </div>
      ))}
    </div>
  );
};

export default Snowflakes;
