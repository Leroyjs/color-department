// import { useRef, useState } from "react";
import { Header, RunningLine, Footer } from "components";
import "styles/global.style";

const Projects = () => {
  //   const videoContant = useRef(null);
  //   const [value, setValue] = useState(null);
  //   const [message, setMessage] = useState("");

  return (
    <>
      <Header />
      <main style={{ height: "100vh", overflow: "visible" }}>
        {/* TODO: ЗДЕСЬ ДОЛЖЕН БЫТЬ БЛОК С СЕТКОЙ И ИЗОБРАЖЕНИЯМИ */}
        <RunningLine></RunningLine>
        {/* TODO: ЗДЕСЬ ДОЛЖНА БЫТЬ СЕКЦИЯ С ПРОЕКТАМИ */}
        {/* TODO: ЗДЕСЬ ДОЛЖЕН БЫТЬ БЛОК СО СЛАЙДЕРОМ */}
        <RunningLine outline="true"></RunningLine>
        {/* TODO: ЗДЕСЬ ДОЛЖНА БЫТЬ ДЕТАЛЬНАЯ СТРАНИЦА ПРОЕКТА */}
      </main>

      <Footer></Footer>
    </>
  );
};

export default Projects;
