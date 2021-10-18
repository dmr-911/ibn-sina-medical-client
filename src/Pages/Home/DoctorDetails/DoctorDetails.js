import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
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
        history.go(-1);
    }

    return (
      <div>
        {doctors.length && (
          <div>
            <Card className="mx-auto my-5" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={doctor.picture} />
              <Card.Body>
                <Card.Title>{doctor.name}</Card.Title>
                <Card.Text>
                                Email : {doctor.email}
                                <br />
                                Phone : {doctor.phone}
                </Card.Text>
                <Button variant="primary" onClick={onHandleBack}>Go Back</Button>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    );
};

export default DoctorDetails;