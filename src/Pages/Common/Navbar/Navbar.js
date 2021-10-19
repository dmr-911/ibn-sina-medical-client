import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const NavbarCustom = () => {
  const style = {
    fontWeight: "bold",
    color: "red",
  };
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/home">
            IBN Sina Medical College and Hospital
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to="/home" className="navbar-link" activeStyle={style}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services" activeStyle={style}>
                Services
              </Nav.Link>
              <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item as={NavLink} to="#action3">
                  More
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/about" activeStyle={style}>
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/login" activeStyle={style}>
                  Login
                </NavDropdown.Item>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavbarCustom;