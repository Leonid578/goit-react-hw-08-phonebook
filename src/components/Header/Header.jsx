import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import style from './Header.style.css';
import { Container } from '../GlobalStyled.styled';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const auth = useSelector(state => state.auth);

  return (
    <>
      <Navbar collectonselect="true" expand="lg" bg="dark" variant="dark">
        <div className={Container}>
          <Navbar.Brand>Phonebook</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/" className="link">
                Home
              </NavLink>

              {auth !== '' && (
                <NavLink to="/contacts" className="link">
                  Contacts
                </NavLink>
              )}
            </Nav>
            <Nav className="button">
              {auth === '' ? (
                <>
                  <Button variant="primary" className="me-2">
                    <NavLink to="/register" className="button">
                      Registration
                    </NavLink>
                  </Button>
                  <Button variant="primary" className="me-2">
                    <NavLink to="/login" className="button">
                      Login
                    </NavLink>
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
