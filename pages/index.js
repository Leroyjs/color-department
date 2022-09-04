import React, { useRef } from "react";
import {
  AwardMainTextBlock,
  Footer,
  Header,
  IntroMainTextBlock,
  PartnersLine,
  Slider,
  StartScreen,
  Preloader,
} from "components";

import { Awards } from "components";
import { colors } from "styles";
import stateStorage  from '../__data__/state-storage'

const DEMO_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";
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
    logo: "https://svgshare.com/i/mCU.svg",
    label: "century",
  },
  {
    logo: "https://svgshare.com/i/mBj.svg",
    label: "apple",
  },
  {
    logo: "https://svgshare.com/i/m9Y.svg",
    label: "dream-works",
  },
  {
    logo: "https://svgshare.com/i/mCJ.svg",
    label: "netflix",
  },
  {
    logo: "https://svgshare.com/i/mCw.svg",
    label: "pizza-hunt",
  },
  {
    logo: "https://svgshare.com/i/m9Y.svg",
    label: "uniqlo",
  },
  {
    logo: "https://svgshare.com/i/mC4.svg",
    label: "zara",
  },
];
const slides = [
  {
    title: "El corte ingles",
    poster:
      "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
    client: "Archangel Studios",
    colourist: "Archangel Studios",
    video: {
      mp4: DEMO_VIDEO,
    },
  },
  {
    title: "Lil pump",
    poster:
      "https://i.vimeocdn.com/video/1098107786-66e16e6c38f322badf0757fb378d618222697e1e0a3fada0b993df076daea72f-d",
    client: "JACK MCGINITY",
    colourist: "JACK MCGINITY",
    video: {
      mp4: DEMO_VIDEO,
    },
  },
  {
    title: "Balkan line",
    poster:
      "https://i.vimeocdn.com/video/969956438-651eaae49450178bd03a0a1a7a19d5daf29ee7e56c410f9507e95e04117952ff-d",
    client: "ANDRIC WATSON",
    colourist: "ANDRIC WATSON",
    video: {
      mp4: DEMO_VIDEO,
    },
  },
  {
    title: "Paranormal drive",
    poster:
      "https://i.vimeocdn.com/video/1104167332-6b4e20f12306d88f5a65f940acd631da3d03163d57f77fd2052b4ae260f09cb5-d",
    client: "Find out more",
    colourist: "Find out more",
    video: {
      mp4: DEMO_VIDEO,
    },
  },

  {
    title: "Zolla",
    poster:
      "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
    client: "vimeocdn",
    colourist: "vimeocdn",
    video: {
      mp4: DEMO_VIDEO,
    },
  },
  {
    title: "In the hood",
    poster:
      "https://i.vimeocdn.com/video/1098107786-66e16e6c38f322badf0757fb378d618222697e1e0a3fada0b993df076daea72f-d",
    client: "El corte ingles",
    colourist: "El corte ingles",
    video: {
      mp4: DEMO_VIDEO,
    },
  },
  {
    title: "projects",
    poster:
      "https://i.vimeocdn.com/video/969956438-651eaae49450178bd03a0a1a7a19d5daf29ee7e56c410f9507e95e04117952ff-d",
    client: "Studios",
    colourist: "Studios",
    video: {
      mp4: DEMO_VIDEO,
    },
  },
  {
    title: "All categories",
    poster:
      "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
    client: "Archangel",
    colourist: "Archangel",
    video: {
      mp4: DEMO_VIDEO,
    },
  },
  {
    title: "All genres",
    poster:
      "https://i.vimeocdn.com/video/1104167332-6b4e20f12306d88f5a65f940acd631da3d03163d57f77fd2052b4ae260f09cb5-d",
    client: "Balkan line",
    colourist: "Balkan line",
    video: {
      mp4: DEMO_VIDEO,
    },
  },

  {
    title: "Select corourist",
    poster:
      "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
    client: "JACK MCGINITY  KEY ERR",
    colourist: "JACK MCGINITY  KEY ERR",
    video: {
      mp4: DEMO_VIDEO,
    },
  },
];

const Home = () => {
  const videoContant = useRef(null);
  console.log();
  return (
    <>
      { stateStorage.hasInteractionWithPreloader ? null : <Preloader></Preloader> }
      <Header transparentToComponent={videoContant} />
      <StartScreen />
      <main ref={videoContant} style={{ backgroundColor: colors.black }}>
        <IntroMainTextBlock />
        <PartnersLine partners={mockPartners} />
        <Slider
          slides={slides}
          title={
            <span>
              Our work worthy of your <br /> attention
            </span>
          }
        />
        <AwardMainTextBlock mt="xlg" px="md" />
        <Awards options={awardsItems} title="Our Awards" isAboutImg={false} />
      </main>
      <Footer pt="xlg" />
    </>
  );
};

export default Home;
