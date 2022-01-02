import {
  MDBContainer, 
  MDBRow, 
  MDBCol
} from 'mdb-react-ui-kit';

export default function SectionSeperator() {
  return (
    <MDBContainer className='my-5'>
      <MDBRow className='justify-content-center'>
        <MDBCol size='8'><hr className="my-5"/></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}