import { MDBCol, MDBContainer, MDBFooter, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <MDBFooter style={{backgroundColor: "rgba(255, 127, 80, 0.89)"}} className='text-white text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Cat food shop</h5>

            <p>
            One of the reasons that nutrition is so important for cats is that, as pets go, they live a long time. Currently, our cats are all over ten years old. I fully expect to have the same ten cats in ten years, maybe even fifteen. Barring accidents, all cats should live into their twenties. This means they are going to go through old age and, just like people, need to stay healthy to make the best of their senior years. Proper nutrition plays a huge role in their health.
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Links</h5>

            <ul className='list-unstyled'>
              <li>
              <Nav.Link to ="/" className="text-light">Cat food and Services</Nav.Link>
              </li>
              <li>
              <Nav.Link  to="/" className="text-light">Why Us</Nav.Link>
              </li>
              <li>
              <Nav.Link  to="/" className="text-light">News</Nav.Link>
              </li>
              <li>
              <Nav.Link  to="/" className="text-light">About Us</Nav.Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <Navbar.Brand  to="/home" className="text-light">Cat Food Shop</Navbar.Brand>
      </div>
    </MDBFooter>
    );
};

export default Footer;