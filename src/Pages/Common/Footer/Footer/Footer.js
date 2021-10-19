import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Appointment from '../Appointment/Appointment';
import Contact from '../Contact/Contact';
import OtherPages from '../OtherPages/OtherPages';
import './Footer.css';

const Footer = () => {
    return (
      <div className="footer pt-5 pb-3">
        <Container>
          <Row xs={1} md={3} className="g-4">
            <Contact></Contact>
            <OtherPages></OtherPages>
            <Appointment></Appointment>
          </Row>
          <p className="mt-5"><small>All Rigths reserved by @DMR</small> </p>
        </Container>
      </div>
    );
};

export default Footer;