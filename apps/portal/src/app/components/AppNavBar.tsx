import React from 'react'
import Navbar from 'react-bootstrap-v5/lib/Navbar'
import Nav from 'react-bootstrap-v5/lib/Nav'
import NavDropdown from 'react-bootstrap-v5/lib/NavDropdown'
import Container from 'react-bootstrap-v5/lib/Container'

function authLinks(user: boolean) {
  return user ? (
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
  ) : (
    <Nav className="">
    <Nav.Link href="#link">Login</Nav.Link>
    <Nav.Link href="#link">Register</Nav.Link>
    </Nav>
  )
}

const AppNavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            {authLinks(false)}
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavBar
