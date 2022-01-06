import Link from 'next/link';
import Image from 'next/image';
import { getBaseUrl } from '/utilities/common';

import { 
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard, 
  MDBCardTitle, 
  MDBCardText, 
  MDBCardOverlay, 
  MDBCardImage
} from 'mdb-react-ui-kit';

export default function ProjectsHeading() {
  return (
    <>
      <MDBContainer
          className='mb-5 text-start'
          fluid={true}
        >
        <MDBRow 
          className='mx-2 d-flex justify-content-center align-items-center h-100 bubble-box bg-image bg-tint-dark'
          style={{ 
            backgroundImage: `url(${getBaseUrl()}'/background-images/peru-sacsayhuaman-wall-segment.jpg')`,
          }}
        >
          <MDBCol size='9' className='text-white py-5'>
            <h1>Projects</h1>
            <h3>Showcasing things I'm working on</h3>
            <h5>Think of it as my Programming Lab</h5>
            <Link href='/projects'>
              <MDBBtn color='success'>Projects Page</MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid={false}>
        <MDBRow className='d-flex justify-content-between align-items-center h-100'>
          <Link className='' href='/projects'>
            <MDBCol 
              md='5'
              className='text-primary bg-image bg-tint-dark text-white hover-shadow hover-cursor-pointer p-4 border rounded-3' 
              style={{ 
                backgroundImage: `url(${getBaseUrl(), '/background-images/peru-ollantaytambo-perfect-stonework.jpg'})`,
              }}
            >
              <h3>Ollantaytambo</h3>
              <h6>Date Started: 4/JAN/2022</h6>
              <h6>Last Update: 4/JAN/2022</h6>
              <p>Information about the project.  Desctiptions galore.  Can't wait for all the wow features.</p>
            </MDBCol>
          </Link>
        </MDBRow>
      </MDBContainer>
    </>
  );
}