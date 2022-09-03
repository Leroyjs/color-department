import {
  Footer,
  Header,
  PhotoStartScreen, Preloader, ProjectCards, RunningLineLink
} from "components";
import { colors } from "styles";
import "styles/global.style";

const arrayOfImages = [
  "https://i.postimg.cc/0rMRdbBC/img-01.jpg",
  "https://i.postimg.cc/RJnkMDHY/img-02.jpg",
  "https://i.postimg.cc/G8N0nCHY/img-03.jpg",
  "https://i.postimg.cc/WFtRy3bT/img-04.jpg",
];

const Projects = () => {
  return (
    <>
      <Preloader></Preloader>
      <Header />
      <PhotoStartScreen arrayOfImages={arrayOfImages} title={['projects']} />
      <main style={{ backgroundColor: colors.black }}>
        <ProjectCards />
        <RunningLineLink mt="xlg" outline={'true'} link={'./order'} />
      </main>
      <Footer pt="xlg" />
    </>
  );
};

export default Projects;
