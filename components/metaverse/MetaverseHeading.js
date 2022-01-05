import Link from 'next/link';
import Image from 'next/image';
import { getBaseUrl } from '/utilities/common';

import { 
  MDBBtn,
  MDBContainer, 
  MDBRow, 
  MDBCol 
} from 'mdb-react-ui-kit';

export default function MetaverseHeading() {
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
          <h1 className='mb-3'>Metaverse Coming Soon</h1>
          <h4 className='mb-3'>Showcases Career & Experience</h4>
          <ul className='text-start'>
            <li>Made with Unity3D</li>
            <li>Online Community Support</li>
            <li>Interactive Environment</li>
          </ul>
          <Link href='/metaverse'>
            <MDBBtn color='success'>Metaverse</MDBBtn>
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