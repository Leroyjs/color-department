import { AwardMainTextBlock, Footer, Header, IntroMainTextBlock, PartnersLine, StartScreen } from "components";
import { useRef, useState } from "react";
import "styles/global.style";
import SliderPage from "./example/slider";

import { Awards } from "components";
import { colors } from "styles";


const options = [
  {
    label: "color grading",
    value: 1,
  },
  {
    label: "VFX-design",
    value: 2,
  },
  {
    label: "Dailies",
    value: 3,
  },
];

const awardsItems = [
  {
    href: "/",
    startLabel: "D&AD",
    endLabel: "Balkan line",
    img: "https://www.fillmurray.com/400/400",
  },
  {
    href: "/",
    startLabel: "CANNES LIONS",
    endLabel: "El corte ingles",
    img: "https://placebeard.it/400/400",
  },
  {
    href: "/",
    startLabel: "WEBBY",
    endLabel: "Zolla",
    img: "https://www.placecage.com/400/400",
  },
  {
    href: "/",
    startLabel: "ONE SHOW",
    endLabel: "Lil pump",
    img: "https://www.stevensegallery.com/400/400",
  },
];

const Home = () => {
  const [aboutImg, setAboutImg] = useState(false);
  const videoContant = useRef(null);

  return (
    <>
      <Header transparentToComponent={videoContant}></Header>
      <StartScreen></StartScreen>
      <main ref={videoContant} style={{ backgroundColor: colors.black }}>
        <IntroMainTextBlock />
        <PartnersLine/>
        <AwardMainTextBlock mt="xlg" px="md" />
        <Awards options={awardsItems} title="Our Awards" pb="xlg" aboutImg={false}/>
      </main>
      <Footer></Footer>
    </>
  );

};

export default Home;
