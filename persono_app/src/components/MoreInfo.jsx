import React, { useState, useEffect, useRef } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './MoreInfo.css';
import AboutUs from './AboutUs';
import CommonQuestions from "./CommonQuestions";
import Reviews from "./Reviews";

const MoreInfo = () => {
  const [carouselHeight] = useState(0);
  const carouselRef = useRef(null);

  const mainSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
  };

  return (
    <div className="more-info-carousel" style={{ height: `${carouselHeight}px` }} ref={carouselRef}>
      <Slider {...mainSettings}>
        <div className="slide-container">
          <h2>About Us</h2>
          <AboutUs />
        </div>
        <div className="slide-container">
          <h2>Common Questions</h2>
          <CommonQuestions />
        </div>
        <div className="slide-container">
          <h2>Reviews</h2>
          <Reviews />
        </div>
      </Slider>
    </div>
  );
};

export default MoreInfo;
