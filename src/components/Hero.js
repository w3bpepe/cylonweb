import React from 'react';
import invasionBG from '../images/invasion.png'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import landingCylon from "../images/7.jpg"

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className=' landingHero'
      >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='heroContainer'>
            <MDBCard style={{ maxWidth: '800px' }}>
      <MDBRow className='g-0'>

        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        <MDBCol md='4'>
          <MDBCardImage src={landingCylon} alt='...' fluid />
        </MDBCol>
      </MDBRow>
    </MDBCard>
            </div>
          </div>
      </div>
      <div class="custom-shape-divider-bottom-1670263175">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>
    </header>
  );
}