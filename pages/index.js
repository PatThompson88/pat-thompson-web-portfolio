import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Image from 'next/image';
import Link from 'next/link'
import Header from "/components/shared/Header";


import { getBaseUrl } from '/utilities/common';

import {
  MDBRipple,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Home() {
  return (
    <main className="">
      <Header/>

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${getBaseUrl()}'/revelstoke-sun-over-peak.jpg')`, height: 600 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='col-xs-12 col-md-5'>
              <div className='text-primary'>
                <h1 className='mb-3'>Patrick Thompson</h1>
                <h4 className='mb-3'>Websites, Mobile Apps, and Games</h4>
                <h6 className='mb-3'>5+ Years Professional Experience</h6>
                <Link href='/resume'>
                  <MDBBtn color='success'>Interactive Resumé</MDBBtn>
                </Link>
              </div>
            </div>
            <div className='col-xs-12 col-md-7'>
              <Image width="150" height="150" src='/javascript-logo.png' />
              <Image width="131" height="150" src='/react-logo.png' />
              <Image width="161" height="150" src='/redux-logo.png' />
              <Image width="150" height="150" src='/typescript-logo.png' />
              <Image width="150" height="150" src='/python-logo.png' />
              <Image width="412" height="150" src='/unity-logo-dark.png' />
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