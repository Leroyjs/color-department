import "styles/global.style";

import { Preloader } from "components";
import { useState } from "react";
import {
  Header,
  Footer,
  IntroMainTextBlock,
  AwardMainTextBlock,
  Awards,
} from "components";

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
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState(null);
  return (
    <>
      <Preloader />
      <Header />
      <main style={{ height: "100vh", overflow: "visible" }}>
        <IntroMainTextBlock />
        {/* TODO: СЕКЦИЯ С ЛОГОТИПАМИ */}
        {/* TODO: СЕКЦИЯ СО СЛАЙДЕРОМ */}
        <AwardMainTextBlock />
        <Awards options={options}/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
