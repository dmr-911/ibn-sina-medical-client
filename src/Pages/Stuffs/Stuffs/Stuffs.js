import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Stuff from '../Stuff/Stuff';

const Stuffs = () => {
    const [stuffs, setStuffs] = useState({});
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setStuffs(data));
    }, [])
    console.log(stuffs);
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
        <div className="line mx-auto mb-3"></div>
        <Row xs={1} md={3} className="g-3">
          {stuffs.length &&
            stuffs.map((stuff) => <Stuff key={stuff.id} stuff={stuff}></Stuff>)}
        </Row>
      </Container>
    );
};

export default Stuffs;