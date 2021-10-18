import React from 'react';
import './Doctor.css';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
    const { picture, name, email, phone, id } = doctor;
    return (
      <Col>
        <Card>
          <Card.Img variant="top" src={picture} height="300px" />
          <Card.Body>
            <Card.Title>Name : {name}</Card.Title>
            <Card.Text>Email : {email}</Card.Text>
            <Card.Text>phone : {phone}</Card.Text>
            <Button as={Link} variant="primary" to={`/doctor/${id}`}>Get Appointment</Button>{" "}
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Doctor;