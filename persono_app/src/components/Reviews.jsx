import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Reviews.css';

const reviews = [
  { id: 1, content: "Review 1: Lorem ipsum dolor sit amet." },
  { id: 2, content: "Review 2: Consectetur adipiscing elit." },
  { id: 3, content: "Review 3: Sed do eiusmod tempor incididunt ut labore." }
];

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="reviews-carousel">
      <Slider {...settings}>
        {reviews.map(review => (
          <div key={review.id}>
            <p>{review.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
