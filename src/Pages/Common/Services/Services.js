import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServicesList from '../../../utilities/servicesList';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useServicesList();

    return (
      <Container>
          <h2 className="my-5">Our Services</h2>
        <Row xs={1} md={2} className="g-4 mb-5">
            {
                    services.length && services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
            }
        </Row>
      </Container>
    );
};

export default Services;