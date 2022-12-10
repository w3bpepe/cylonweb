import React, {useState} from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import team1 from "../images/50k.png"
import team2 from "../images/klein.jpeg"
import team3 from "../images/okayjay.png"
import team4 from "../images/keef.png"



export default function Team() {
  const [show50k, setShow50k] = useState(false);
  const [showKlein, setShowKlein] = useState(false);
  const [showJay, setShowJay] = useState(false);
  const [showKeef, setShowKeef] = useState(false);

  const toggleShow50k = () => setShow50k(!show50k);
  const toggleShowKlein = () => setShowKlein(!showKlein);
  const toggleShowJay = () => setShowJay(!showJay);
  const toggleShowKeef = () => setShowKeef(!showKeef);


  return (
    <div className='text-center lowerSection my-5' >
      <AnimationOnScroll
      animateIn='animate__fadeIn'
      >
        <h1 className='aboutTitle' id='TEAMSECTION'>Cylon Team</h1>
      </AnimationOnScroll>
    <AnimationOnScroll
    animateIn='animate__fadeInUp'
    >
    <MDBRow className='row-cols-1 row-cols-md-2 row-cols-xl-4 g-4'>
      <MDBCol>
        <MDBCard className='teamCard'>
          <MDBCardImage
            src={team1}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className='teamTitle'>50K</MDBCardTitle>
            <MDBCollapse show={show50k}>
              Yoo. Im Jacques, i am 22. Born and raised in the UK. I work as a night yardman at a warehouse full-time, and spend the rest of my life finding the balance between spending time with family and friends. However my mind is Web3/NFT’s 24/7. I Found web3 8 months ago through a mutual friend and realised i have an insane amount of love for the space. Web 3 in general has guided me to network with many like minded individuals that share the same passion and visions, i have done my best to consume as much knowledge as possible and use it in practise.
            </MDBCollapse>
            <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 socialIcon'
            role='button'
            onClick={toggleShow50k}
            >
              <MDBIcon fas icon="info-circle" className='socialIcon' />
            </MDBBtn>
            <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 socialIcon'
            href='https://twitter.com/50isme'
            target='_blank'
            role='button'
          >
            <MDBIcon fab className='fa-twitter socialIcon' />
          </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='teamCard'>
          <MDBCardImage
            src={team2}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className='teamTitle'>Klein</MDBCardTitle>
            <MDBCollapse show={showKlein}>
              My name is Brandon Klein, 21 from the UK!
              I have been involved in crypto and NFTs 2 years now and I have decided to put matters into my own hands and create something with my colleagues that provides value to everybody involved and not just the owners.
              I’ve studied business, economics and media at a high level and also have qualifications in I.T.
              Other than web3, I'm a huge Manchester United supporter, I love going to concerts and festivals around Europe and I feel like health is wealth, gym is a big factor in keeping me level haeded

              Thank you for being part of the Cylon family, let’s all create something special !


            </MDBCollapse>
            <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 socialIcon'
            role='button'
            onClick={toggleShowKlein}
            >
              <MDBIcon fas icon="info-circle" className='socialIcon' />
            </MDBBtn>
            <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 socialIcon'
            href='https://twitter.com/17dreams_'
            target='_blank'
            role='button'
          >
            <MDBIcon fab className='fa-twitter socialIcon' />
          </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='teamCard'>
          <MDBCardImage
            src={team3}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className='teamTitle'>OkayJay</MDBCardTitle>
            <MDBCollapse show={showJay}>
              YO! I'm Jay, 32 from the UK! been in the web 3 game around 18 months, made most of my profits along with some amazing ideas from the builders in the terra ecosystem!
              I have a full time job, and a farther of 2! my main belief from the Cylon is the community will be its strongest utility!
              I live a pretty ordinary life, my only other passion apart from NFT'S is football! COME'ON ARSENAL!
              Stick around get to know us!
            </MDBCollapse>
            <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 socialIcon'
            role='button'
            onClick={toggleShowJay}
            >
              <MDBIcon fas icon="info-circle" className='socialIcon' />
            </MDBBtn>
            <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 socialIcon'
            href='https://twitter.com/JayJay0kay'
            target='_blank'
            role='button'
          >
            <MDBIcon fab className='fa-twitter socialIcon' />
          </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='teamCard'>
          <MDBCardImage
            src={team4}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className='teamTitle'>ChiefKeef</MDBCardTitle>
            <MDBCollapse show={showKeef}>
              Yo, my name's Ben, I'm 25 years old and from the UK, I work as a manager in a bar.
              I've been into crypto for about 2 years now and I am coming up to a year in NFTs. LUNA crash survivor who recently made the plunge into the Ethereum ecosystem. I've also gained a lot of experience and knowledge trading in multiple blockchains, such as Solana and Cosmos. Before crypto I spent a year trading stocks, till I bought some $DOGE as a joke and never looked back.
              I live a fairly calm life, I have a family and I firmly believe Web3 will allow me to give my Fiancée and kids the life I want them to have.
              I've met some insane people along the way in my journey through Web3, learned a hell of a lot and now I believe I am ready to begin building an empire
            </MDBCollapse>
            <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 socialIcon'
            role='button'
            onClick={toggleShowKeef}
            >
              <MDBIcon fas icon="info-circle" className='socialIcon' />
            </MDBBtn>
            <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1 socialIcon'
            href='https://twitter.com/Benl1723'
            target='_blank'
            role='button'
          >
            <MDBIcon fab className='fa-twitter socialIcon' />
          </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </AnimationOnScroll>
    </div>
  );
}