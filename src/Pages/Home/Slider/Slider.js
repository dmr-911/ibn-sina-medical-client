import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/slider/slider-1.png';
import img3 from '../../../images/slider/slider-3.png';
import './Slider.css';

const Slider = () => {
    return (
      <Carousel fade>
        <Carousel.Item id="slider">
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>Patient Is Our first Priority</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Feel the Life better as it is!</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Slider;