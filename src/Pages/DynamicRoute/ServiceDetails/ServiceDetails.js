import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Details for service no. {serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;