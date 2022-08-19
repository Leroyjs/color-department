import { VideoGrid } from "components";
import { Header, RunningLine, Footer } from "components";
import "styles/global.style";

const Projects = () => {
  return (
    <>
      <Header />
      <main style={{ height: "100vh", overflow: "visible" }}>
        {/* TODO: ЗДЕСЬ ДОЛЖЕН БЫТЬ БЛОК С СЕТКОЙ И ИЗОБРАЖЕНИЯМИ */}
        <RunningLine></RunningLine>
        <VideoGrid></VideoGrid>
        {/* TODO: ЗДЕСЬ ДОЛЖЕН БЫТЬ БЛОК СО СЛАЙДЕРОМ */}
        <RunningLine outline="true"></RunningLine>
        {/* TODO: ЗДЕСЬ ДОЛЖНА БЫТЬ ДЕТАЛЬНАЯ СТРАНИЦА ПРОЕКТА */}
      </main>
      <Footer />
    </>
  );
};

export default Projects;
