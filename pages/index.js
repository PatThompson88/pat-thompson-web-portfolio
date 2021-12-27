import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Header from "/components/shared/Header";

import {
  MDBRipple
} from 'mdb-react-ui-kit';

export default function Home() {
  return (
    <main className="">
      <Header/>

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')", height: 600 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='col'>
              <div className='text-primary'>
                <h1 className='mb-3'>Patrick Thompson</h1>
                <h4 className='mb-3'>Websites, Mobile Apps, and Games</h4>
                <h6 className='mb-3'>5+ Years Professional Experience</h6>
                <a className='btn btn-outline-info btn-lg' href='/resume' role='button'>
                  Interactive Resumé
                </a>
              </div>
            </div>
            <div className='col'>
              <img src='https://images.app.goo.gl/xvLEDvmFMUG3HPCv8'></img>
            </div>

          </div>
        </div>
      </div>

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