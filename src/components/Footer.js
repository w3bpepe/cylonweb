import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center footerStyle' style={{ backgroundColor: '#D2C2C3' }}>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://twitter.com/CylonCartel'
            target='_blank'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          {/* <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href=''
            target='_blank'
            role='button'
          >
            <MDBIcon fab className='fa-discord' />
          </MDBBtn> */}
          <div className='copyrightBottom'>© 2022  Copyright CylonCartel.com</div>
    </MDBFooter>
  );
}