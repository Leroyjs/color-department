import { useRef, useState } from "react";
import { Header, DropDown, Awards, StartScreen, Footer, IntroMainTextBlock, AwardMainTextBlock } from "components";
import "styles/global.style";

import { Preloader } from "components";

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

const Home = () => {

  const videoContant = useRef(null);
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState("");

  // <div className="TODO: Play ground" style={{ 'position': 'relative', 'overflow': 'hidden' }}>
  //     <div ref={videoContant} style={{ 'height': '100vh', 'filter': 'brightness(0.5)', 'background-image': 'url(./Yp2.gif)', 'background-size': 'cover' }}></div>
  //     <RunningLine style={{ 'position': 'absolute', 'bottom': '0' }}></RunningLine>
  // </div>

  return (
    <>
      <Header transparentToComponent={videoContant}></Header>
      <StartScreen></StartScreen>
      <main ref={videoContant} style={{'backgroundColor':'black'}}>
        <IntroMainTextBlock />
        <AwardMainTextBlock/>
        <Awards/>
        <Footer></Footer>
      </main>
    </>
  );

};

export default Home;
