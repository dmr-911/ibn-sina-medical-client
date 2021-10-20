import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Stuff from '../Stuff/Stuff';

const Stuffs = () => {
    const [stuffs, setStuffs] = useState({});
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setStuffs(data));
    }, [])
  
    return (
      <Container
        id="stuffs"
        style={{ backgroundColor: "#394650" }}
        className="px-4 py-3 my-2 rounded"
      >
        <h2 className="mt-2 mb-2">
          <span className="text-white">Medical </span>
          <span className="color-orrange">Stuffs</span>
        </h2>
        <div className="line rounded mx-auto mb-3"></div>
        <Row xs={1} md={3} className="g-3">
          {stuffs.length ?
            stuffs.map((stuff) => <Stuff key={stuff.id} stuff={stuff}></Stuff>)
            :
          <Spinner className="mx-auto my-5" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          }
        </Row>
      </Container>
    );
};

export default Stuffs;