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
      className='p-5 text-center bg-image bg-light-tint'
      fluid={true}
      style={{ 
        backgroundImage: `url(${getBaseUrl()}'/background-images/ice-storm-trees.JPG')`,
      }}
    >
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol size='md' className='text-primary py-5'>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}