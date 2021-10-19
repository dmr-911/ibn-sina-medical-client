import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useDoctorsList from '../../../utilities/doctorsList';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const { doctors } = useDoctorsList();
    return (
        <Container id="doctors">
            <h2 className="my-5">Doctors List</h2>
        <Row xs={1} md={2} className="g-4">
          {doctors.length &&
            doctors.slice(0, 6).map((doctor) => <Doctor key={doctor.id} doctor={doctor}></Doctor>)}
        </Row>
      </Container>
    );
};

export default Doctors;