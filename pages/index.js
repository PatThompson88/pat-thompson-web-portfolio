import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Header from "/components/shared/Header";
import MainHeading from "/components/home/MainHeading";
import SectionSeperator from "components/shared/SectionSeperator";

import {
  MDBContainer, 
  MDBRow, 
  MDBCol
} from 'mdb-react-ui-kit';

export default function Home() {
  return (
    <main className="">
      <Header/>

      <MainHeading/>

      <SectionSeperator />
    </main>
  )
}