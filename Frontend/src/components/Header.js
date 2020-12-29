import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>I-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/phone'><i className="fas fa-phone"></i> Phone</Nav.Link>
              <Nav.Link href='/favorites'><i className="fas fa-heart"></i> Favorites</Nav.Link>
              <Nav.Link href='/cart'><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
              <Nav.Link href='/login'><i className="fas fa-user"></i> Sign in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
