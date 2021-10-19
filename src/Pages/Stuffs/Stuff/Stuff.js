import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Stuff = ({ stuff }) => {
    const { name, email, phone } = stuff;
    return (
      <Col>
        <Card className="border border-1 border-primary">
          <Card.Body>
            <Card.Title>Name : {name}</Card.Title>
            <Card.Text>Email : {email}</Card.Text>
            <Card.Text>phone : {phone}</Card.Text>
            <Button>
              Call
            </Button>{" "}
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Stuff;