import React from 'react';
import classes from './aboutUs.css';


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About Our News Company</h2>
      <img
        src="https://imgs.search.brave.com/POePnUYNR4IVbndp76eFBCdg1SrabLUoOZg3ej8Ygqg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzU0LzA0LzM3/LzM2MF9GXzI1NDA0/MzczNl9uQ0FNTFNY/Y3Iya2VYc2JiclQ2/NHoxVndlcUV2YWZC/RC5qcGc"L
        alt="Company Logo"
        className="company-logo"
      />
      <p>
        Welcome to our news company! We strive to provide timely and accurate news to our readers.
      </p>
      <p>
        Our team of dedicated journalists works hard to cover a wide range of topics and deliver
        insightful stories to our audience.
      </p>
      <p>
        Stay tuned for the latest updates and breaking news from around the world.
      </p>
    </div>
  );
};

export default AboutUs;