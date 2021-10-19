import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
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
          history.go(-1);
        };
    
    return (
      <div>
        {service && (
          <Card
            className="mx-auto my-5"
            style={{ width: "18rem", backgroundColor: "#394650", color: "white"}}
          >
            <Card.Img variant="top" src={service.picture} />
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>{service.details}</Card.Text>
              <Button variant="primary" onClick={onHandleBack}>
                Go Back
              </Button>
            </Card.Body>
          </Card>
        )}
      </div>
    );
};

export default ServiceDetails;