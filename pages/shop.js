import { useRef, useState } from "react";
import { Header, RunningLine, Footer, ShopSection } from "components";

const Projects = () => {
  //   const videoContant = useRef(null);
  //   const [value, setValue] = useState(null);
  //   const [message, setMessage] = useState("");

  return (
    <>
      <Header/>
      <main style={{ height: "100vh", overflow: "visible" }}>
        <ShopSection/>
        <RunningLine outline="true"></RunningLine>
        {/* ЗДЕСЬ ДОЛЖна БЫТЬ СЕКЦИЯ С ПРОЕКТАМИ */}
        {/* ЗДЕСЬ ДОЛЖЕН БЫТЬ БЛОК СО СЛАЙДЕРОМ */}
      </main>

      <Footer></Footer>
    </>
  );
};

export default Projects;