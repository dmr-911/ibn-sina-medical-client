import { useEffect, useState } from 'react';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
        const [services, setService] = useState({});
        useEffect(() => {
          fetch("/services.json")
            .then((res) => res.json())
            .then((data) => setService(data));
        }, []);
    let service;
    if (services.length) {
         service = services?.find(service => service.id === serviceId);
    }
    
        const history = useHistory();
        const onHandleBack = () => {
          history.push('/home');
        };
    
    return (
      <div>
        {service && (
          <Container fluid>
            <Row xs={1} md={2} className="g-4">
              <Col className="my-5 mx-auto">
                <Card
                  style={{
                    backgroundColor: "#394650",
                    color: "white",
                  }}
                >
                  <Card.Img variant="top" src={service.picture} />
                  <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
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
        )}
      </div>
    );
};

export default ServiceDetails;