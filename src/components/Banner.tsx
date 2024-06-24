import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Banner.css';
import banner from '../assets/images/banner-1.jpg';
const Banner: React.FC = () => {
  return (
    <div className="container-fluid banner pb-5 wow zoomInDown" data-wow-delay="0.1s">
      <div className="container pb-5">
        <div className="banner-item rounded">
          <img src={banner} className="img-fluid rounded w-100" alt="banner" />
          <div className="banner-content">
            <h2 className="text-primary">Rent Your Car</h2>
            <h1 className="text-white">Interested in Renting?</h1>
            <p className="text-white">Don't hesitate and send us a message.</p>
            <div className="banner-btn">
              <a href="/" className="btn btn-secondary rounded-pill py-3 px-4 px-md-5 me-2">WhatsApp</a>
              <a href="/" className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
