import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container style={{background:"transparent"}}>
        <Row>
          <Col md={6}>
            <h4>Contact Us</h4>
            <p>If you have any questions or inquiries, feel free to reach out to us at contact@example.com.</p>
          </Col>
          <Col md={3}>
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#services">Services</a></li>
              <li><a href="#search">Search</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        &copy; {new Date().getFullYear()} Legal Marketplace. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
