import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useDoctorsList from '../../../utilities/doctorsList';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const { doctors } = useDoctorsList();
    return (
      <Container
        id="doctors"
        style={{ backgroundColor: "#394650" }}
        className="px-4 py-3 my-2 rounded"
      >
        <h2 className="mt-2 mb-2">
          <span className="text-white">Doctors</span>
          <span className="color-orrange"> List</span>
        </h2>
        <div className="line rounded mx-auto mb-3"></div>
        <Row xs={1} md={2} className="g-4">
          {doctors.length ? (
            doctors.map((doctor) => (
              <Doctor key={doctor.id} doctor={doctor}></Doctor>
            ))
          ) : (
            <Spinner className="mx-auto my-5" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Row>
      </Container>
    );
};

export default Doctors;