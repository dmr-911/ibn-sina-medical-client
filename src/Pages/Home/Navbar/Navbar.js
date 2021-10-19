import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import { HashLink } from "react-router-hash-link";
import './Navbar.css';

const NavbarCustom = () => {
  const { user, logOut } = useAuth();
    return (
      <Navbar className="custom-nav-bg" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/home" className="text-info fw-bold fs-3">
            IBN-Sina Hospital
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                as={NavLink}
                to="/home"
                className="text-white"
                activeStyle={{ color: "red" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/doctors"
                className="text-white"
                activeStyle={{ color: "red" }}
              >
                Doctors
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/stuffs"
                className="text-white"
                activeStyle={{ color: "red" }}
              >
                Stuffs
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/services"
                className="text-white"
                activeStyle={{ color: "red" }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                className="text-white"
                activeStyle={{ color: "red" }}
              >
                About Us
              </Nav.Link>
            </Nav>
            {user.displayName ? (
              <>
                <i>{user.displayName.toUpperCase()}</i>{" "}
                <button
                  className="btn-logout btn-danger rounded"
                  onClick={logOut}
                >
                  LogOut
                </button>
              </>
            ) : (
              <Nav.Link as={HashLink} to="/login" className="text-white">
                <b>Login</b>
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavbarCustom;