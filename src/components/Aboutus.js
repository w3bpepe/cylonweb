import React, {useState} from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {
  MDBBtn,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function About() {
  const [showAbout, setShowAbout] = useState(false);

  const toggleShowAbout = () => setShowAbout(!showAbout);

  return (
    <div className='my-5 text-center lowerSection'>
      <div className='text-center'>
        <AnimationOnScroll
        animateIn='animate__fadeIn'
        >
          <h1 className='aboutTitle' id='ABOUTSECTION'>About The Cartel</h1>
        </AnimationOnScroll>
      </div>
      <MDBCollapse show={showAbout}>

          <p className='aboutSection'>
          The Cylon Cartel, an astounding collection of <strong>6000 Cylon’s</strong> pieced together with unique hand-drawn individual traits by a mysterious artist, that you may or may not get to know? 
          <br/>
          <br/>
          The Cartel Team vision in this space come hand in hand with both <strong>trust and honesty</strong>, we aim to be original and as authentic as we possibly can be whilst being true to our selves and the Cartel Community.
          <br/>
          <br/>
          Every route that the cartel explore, every decision the Cartel make will be <strong>100% decided by fellow Cylons</strong>.
          <br/>
          <br/>
          These badass vibrant Cylons have been designed and sent to invade the web3 space with a major goal of restoring faith and community.
          <br/>
          <br/>
          Our aim is to give a different perspective as Founders of this <strong>fully transparent</strong> NFT project, untried ideas to create diverse experiences for the holders of the Cylon Cartel whilst trying to bring <strong>true value</strong> to them everyday.
          </p>
      </MDBCollapse>
      <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 socialIcon aboutIcon'
            role='button'
            onClick={toggleShowAbout}
            >
              {showAbout 
              ? <MDBIcon fas icon="angle-up" className='socialIcon aboutIcon' />
              : <MDBIcon fas icon="angle-down" className='socialIcon aboutIcon' />
              }
        </MDBBtn>
    </div>
  );
}