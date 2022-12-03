import React from 'react';
import invasionBG from '../images/invasion.png'

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className=' landingHero'
        style={{ backgroundImage: `url(${invasionBG})` }}
      >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='heroContainer'>
              <h1 className="heroTitle">JOIN THE INVASION</h1>
            </div>
          </div>
      </div>
    </header>
  );
}