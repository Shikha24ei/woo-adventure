
import React from 'react';
import Slider from 'react-slick';

const SlickCarousel = ({ settings,itemsToShow,children }) => {

  return (
    <Slider {...settings}  slidesToShow={itemsToShow}>
      {children}
    </Slider>
  );
};

export default SlickCarousel;