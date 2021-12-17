import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

import './Navigation.css'

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Navbar className='p-2' collapseOnSelect expand="lg" bg="white" >

      <Navbar.Brand ><i style={{ color: "rgba(255, 127, 80, 0.89)", fontSize: "30px", paddingRight: "5px" }} class="fas fa-cat"></i><span style={{ color: "rgba(255, 127, 80, 0.89)" }}>Online Cat Food Shop</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
          {user?.email && <Nav.Link as={Link} to="/myorder">My Order</Nav.Link>}
          {user?.email && <Nav.Link as={Link} to="/review">Give Your feedback</Nav.Link>}
          <NavDropdown title="Admin" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/makeadmin">Make Admin</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav >
          <Link to="/login">
            <p className="p-3">Login</p>
          </Link>
          {user?.email && <p onClick={logout} className="p-3 ">Logout</p>
          }            <p className="p-3">Login As: {user?.displayName}</p>
          <div ><img className='nav-img' src={user?.photoURL} alt="" /></div>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
};

export default Navigation;