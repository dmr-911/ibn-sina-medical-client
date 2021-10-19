import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useDoctorsList from '../../../utilities/doctorsList';
import useServicesList from '../../../utilities/servicesList';
import Service from '../../Common/Service/Service';
import Doctor from '../Doctor/Doctor';
import Slider from '../Slider/Slider';

const Home = () => {
  const { services } = useServicesList();
  const { doctors } = useDoctorsList();
    return (
      <div style={{ backgroundColor: "#394650" }} className="pb-5">
        <Slider></Slider>
        <Container id="doctors">
          <h2 className="mt-5 mb-2">
            <span className="text-white">Doctors</span>
            <span className="color-orrange"> List</span>
          </h2>
          <div className="line mx-auto mb-3"></div>
          <Row xs={1} md={2} className="g-4">
            {doctors.length &&
              doctors
                .slice(0, 6)
                .map((doctor) => (
                  <Doctor key={doctor.id} doctor={doctor}></Doctor>
                ))}
          </Row>
        </Container>
        <Container>
          <h2 className="mt-5 mb-2">
            <span className="text-white">Our </span>
            <span className="color-orrange">Services</span>
          </h2>
          <div className="line mx-auto mb-3"></div>
          <Row xs={1} md={3} className="g-3 my-5">
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