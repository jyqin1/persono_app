import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';
import './MoreInfo.css'; 
import AboutUs from './AboutUs';
import CommonQuestions from "./CommonQuestions";
import Reviews from "./Reviews";

const reviews = [
  { id: 1, content: "Review 1: Lorem ipsum dolor sit amet." },
  { id: 2, content: "Review 2: Consectetur adipiscing elit." },
  { id: 3, content: "Review 3: Sed do eiusmod tempor incididunt ut labore." }
];

const MoreInfo = () => {
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
    <div className="more-info-carousel">
      <Slider {...mainSettings}>
        <div>
          <h2>About Us</h2>
          <AboutUs />
        </div>
        <div>
          <h2>Common Questions</h2>
          <CommonQuestions />
        </div>
        <div>
          <h2>Reviews</h2>
          <Reviews />
        </div>
      </Slider>
    </div>
  );
};

export default MoreInfo;
