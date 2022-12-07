import React from 'react';
import Card from 'react-bootstrap/Card';
import landingCylon from "../images/7.jpg"
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function HeroImage() {
  return (
    <div className='d-flex justify-content-center align-items-center landingHero'>
    <Card style={{ width: '30rem' }} className="cartaHero">
      <Card.Body>
        <h1 className='heroTitle'>Join The Invasion</h1>
        <Card.Subtitle className="mb-2 text-muted heroSottotitolo">The cartel is waiting for you</Card.Subtitle>
        <section className='mb-4 justify-content-center text-center'>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 socialIcon'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter socialIcon' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-discord socialIcon' />
          </MDBBtn>

        </section>

      </Card.Body>
    </Card>
    </div>
  );
}