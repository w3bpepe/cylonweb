import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import team1 from "../images/team1.png"
import team2 from "../images/team2.png"
import team3 from "../images/team3.png"
import team4 from "../images/team4.png"



export default function Team() {
  return (
    <div className='text-center lowerSection my-5' >
    <h1 className='aboutTitle'>Cylon Team</h1>
    <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={team1}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Jacques</MDBCardTitle>
            <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum augue a justo euismod, a viverra neque rutrum. Nulla non ullamcorper felis. Nullam molestie fringilla hendrerit. Aliquam placerat, ligula in finibus tincidunt, libero libero mollis quam, id feugiat diam dui at turpis
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={team2}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>17Dreams</MDBCardTitle>
            <MDBCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum augue a justo euismod, a viverra neque rutrum. Nulla non ullamcorper felis. Nullam molestie fringilla hendrerit. Aliquam placerat, ligula in finibus tincidunt, libero libero mollis quam, id feugiat diam dui at turpis
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={team3}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>OkayJay</MDBCardTitle>
            <MDBCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum augue a justo euismod, a viverra neque rutrum. Nulla non ullamcorper felis. Nullam molestie fringilla hendrerit. Aliquam placerat, ligula in finibus tincidunt, libero libero mollis quam, id feugiat diam dui at turpis
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={team4}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>ChiefKeef</MDBCardTitle>
            <MDBCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum augue a justo euismod, a viverra neque rutrum. Nulla non ullamcorper felis. Nullam molestie fringilla hendrerit. Aliquam placerat, ligula in finibus tincidunt, libero libero mollis quam, id feugiat diam dui at turpis
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  );
}