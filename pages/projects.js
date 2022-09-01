import "styles/global.style";
import {
  Footer,
  Header,
  PhotoStartScreen,
  RunningLineLink,
  ProjectCards,
  RunningLine,
} from "components";
import { colors } from "styles";

const arrayOfImages = [
  "https://www.tradeinn.com/f/13779/137798950/lol-surprise-%D0%9F%D0%BE%D0%BB%D0%BE%D1%82%D0%B5%D0%BD%D1%86%D0%B5-%D0%B8%D0%B7-%D0%BC%D0%B8%D0%BA%D1%80%D0%BE%D1%84%D0%B8%D0%B1%D1%80%D1%8B-mermaid.jpg",
  "https://miro.medium.com/max/1400/1*BR2RiTRoYor9xSrzEgxLWQ.jpeg",
  "https://snipp.ru/uploads/images/donut.png",
  "https://assets.htmlacademy.ru/img/blog/113/jpeg/jpeg1@1x.jpg",
  "https://схемо.рф/upload/000/u1/318/2c7820da.jpeg.webp",
  "https://static9.depositphotos.com/1015682/1176/i/450/depositphotos_11760110-stock-photo-elephant-affection-artistic-processing.jpg",
];

const Projects = () => {
  return (
    <>
      <Header />
      <PhotoStartScreen arrayOfImages={arrayOfImages} title={['projects']}/>
      <main style={{ backgroundColor: colors.black }}>
        <ProjectCards />
        <RunningLineLink mt="xlg" outline={'true'} target={'_blank'} link={'https://vimeo.com/showcase/7646686'}/>
      </main>
      <Footer pt="xlg"/>
    </>
  );
};

export default Projects;
