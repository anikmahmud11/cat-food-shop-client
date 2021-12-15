import React from 'react';
import {  Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar className='p-2' collapseOnSelect expand="lg" bg="white" >
        
        <Navbar.Brand href="#home"><i style={{color:"rgba(255, 127, 80, 0.89)",fontSize:"30px",paddingRight:"5px"}} class="fas fa-cat"></i><span style={{color:"rgba(255, 127, 80, 0.89)"}}>Online Cat Food Shop</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Shop</Nav.Link>
          </Nav>
          <Nav >
            <p className="p-3">Login</p>
            <p  className="p-3">Login As:</p> 
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    );
};

export default Navigation;