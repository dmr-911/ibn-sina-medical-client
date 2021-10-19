import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const OtherPages = () => {
    return (
      <div>
        <h2>Make other pages</h2>
        <div className="line mb-3 mx-auto"></div>
        <Nav.Link
          as={NavLink}
          to="/home"
          className="color-orrange"
          activeStyle={{ color: "white" }}
        >
          Home
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to="/services"
          className="color-orrange"
          activeStyle={{ color: "white" }}
        >
          Services
        </Nav.Link>
        <Nav.Link
          as={NavLink}
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