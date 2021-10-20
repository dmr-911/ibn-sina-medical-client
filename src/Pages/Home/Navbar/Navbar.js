import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import { HashLink } from "react-router-hash-link";
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const login = <FontAwesomeIcon icon={faSignInAlt} />;

const NavbarCustom = () => {
  const { user, logOut } = useAuth();
    return (
      <Navbar className="custom-nav-bg sticky-top" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/home" className="text-info fs-3">
            IBN-Sina Hospital
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                as={NavLink}
                className="text-white"
                to="/home"
                activeStyle={{
                  fontWeight: "bold",
                  fontSize: "1.1rem"
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/doctors"
                className="text-white"
                activeStyle={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                Doctors
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/stuffs"
                className="text-white"
                activeStyle={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                Stuffs
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/services"
                className="text-white"
                activeStyle={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                className="text-white"
                activeStyle={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                About Us
              </Nav.Link>
            </Nav>
            {user.email ? (
              <>
                <span>
                  <i>{user?.displayName?.toUpperCase() || user.email}</i>
                </span>
                <button
                  className="btn-logout btn-danger rounded"
                  onClick={logOut}
                >
                  LogOut
                </button>
              </>
            ) : (
              <Nav.Link as={HashLink} to="/login" className="text-white">
                <p>
                  {login} <i>Login</i>
                </p>
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavbarCustom;