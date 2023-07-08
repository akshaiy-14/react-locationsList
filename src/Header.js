import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = (props) => {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand>{props.title}</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
  )
}

Header.defaultProps = {
    title: "Travel Diary"
}

export default Header