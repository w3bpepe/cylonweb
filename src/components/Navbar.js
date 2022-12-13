import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import logo from "../images/logo.png"

export default function NavbarCylon() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  let toggleNavBG = showNavSecond ? ' solidBG' : null;

  return (
    <div>
      <div className='logoContainer' >
          <img src={logo} height="80px" className='logoIMG'></img>
      </div>
      <MDBNavbar expand='lg' className='cylonNav'>
      <MDBContainer fluid className={`justify-content-center ${toggleNavBG}`}>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
          className=""
        >
          <MDBIcon icon='bars' className='iconNavbar' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav className='justify-content-center'>
            <MDBNavbarLink onClick={() => setShowNavSecond(false)} href='#CYLONSECTION' className='navElement'>Cylons</MDBNavbarLink>
            <MDBNavbarLink onClick={() => setShowNavSecond(false)} href='#ABOUTSECTION' className='navElement'>About</MDBNavbarLink>
            <MDBNavbarLink onClick={() => setShowNavSecond(false)} href='#TEAMSECTION' className='navElement'>Team</MDBNavbarLink>
            <MDBNavbarLink onClick={() => setShowNavSecond(false)} href='#FAQSECTION' className='navElement'>FAQ</MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  );
}
