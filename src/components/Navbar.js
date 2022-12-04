import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import logo from "../images/logo.png"
import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function NavbarCylon() {
  return (

        <>
            <MDBContainer className='navContainer'>
                <img
                  src={logo}
                  height='100'
                  alt=''
                  loading='lazy'
                  className='logo'
                />
            </MDBContainer>


        </>
  );
}

export default NavbarCylon;