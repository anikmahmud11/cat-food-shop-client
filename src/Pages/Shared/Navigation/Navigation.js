import React from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

import './Navigation.css'

const Navigation = () => {
  const{user,logout}=useAuth();
    return (
        <Navbar className='p-2' collapseOnSelect expand="lg" bg="white" >
        
        <Navbar.Brand ><i style={{color:"rgba(255, 127, 80, 0.89)",fontSize:"30px",paddingRight:"5px"}} class="fas fa-cat"></i><span style={{color:"rgba(255, 127, 80, 0.89)"}}>Online Cat Food Shop</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link}  to="/shop">Shop</Nav.Link>
          </Nav>
          <Nav >
           <Link to="/login">
           <p className="p-3">Login</p>
           </Link>
{user?.email && <p onClick={logout} className="p-3 ">Logout</p>
}            <p  className="p-3">Login As: {user?.displayName}</p> 
             <div ><img className='nav-img'  src={user?.photoURL} alt="" /></div>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    );
};

export default Navigation;