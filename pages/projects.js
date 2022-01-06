import Link from 'next/link';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Header from "/components/shared/Header";
import SectionSeperator from "components/shared/SectionSeperator";
import { 
  MDBBtn,
  MDBContainer, 
  MDBRow, 
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter
} from 'mdb-react-ui-kit';
import { getBaseUrl } from '/utilities/common';

export default function Projects() {
  return (
    <main className="">
      <Header/>

      <MDBContainer
        className='mt-5 text-start'
        fluid={false}
      >
        <MDBRow 
          className='d-flex justify-content-center align-items-center h-100 bubble-box bg-image bg-tint-dark'
          style={{ 
            backgroundImage: `url(${getBaseUrl()}'/background-images/peru-sacsayhuaman-tall-wall.jpg')`,
          }}
        >
          <MDBCol size='9' className='text-white py-5'>
            <h1>Projects</h1>
            <h3>Showcasing things I'm working on</h3>
            <h5>Think of it as my Programming Lab</h5>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <SectionSeperator />

      <MDBContainer
        className='text-center'
        fluid={true}
      >
        <MDBRow className='d-flex justify-content-center'>
          <MDBCol md='3' className='border-end border-5'>
            <form className='d-flex w-100'>
              <MDBRow className='d-flex align-itmes-center'>
                <MDBCol size='7'>
                  <input type='search' className='h-100' placeholder='Search' aria-label='Search' />
                </MDBCol>
                <MDBCol size='3'>
                  <MDBBtn>Search</MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </MDBCol>

          <MDBCol md='8'>
            <MDBRow className='d-flex justify-content-center'>
              <Link className='' href='/projects'>
                <MDBCol 
                  md='11'
                  className='text-primary bg-image bg-tint-dark text-white hover-shadow hover-cursor-pointer p-4 border rounded-3' 
                  style={{ 
                    backgroundImage: `url(${getBaseUrl(), '/background-images/peru-ollantaytambo-perfect-stonework.jpg'})`,
                  }}
                >
                  <h3>Wow Project</h3>
                  <h6>Date Started: 4/JAN/2022</h6>
                  <h6>Last Update: 4/JAN/2022</h6>
                  <p>Wow prject so amzing. so many wow feature. sponsor crypto blockchain wow project.</p>
                </MDBCol>
              </Link>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <SectionSeperator />
      
    </main>
  );
}