import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServicesList from '../../../utilities/servicesList';
import Service from '../../Common/Service/Service';
import Doctors from '../Doctors/Doctors';
import Slider from '../Slider/Slider';

const Home = () => {
    const { services } = useServicesList();
    return (
      <div>
        <Slider></Slider>
        <Doctors></Doctors>
        <Container>
          <h2 className="mt-5">Our Services</h2>
          <Row md={3} className="g-3 my-5">
            {services.length &&
              services
                .slice(0, 6)
                .map((service) => (
                  <Service key={service.id} service={service}></Service>
                ))}
          </Row>
        </Container>
      </div>
    );
};

export default Home;