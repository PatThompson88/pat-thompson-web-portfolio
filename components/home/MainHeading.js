import Link from 'next/link';
import Image from 'next/image';
import { getBaseUrl } from '/utilities/common';

import { 
  MDBBtn,
  MDBContainer, 
  MDBRow, 
  MDBCol 
} from 'mdb-react-ui-kit';

//  bg-heading-custom

export default function MainHeading() {
  return (
    <MDBContainer
      className='p-5 text-center bg-image bg-light-tint'
      fluid={true}
      style={{ 
        backgroundImage: `url(${getBaseUrl()}'/background-images/revelstoke-sun-over-peak.jpg')`,
      }}
    >
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol size='md' className='text-primary py-5'>
          <h1 className='mb-3'>Patrick Thompson</h1>
          <h4 className='mb-3'>Websites, Mobile Apps, and Games</h4>
          <h6 className='mb-3'>5+ Years Professional Experience</h6>
          <Link href='/resume'>
            <MDBBtn color='success'>Interactive Resumé</MDBBtn>
          </Link>
        </MDBCol>
        <MDBCol size='md-7 py-5'>
          <Image width="150" height="150" src='/logos/javascript-logo.png' />
          <Image width="131" height="150" src='/logos/react-logo.png' />
          <Image width="161" height="150" src='/logos/redux-logo.png' />
          <Image width="150" height="150" src='/logos/typescript-logo.png' />
          <Image width="150" height="150" src='/logos/python-logo.png' />
          <Image width="412" height="150" src='/logos/unity-logo-dark.png' />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Code(){
  return (
    <>
      <div
        className='p-5 text-center bg-image bg-heading-custom'
        style={{ backgroundImage: `url(${getBaseUrl()}'/revelstoke-sun-over-peak.jpg')`}}
      ></div>
      <div className='mask' style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}></div>
    </>
  );
  
}