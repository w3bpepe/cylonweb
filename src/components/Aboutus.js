import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';


export default function About() {

  return (
    <div className='my-5 text-center lowerSection'>
      <div className='text-center'>
        <AnimationOnScroll
        animateIn='animate__fadeIn'
        >
          <h1 className='aboutTitle' id='ABOUTSECTION'>About The Cartel</h1>
        </AnimationOnScroll>
      </div>
        <AnimationOnScroll
        animateIn='animate__fadeInUp'
        >
          <p className='aboutSection'>
          The Cylon Cartel, an astounding collection of 6000 Cylon’s pieced together with unique hand-drawn individual traits by a mysterious artist, that you may or may not get to know? The Cartel Team vision in this space come hand in hand with both trust and honesty, we aim to be original and as authentic as we possibly can be whilst being true to our selves and the Cartel Community. Every route that the cartel explore, every decision the Cartel make will be 100% decided by fellow Cylons. These badass vibrant Cylons have been designed and sent to invade the web3 space with a major goal of restoring faith and community. Our aim is to give a different perspective as Founders of this fully transparent NFT project, untried ideas to create diverse experiences for the holders of the Cylon Cartel whilst trying to bring true value to them everyday.
          </p>
        </AnimationOnScroll>
    </div>
  );
}