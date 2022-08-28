import { useRef } from "react";
import {
  AwardMainTextBlock,
  Footer,
  Header,
  IntroMainTextBlock,
  PartnersLine,
  StartScreen,
} from "components";

import { Awards } from "components";
import { colors } from "styles";

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
const mockPartners = [
  {
    logo: '/20-century.png',
    label: 'century'
  },
  {
    logo: '/apple.png',
    label: 'apple'
  },
  {
    logo: '/dream-works.png',
    label: 'dream-works'
  },
  {
    logo: '/netflix.png',
    label: 'netflix'
  },
  {
    logo: '/pizza-hunt.png',
    label: 'pizza-hunt'
  },
  {
    logo: '/uniqlo.png',
    label: 'uniqlo'
  },
  {
    logo: '/zara.png',
    label: 'zara'
  }
];

const Home = () => {
  const videoContant = useRef(null);

  return (
    <>
      <Header transparentToComponent={videoContant}></Header>
      <StartScreen></StartScreen>
      <main ref={videoContant} style={{ backgroundColor: colors.black }}>
        <IntroMainTextBlock />
        <PartnersLine  partners={mockPartners}/>
        <AwardMainTextBlock mt="xlg" px="md" />
        <Awards
          options={awardsItems}
          title="Our Awards"
          
          isAboutImg={false}
        />
      </main>
      <Footer pt="xlg"></Footer>
    </>
  );
};

export default Home;
