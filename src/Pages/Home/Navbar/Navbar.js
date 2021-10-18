import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const NavbarCustom = () => {
  const { user, logOut } = useAuth();
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="#">
            IBN Sina Medical College and Hospital
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="#action3">
                  More
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about">
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {user.displayName ? (
                  <NavDropdown.Item onClick={logOut}>
                    Log Out
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item as={Link} to="/login">
                    Login
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            {user.displayName && <i>{user.displayName.toUpperCase()}</i>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavbarCustom;