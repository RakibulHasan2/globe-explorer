import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import bg from '../images/home-bg-1.jpg'
import bg1 from '../images/home-bg-2.jpg'
import bg2 from '../images/home-bg-3.jpg'
import './Carousel.css'
const Carousels = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>

          <img
            className="d-block w-100"
            src={bg}
            alt="First slide"
          />
          <Carousel.Caption className='heading-info'>
            <h3 className='text-left'>Never Stop</h3>
            <h1 className='text-left color'>Exploring</h1>
            <p>Exploring Self is a blog about the journey toward authentic & holistic self love. It’s about seeking all of the joy, laughter and vibrancy that this world has to offer. Exploring Self is about learning to live freely, fully and without-fear. </p>
            <button className='btn btn-lg bg-success text-white'>Get Started</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg1}
            alt="Second slide"
          />

           <Carousel.Caption className='heading-second'>
            <h3 className='text-left'>Make Tour</h3>
            <h1 className='text-left color'>Amazing</h1>
            <p>Exploring Self is a blog about the journey toward authentic & holistic self love. It’s about seeking all of the joy, laughter and vibrancy that this world has to offer. Exploring Self is about learning to live freely, fully and without-fear. </p>
            <button className='btn btn-lg bg-success text-white'>Get Started</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg2}
            alt="Third slide"
          />

           <Carousel.Caption className='heading-info'>
            <h3 className='text-left'>Never Stop</h3>
            <h1 className='text-left color'>Exploring</h1>
            <p>Exploring Self is a blog about the journey toward authentic & holistic self love. It’s about seeking all of the joy, laughter and vibrancy that this world has to offer. Exploring Self is about learning to live freely, fully and without-fear. </p>
            <button className='btn btn-lg bg-success text-white'>Get Started</button>
           </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;