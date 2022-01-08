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

export default function ArticleSearch() {
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
            <h1>Articles</h1>
            <h3>I write about all kinds of things</h3>
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
            <MDBRow>
              <MDBCol md='12'>
                <MDBCard alignment='start' style={{ maxWidth: '22rem' }}>
                  <MDBCardHeader><MDBCardTitle>Article Title</MDBCardTitle></MDBCardHeader>
                  <MDBCardBody>
                    <MDBCardText>Brief description about the article</MDBCardText>
                    <MDBBtn href=''>Read Full Article</MDBBtn>
                  </MDBCardBody>
                  <MDBCardFooter className='text-muted'>Updated: dd/mmm/yyyy</MDBCardFooter>
                </MDBCard>

              </MDBCol>

            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <SectionSeperator />
      
    </main>
  );
}