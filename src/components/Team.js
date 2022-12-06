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
import team1 from "../images/team1.png"
import team2 from "../images/team2.png"
import team3 from "../images/team3.png"
import team4 from "../images/team4.png"



export default function Team() {
  return (
    <div className='text-center lowerSection my-5' >
    <h1 className='aboutTitle'>Cylon Team</h1>
    <MDBRow className='row-cols-1 row-cols-md-2 row-cols-xl-4 g-4'>
      <MDBCol>
        <MDBCard className='h-100 teamCard'>
          <MDBCardImage
            src={team1}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className='teamTitle'>Jacques</MDBCardTitle>
            <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum augue a justo euismod, a viverra neque rutrum. Nulla non ullamcorper felis. Nullam molestie fringilla hendrerit. Aliquam placerat, ligula in finibus tincidunt, libero libero mollis quam, id feugiat diam dui at turpis
            </MDBCardText>
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
            <MDBCardTitle className='teamTitle'>17Dreams</MDBCardTitle>
            <MDBCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum augue a justo euismod, a viverra neque rutrum. Nulla non ullamcorper felis. Nullam molestie fringilla hendrerit. Aliquam placerat, ligula in finibus tincidunt, libero libero mollis quam, id feugiat diam dui at turpis
            </MDBCardText>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum augue a justo euismod, a viverra neque rutrum. Nulla non ullamcorper felis. Nullam molestie fringilla hendrerit. Aliquam placerat, ligula in finibus tincidunt, libero libero mollis quam, id feugiat diam dui at turpis
            </MDBCardText>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum augue a justo euismod, a viverra neque rutrum. Nulla non ullamcorper felis. Nullam molestie fringilla hendrerit. Aliquam placerat, ligula in finibus tincidunt, libero libero mollis quam, id feugiat diam dui at turpis
            </MDBCardText>
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
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  );
}