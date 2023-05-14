import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import pic from '../../../Assets/testimonial-1-2.jpg'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={pic}  alt='pic1' onDragStart={handleDragStart} role="presentation1" />,
  <img src={pic} alt='pic2' onDragStart={handleDragStart} role="presentation2" />,
  <img  src={pic} alt='pic3' onDragStart={handleDragStart} role="presentation3" />,
];

const SlideVest = () => {
  return (
    <AliceCarousel mouseTracking items={items}>
        <img mouseTracking items={items} src={pic} alt='pic4'  onDragStart={handleDragStart} role="presentation4"/>
        <img  mouseTracking items={items} src={pic} alt='pic5' onDragStart={handleDragStart} role="presentation5"/>
        <img  mouseTracking items={items} src={pic} alt='pic6' onDragStart={handleDragStart} role="presentation6"/>
    </AliceCarousel>
  );
};

export default SlideVest;