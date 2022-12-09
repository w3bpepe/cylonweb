import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import team1 from "../images/50k.png"
import team2 from "../images/klein.jpeg"
import team3 from "../images/okayjay.png"
import team4 from "../images/keef.png"



export default function Team() {
  return (
    <div className='text-center lowerSection my-5' >
    <h1 className='aboutTitle' id='TEAMSECTION'>Cylon Team</h1>
    <MDBRow className='row-cols-1 row-cols-md-2 row-cols-xl-4 g-4'>
      <MDBCol>
        <MDBCard className='h-100 teamCard'>
          <MDBCardImage
            src={team1}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className='teamTitle'>50K</MDBCardTitle>
            <MDBCardText>
            Yoo. Im Jacques, i am 22. Born and raised in the UK. I work as a night yardman at a warehouse full-time, and spend the rest of my life finding the balance between spending time with family and friends. However my mind is Web3/NFT’s 24/7. I Found web3 8 months ago through a mutual friend and realised i have an insane amount of love for the space. Web 3 in general has guided me to network with many like minded individuals that share the same passion and visions, i have done my best to consume as much knowledge as possible and use it in practise.
            </MDBCardText>
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
        <MDBCard className='h-100 teamCard'>
          <MDBCardImage
            src={team2}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className='teamTitle'>Klein</MDBCardTitle>
            <MDBCardText>
            My name is Brandon Klein, 21 from the UK!
            I have been involved in crypto and NFTs 2 years now and I have decided to put matters into my own hands and create something with my colleagues that provides value to everybody involved and not just the owners.
            I’ve studied business, economics and media at a high level and also have qualifications in I.T.
            Other than web3, I'm a huge Manchester United supporter, I love going to concerts and festivals around Europe and I feel like health is wealth, gym is a big factor in keeping me level haeded

            Thank you for being part of the Cylon family, let’s all create something special !


            </MDBCardText>
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
        <MDBCard className='h-100 teamCard'>
          <MDBCardImage
            src={team3}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className='teamTitle'>OkayJay</MDBCardTitle>
            <MDBCardText>
            YO! I'm Jay, 32 from the UK! been in the web 3 game around 18 months, made most of my profits along with some amazing ideas from the builders in the terra ecosystem!
            I have a full time job, and a farther of 2! my main belief from the Cylon is the community will be its strongest utility!
            I live a pretty ordinary life, my only other passion apart from NFT'S is football! COME'ON ARSENAL!
            Stick around get to know us!
            </MDBCardText>
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
        <MDBCard className='h-100 teamCard'>
          <MDBCardImage
            src={team4}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className='teamTitle'>ChiefKeef</MDBCardTitle>
            <MDBCardText>

Yo, my name's Ben, I'm 25 years old and from the UK, I work as a manager in a bar.
I've been into crypto for about 2 years now and I am coming up to a year in NFTs. LUNA crash survivor who recently made the plunge into the Ethereum ecosystem. I've also gained a lot of experience and knowledge trading in multiple blockchains, such as Solana and Cosmos. Before crypto I spent a year trading stocks, till I bought some $DOGE as a joke and never looked back.
I live a fairly calm life, I have a family and I firmly believe Web3 will allow me to give my Fiancée and kids the life I want them to have.
I've met some insane people along the way in my journey through Web3, learned a hell of a lot and now I believe I am ready to begin building an empire
            </MDBCardText>
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
    </div>
  );
}