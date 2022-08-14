// import { useRef, useState } from "react";
import { Header, RunningLine, Footer } from "components";
import "styles/global.style";

const Projects = () => {
  //   const videoContant = useRef(null);
  //   const [value, setValue] = useState(null);
  //   const [message, setMessage] = useState("");

  return (
    <>
      <Header transparentToComponent={videoContant}></Header>
      <main style={{ height: "100vh", overflow: "visible" }}>
        {/* ЗДЕСЬ ДОЛЖна БЫТЬ СЕКЦИЯ С ТОВАРАМИ */}
        <RunningLine outline="true"></RunningLine>
        {/* ЗДЕСЬ ДОЛЖна БЫТЬ СЕКЦИЯ С ПРОЕКТАМИ */}
        {/* ЗДЕСЬ ДОЛЖЕН БЫТЬ БЛОК СО СЛАЙДЕРОМ */}
      </main>

      <Footer></Footer>
    </>
  );
};

export default Projects;
