import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import style from './Header.style.css';
import { container } from '../GlobalStyled.styled';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const auth = useSelector(state => state.auth);

  return (
    <>
      <Navbar collectOnselect="true" expand="lg" bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand>Phonebook</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <NavLink to="/">Home</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/contacts">Contacts</NavLink>
              </Nav.Link>
            </Nav>
            <Nav className="button">
              {auth === '' ? (
                <>
                  <Button variant="primary" className="me-2">
                    <Nav.Link><NavLink to="/register">Registration</NavLink></Nav.Link>
                  </Button>
                  <Button variant="primary" className="me-2">
                    <Nav.Link> <NavLink to="/login">Login</NavLink></Nav.Link>
                  </Button>
                </>
              ) : (
                <Button variant="primary">
                  <Nav.Link>Logout</Nav.Link>
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
