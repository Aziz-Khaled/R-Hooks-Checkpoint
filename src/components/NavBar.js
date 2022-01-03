import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import NetflixLogo from '../NetflixLogo.png'

function NavBar() {
    return (
        <div>
              <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand  href="#home"> <img className =' NetflixLogo' src ={NetflixLogo} alt ='Logo' /></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default NavBar
