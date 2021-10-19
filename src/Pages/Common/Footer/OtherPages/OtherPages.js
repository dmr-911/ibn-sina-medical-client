import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from "react-router-hash-link";

const OtherPages = () => {
    return (
      <div>
        <h2>Extras</h2>
        <div className="line mb-3 mx-auto"></div>
        <Nav.Link
          as={HashLink}
          to="/home#home"
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
          to="/home#home-services"
          className="color-orrange"
          activeStyle={{ color: "white" }}
        >
          Services
        </Nav.Link>
        <Nav.Link
          as={HashLink}
          to="/stuffs#stuffs"
          className="color-orrange"
          activeStyle={{ color: "white" }}
        >
          Stuffs
        </Nav.Link>
        <Nav.Link
          as={HashLink}
          className="color-orrange"
          to="/about#about"
          activeStyle={{ color: "white" }}
        >
          About Us
        </Nav.Link>
      </div>
    );
};

export default OtherPages;