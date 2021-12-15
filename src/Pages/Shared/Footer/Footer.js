import { MDBCol, MDBContainer, MDBFooter, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <MDBFooter style={{backgroundColor: "rgba(255, 127, 80, 0.89)"}} className='text-white text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Aged HealthCare</h5>

            <p>
            The Health Resources and Services Administration (HRSA) and the Centers for Medicare and Medicaid Services (CMS) must strategically plan for and support the creation of a robust, qualified workforce across settings through a coordinated interdisciplinary approach that includes scholarships, loan forgiveness, and clinical internships, as well as efforts to train professionals and direct care workers who are already in the workforce.
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Links</h5>

            <ul className='list-unstyled'>
              <li>
              <Nav.Link to ="/home#services" className="text-light">Aged Care and Services</Nav.Link>
              </li>
              <li>
              <Nav.Link  to="/whyus" className="text-light">Why Us</Nav.Link>
              </li>
              <li>
              <Nav.Link  to="/news" className="text-light">News</Nav.Link>
              </li>
              <li>
              <Nav.Link  to="/aboutus" className="text-light">About Us</Nav.Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <Navbar.Brand  to="/home" className="text-light">Aged HealthCare</Navbar.Brand>
      </div>
    </MDBFooter>
    );
};

export default Footer;