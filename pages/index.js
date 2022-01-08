import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Header from "/components/shared/Header";
import MainHeading from "/components/home/MainHeading";
import MetaverseHeading from "/components/metaverse/MetaverseHeading";
import SectionSeperator from "components/shared/SectionSeperator";
import ProjectsHeading from "/components/projects/ProjectsHeading";
import ArticlesHeading from 'components/articlesearch/ArticlesHeading';
import Footer from 'components/shared/Footer';

export default function Home() {
  return (
    <main className="">
      <Header/>
      <MainHeading/>
      <SectionSeperator />
      <MetaverseHeading />
      <SectionSeperator />
      <ProjectsHeading />
      <SectionSeperator />
      <ArticlesHeading />
      <SectionSeperator />
      <Footer/>
    </main>
  );
}