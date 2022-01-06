import Link from 'next/link';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Header from "/components/shared/Header";
import SectionSeperator from "components/shared/SectionSeperator";
import { 
  MDBBtn,
  MDBContainer, 
  MDBRow, 
  MDBCol 
} from 'mdb-react-ui-kit';
import { getBaseUrl } from '/utilities/common';

export default function Metaverse() {
  return (
    <main className="">
      <Header/>

      <MDBContainer
        className='p-5 text-start'
        fluid={true}
      >
        <MDBRow 
          className='d-flex justify-content-center align-items-center h-100 bubble-box bg-image bg-tint-light'
          style={{ 
            backgroundImage: `url(${getBaseUrl()}'/background-images/peru-sacsayhuaman-tall-wall.jpg')`,
          }}
        >
          <MDBCol size='9' className='text-primary py-5'>
            <h1>Pat's Metaverse</h1>
            <h3>Coming Soon!</h3>
            <h5>A fully interactive vurtual world created using Unity3D</h5>
            <h5>Interact with other members</h5>
            <h5>Explore the world and interact with the environment</h5>
            <h5>Throw money at it, it'll be fun :D</h5>
            <Link href=''>
              <MDBBtn color='success'>Donate to Project</MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <SectionSeperator />
    </main>
  );
}