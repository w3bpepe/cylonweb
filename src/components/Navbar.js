import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import logo from "../images/logo.png"

export default function NavbarCylon() {

  return (
    <>
      <div className='logoContainer'>
        <img src={logo} height="80px" className='logoIMG'></img>
      </div>
      <div expand='lg' className='cylonNav'>
            <div className='justify-content-center navContent'>
                <a href='#CYLONSECTION' className='navElement'>Cylons</a>
                <a href='#ABOUTSECTION' className='navElement'>About</a>
                <a href='#TEAMSECTION' className='navElement'>Team</a>
                <a href='#FAQSECTION' className='navElement'>FAQ</a>
            </div>
      </div>
    </>
  );
}