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
                <span href='#' className='navElement'>Cylons</span>
                <span href='#' className='navElement'>About</span>
                <span href='#' className='navElement'>Team</span>
                <span href='#' className='navElement'>FAQ</span>
            </div>
      </div>
    </>
  );
}