import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const DoctorDetails = () => {
    const { doctorId } = useParams();
    const [doctors, setDoctors] = useState({});
    useEffect(() => {
        fetch("/doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    let doctor;
    if (doctors.length) {
        doctor = doctors?.find(dt => dt.id === doctorId);
    };
    const history = useHistory();
    const onHandleBack = () => {
        history.push('/home');
    }

    return (
      <div>
        {doctors.length && (
          <div>
            <h3 className="mt-3">
              Your appoinment with{" "}
              <span className="color-orrange">Dr. {doctor.name}</span> is
              processing! Keep Patience, Thank You.
            </h3>
            <Container fluid>
              <Row xs={1} md={2} className="g-4">
                <Col className="my-5 mx-auto">
                  <Card
                    style={{
                      backgroundColor: "#394650",
                      color: "white",
                    }}
                  >
                    <Card.Img variant="top" src={doctor.picture} />
                    <Card.Body>
                      <Card.Title>{doctor.name}</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                      <Button onClick={onHandleBack}>Go Home</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
    );
};

export default DoctorDetails;