// import { useRef, useState } from "react";
import { Header, RunningLine, Footer } from "components";
import "styles/global.style";

const About = () => {
//   const videoContant = useRef(null);
//   const [value, setValue] = useState(null);
//   const [message, setMessage] = useState("");

  return (
    <>
      <Header/>
      <main style={{ height: "100vh", overflow: "visible" }}>
        {/* ЗДЕСЬ ДОЛЖЕН БЫТЬ БЛОК С СЕТКОЙ И ИЗОБРАЖЕНИЯМИ */}
        <RunningLine></RunningLine>
        {/* ЗДЕСЬ ДОЛЖЕН БЫТЬ БЛОК С ТЕКСТОМ КОТОРЫЙ СЕЙЧАС НА ПРОВЕРКЕ */}
        {/* ЗДЕСЬ ДОЛЖЕН БЫТЬ БЛОК С НАГРАДАМИ */}
        {/* ЗДЕСЬ ДОЛЖЕН БЫТЬ БЛОК СО СЛАЙДЕРОМ */}
        <RunningLine outline="true"></RunningLine>
      </main>

      <Footer></Footer>
    </>
  );
};

export default About;
