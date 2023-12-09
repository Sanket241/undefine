import Button from 'react-bootstrap/Button';
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
<>
<h1>hello</h1>
<Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            {/* <NavLink to="#pricing">Pricing</NavLink> */}
          </Nav>
          <Button variant="outline-primary">Primary</Button>
        </Container>
      </Navbar>

</>
    )
}

export default Navbar