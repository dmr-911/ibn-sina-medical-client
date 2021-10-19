import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from "react-router-hash-link";

const OtherPages = () => {
    return (
      <div>
        <h2>Make other pages</h2>
        <div className="line mb-3 mx-auto"></div>
        <Nav.Link
          as={HashLink}
          to="/home"
          className="color-orrange"
          activeStyle={{ color: "white" }}
        >
          Home
        </Nav.Link>
        <Nav.Link
          as={HashLink}
          to="/home#doctors"
          className="color-orrange"
          activeStyle={{ color: "white" }}
        >
          Doctors
        </Nav.Link>
        <Nav.Link
          as={HashLink}
          to="/home#services"
          className="color-orrange"
          activeStyle={{ color: "white" }}
        >
          Services
        </Nav.Link>
        <Nav.Link
          as={HashLink}
          className="color-orrange"
          to="/about"
          activeStyle={{ color: "white" }}
        >
          About Us
        </Nav.Link>
      </div>
    );
};

export default OtherPages;