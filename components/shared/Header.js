import { useRouter } from 'next/router';
import Head from 'next/head';
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);
  const IsCurrentPageName = (pageName) => {
    return (useRouter().asPath === `/${pageName}`);
  }

  return (
    <div className="">
      <Head>
        <title>Patrick J Thompson</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
      </Head>
      
      <MDBNavbar expand='md' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className="text-primary">Pat Thompson</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 text-secondary'>
              
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current={IsCurrentPageName("resume")} href='resume'>
                  Interactive Resumé
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current={IsCurrentPageName("projects")} href='projects'>
                  Projects
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current={IsCurrentPageName("writing")} href='writing'>
                  Writing
                </MDBNavbarLink>
              </MDBNavbarItem>
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

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

    </div>
  );
}
