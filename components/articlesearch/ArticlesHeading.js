import Link from 'next/link';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import ArticleCardHome from './ArticleCardHome';

export default function ArticlesHeading(){
  return (
    <>
      <MDBContainer
        className='text-center'
        breakpoint='sm'
      >
        <MDBRow className='d-flex justify-content-center align-items-center pb-4'>
          <MDBCol size='6' className='border-bottom border-primary border-5'>
            <Link href='/articlesearch'>
              <div className='hover-cursor-pointer'>
                <h1>Articles</h1>
                <h5>I like to write about a whole range of topics</h5>
              </div>
            </Link>
          </MDBCol>
        </MDBRow>
        <MDBRow className='p-2'>
          <ArticleCardHome />
        </MDBRow>
      </MDBContainer>
    </>
  );
}