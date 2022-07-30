import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import style from './Header.style.css';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../GlobalStyled.styled';
import { useUnLoginUserMutation } from 'server/contacts';
import { newToken } from 'redux/sliceToken';
import { isAuth } from 'redux/sliceAuth';

const Header = () => {
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const [unloginUser] = useUnLoginUserMutation();

  return (
    <>
      <Navbar collectonselect="true" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Phonebook</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <NavLink to="/" className="link">
                  Home
                </NavLink>
              </Nav.Link>

              {auth !== '' ? (
              <Nav.Link>
                <NavLink to="/contacts" className="link">
                  Contacts
                </NavLink>
              </Nav.Link>
              ) : (
                <div></div>
              )}
            </Nav>

            <Nav className="button">
              {auth === '' ? (
                <>
                  <NavLink to="/register" className="button">
                    <Button variant="primary" className="me-2">
                      Registration
                    </Button>
                  </NavLink>
                  <NavLink to="/login" className="button">
                    <Button variant="primary" className="me-2">
                      Login
                    </Button>
                  </NavLink>
                </>
              ) : (
                <>
                  {auth ?? <div>{auth}</div>}
                  <Nav.Link>
                    <Button
                        className={style.button}
                        variant="primary"
                        onClick={() => {
                        unloginUser();
                        dispatch(newToken(''));
                        dispatch(isAuth(''));
                      }}
                    >
                      Logout
                    </Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
