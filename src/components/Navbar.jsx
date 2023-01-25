import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form'

function Navb() {
  return (
    <Navbar style={{ backgroundColor: "#feee00" }} expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img style={{ width: "6rem" }} src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav style={{ marginLeft: "2rem", marginRight: "2rem" }}>
            <Nav.Link style={{ fontSize: "0.9rem" }} className='fw-bold' href="/">Deliver To Dubai</Nav.Link>
          </Nav>
          <Form >
            <Form.Control
              style={{ width: "650%", borderColor: "transparent" }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', marginLeft: "68%" }}
            navbarScroll
          >
            <Nav.Link href="/">العربية</Nav.Link>
            <Nav.Link className='fw-bold' href="/">SignIn</Nav.Link>
            <Nav.Link className='fw-bold' href="/">Cart</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navb