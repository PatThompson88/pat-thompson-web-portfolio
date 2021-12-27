import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Header from "/components/shared/Header";

import {
  MDBRipple
} from 'mdb-react-ui-kit';

export default function Home() {
  return (
    <main className="">
      <Header/>

      <MDBRipple
        className='bg-image hover-overlay shadow-1-strong rounded'
        style={{ maxWidth: '22rem' }}
        rippleTag='div'
        rippleColor='light'
      >
        <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp' className='w-100' />
        <a href='#!'>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
        </a>
      </MDBRipple>
      <div className='bg-image hover-zoom' style={{ maxWidth: '22rem' }}>
        <img src='https://mdbcdn.b-cdn.net/img/new/standard/city/053.webp' className='w-100' />
      </div>
    </main>
  )
}