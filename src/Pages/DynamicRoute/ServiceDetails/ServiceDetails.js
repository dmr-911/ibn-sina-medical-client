import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
    
    return (
        <div>
            {service && <div>
                <h2>{service.name}</h2>
            </div>}
        </div>
    );
};

export default ServiceDetails;