import Link from 'next/link';
import Image from 'next/image';
import { getBaseUrl } from '/utilities/common';

import { 
  MDBBtn,
  MDBContainer, 
  MDBRow, 
  MDBCol 
} from 'mdb-react-ui-kit';

export default function MainHeading() {
  return (
    <MDBContainer
      className='p-5 text-start bg-image bg-tint-dark'
      fluid={true}
      style={{ 
        backgroundImage: `url(${getBaseUrl()}'/background-images/ice-storm-sun-trees.jpg')`,
      }}
    >
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol size='md' className='text-white py-5'>
          <h1>Hey, I'm Patrick</h1>
          <h4>I've been a software developer for over 5 years.</h4>
          <h4>I mostly build websites.</h4>
          <h4>I also make games.</h4>
          <h4>This site is here to share what I'm working on.</h4>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}