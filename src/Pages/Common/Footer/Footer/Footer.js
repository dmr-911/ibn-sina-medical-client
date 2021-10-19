import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Appointment from '../Appointment/Appointment';
import Contact from '../Contact/Contact';
import OtherPages from '../OtherPages/OtherPages';
import './Footer.css';

const Footer = () => {
    return (
      <div className="footer p-5">
        <Container>
          <Row xs={1} md={3} className="g-4">
            <Contact></Contact>
            <OtherPages></OtherPages>
            <Appointment></Appointment>
          </Row>
        </Container>
      </div>
    );
};

export default Footer;