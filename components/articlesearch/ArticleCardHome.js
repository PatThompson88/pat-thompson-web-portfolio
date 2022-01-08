import { 
  MDBBtn,
  MDBCol,
  MDBCard, 
  MDBCardTitle,
  MDBCardHeader,
  MDBCardBody,
  MDBCardText,
  MDBCardFooter,
} from 'mdb-react-ui-kit';

export default function ArticleCardHome(){
  return (
    <MDBCol md='4'>
      <MDBCard alignment='start' style={{ maxWidth: '22rem' }}>
        <MDBCardHeader><MDBCardTitle>Article Title</MDBCardTitle></MDBCardHeader>
        <MDBCardBody>
          <MDBCardText>Brief description about the article</MDBCardText>
          <MDBBtn href=''>Read Full Article</MDBBtn>
        </MDBCardBody>
        <MDBCardFooter className='text-muted'>Updated: dd/mmm/yyyy</MDBCardFooter>
      </MDBCard>
    </MDBCol>
  );
}