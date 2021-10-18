import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import img1 from '../../../images/slider/slider-1.png';
import img2 from '../../../images/slider/slider-2.png';
import img3 from '../../../images/slider/slider-3.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
    const medical = <FontAwesomeIcon icon={faNotesMedical} />
    return (
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <div>
              {medical}
              <div>
                <h2>Appointment</h2>
                <p>
                  Appointment are available, call us today or book a appoinment
                </p>
                <Button variant="info">Info</Button>{" "}
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Slider;