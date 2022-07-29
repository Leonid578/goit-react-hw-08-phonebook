import React from 'react';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (
  // <Container fluid style={{ backgroundColor: '#212529', color: '#fff', }} >
  //     <Container style={{  display: 'flex', justifyContent: 'center', padding: '10px' }} >
  //         <p>Contacts</p>
  //     </Container>
  // </Container>

  <Card.Footer
    className="text-muted mt-auto"
    style={{ backgroundColor: '#212529', color: '#fff' }}
  >
    <Container
      style={{ display: 'flex', justifyContent: 'center', padding: '10px'}}
    >
      Contacts
    </Container>
  </Card.Footer>
);

export default Footer;
