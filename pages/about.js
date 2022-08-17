// import { useRef, useState } from "react";
import {
  Header,
  RunningLine,
  Footer,
  IntroAboutTextBlock,
  Awards,
} from "components";
import "styles/global.style";

const About = () => {
//   const videoContant = useRef(null);
//   const [value, setValue] = useState(null);
//   const [message, setMessage] = useState("");

const SeniorColourists = [
  {
    href: "/",
    startLabel: "Сraig Saunders",
    endLabel: "Senior colourist",
    img: "https://bigpicture.ru/wp-content/uploads/2018/11/sins00.jpg",
  },
  {
    href: "/",
    startLabel: "Ellen Kennedy",
    endLabel: "VFX-designer",
    img: "https://bigpicture.ru/wp-content/uploads/2018/11/sins1.jpg",
  },
  {
    href: "/",
    startLabel: "Miranda Bell",
    endLabel: "Creative director",
    img: "https://bigpicture.ru/wp-content/uploads/2018/11/sins2.jpg",
  },
];

const Colourists = [
  {
    href: "/",
    startLabel: "Herman Payne",
    endLabel: "CEO-founder",
    img: "https://bigpicture.ru/wp-content/uploads/2018/11/sins3.jpg",
  },
  {
    href: "/",
    startLabel: "Jeff Washington",
    endLabel: "Sales manager",
    img: "https://bigpicture.ru/wp-content/uploads/2018/11/sins4.jpg",
  },
];

const Assistants = [
  {
    href: "/",
    startLabel: "Milton Hogan",
    endLabel: "Account",
    img: "https://bigpicture.ru/wp-content/uploads/2018/11/sins8-800x422.jpg",
  },
  {
    href: "/",
    startLabel: "Dexter Swanson",
    endLabel: "Account",
    img: "https://bigpicture.ru/wp-content/uploads/2018/11/sins7.jpg",
  },
  {
    href: "/",
    startLabel: "Carla Garcia",
    endLabel: "Manager",
    img: "https://bigpicture.ru/wp-content/uploads/2018/11/sins70-800x600.jpg",
  },
];

  return (
    <>
      <Header />
      <main style={{ height: "100vh", overflow: "visible" }}>
        {/* TODO: ЗДЕСЬ ДОЛЖЕН БЫТЬ БЛОК С СЕТКОЙ И ИЗОБРАЖЕНИЯМИ */}
        <RunningLine></RunningLine>
        <IntroAboutTextBlock />
        <Awards
          options={SeniorColourists}
          subtitle="Senior colourists"
          title="We are bold"
          mt="xlg"
          mb="lg"
        />
        <Awards options={Colourists} subtitle="Colourists" my="lg" />
        <Awards options={Assistants} subtitle="Assistants" my="lg" />
        {/* TODO: ЗДЕСЬ ДОЛЖЕН БЫТЬ БЛОК СО СЛАЙДЕРОМ */}
        <RunningLine outline="true"></RunningLine>
      </main>

      {/* <Footer></Footer> */}
    </>
  );
};

export default About;
