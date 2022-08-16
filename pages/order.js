// import { useRef, useState } from "react";
import { Header, Footer, WorkModal, FormWork,} from "components";
import "styles/global.style";

const About = () => {
  //   const videoContant = useRef(null);
  //   const [value, setValue] = useState(null);
  //   const [message, setMessage] = useState("");

  return (
    <>
      <Header />
      <main style={{ height: "100vh", overflow: "visible" }}>
        <FormWork/>
        <WorkModal/>
        {/* ЗДЕСЬ ДОЛЖЕН БЫТЬ БЛОК СО СЛАЙДЕРОМ */}
      </main>
      <Footer></Footer>
    </>
  );
};

export default About;
