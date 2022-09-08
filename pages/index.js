import React, { useRef, useEffect, useState } from "react";
import {
  AwardMainTextBlock,
  Footer,
  Header,
  IntroMainTextBlock,
  PartnersLine,
  Slider,
  StartScreen,
  Preloader,
  Popovers
} from "components";
import { colors } from "styles";

const DEMO_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";
const awardsItems = [
  {
    href: "/",
    startLabel: "D&AD",
    endLabel: "Balkan line",
    img: "/award-2.svg",
  },
  {
    href: "/",
    startLabel: "CANNES LIONS",
    endLabel: "El corte ingles",
    img: "/award-2.svg",
  },
  {
    href: "/",
    startLabel: "WEBBY",
    endLabel: "Zolla",
    img: "/award-2.svg",
  },
  {
    href: "/",
    startLabel: "ONE SHOW",
    endLabel: "Lil pump",
    img: "/award-2.svg",
  },
];
const mockPartners = [
  {
    logo: "/20-century.png",
    label: "century",
  },
  {
    logo: "/apple.png",
    label: "apple",
  },
  {
    logo: "/dream-works.png",
    label: "dream-works",
  },
  {
    logo: "/netflix.png",
    label: "netflix",
  },
  {
    logo: "/pizza-hunt.png",
    label: "pizza-hunt",
  },
  {
    logo: "/uniqlo.png",
    label: "uniqlo",
  },
  {
    logo: "/zara.png",
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
      mp4: "https://drive.google.com/uc?id=1sSJQF1aWaEs384M8ni4G7KpqLtqPx4za",
    },
  },
  {
    title: "Lil pump",
    poster:
      "https://i.vimeocdn.com/video/1098107786-66e16e6c38f322badf0757fb378d618222697e1e0a3fada0b993df076daea72f-d",
    client: "JACK MCGINITY",
    colourist: "JACK MCGINITY",
    video: {
      mp4: "https://drive.google.com/uc?id=1iSNLWmHI7aB72zl53b6LKrz60SJQJ4k1",
    },
  },
  {
    title: "Balkan line",
    poster:
      "https://i.vimeocdn.com/video/969956438-651eaae49450178bd03a0a1a7a19d5daf29ee7e56c410f9507e95e04117952ff-d",
    client: "ANDRIC WATSON",
    colourist: "ANDRIC WATSON",
    video: {
      mp4: "https://drive.google.com/uc?id=1Xdyt6G1AU-2Ef-Nas0HcsOxd3Lt6keqO",
    },
  },
  {
    title: "Paranormal drive",
    poster:
      "https://i.vimeocdn.com/video/1104167332-6b4e20f12306d88f5a65f940acd631da3d03163d57f77fd2052b4ae260f09cb5-d",
    client: "Find out more",
    colourist: "Find out more",
    video: {
      mp4: "https://drive.google.com/uc?id=1AfYOdwOXA8kq9aS3SerSV2zDam_xQiyf",
    },
  },

  {
    title: "Zolla",
    poster:
      "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
    client: "vimeocdn",
    colourist: "vimeocdn",
    video: {
      mp4: "https://drive.google.com/uc?id=1cZrJhilm5Zn8DXCurTSM7X2ObEvfhaoK",
    },
  },
  {
    title: "In the hood",
    poster:
      "https://i.vimeocdn.com/video/1098107786-66e16e6c38f322badf0757fb378d618222697e1e0a3fada0b993df076daea72f-d",
    client: "El corte ingles",
    colourist: "El corte ingles",
    video: {
      mp4: "https://drive.google.com/uc?id=1XPHq3zPl6i2BTF1ot0yjPORM-uow8qRv",
    },
  },
  {
    title: "projects",
    poster:
      "https://i.vimeocdn.com/video/969956438-651eaae49450178bd03a0a1a7a19d5daf29ee7e56c410f9507e95e04117952ff-d",
    client: "Studios",
    colourist: "Studios",
    video: {
      mp4: "https://drive.google.com/uc?id=1d0FEvvbsleJ0T2XCuu75raRDrH93LCpx",
    },
  },
  // {
  //   title: "All categories",
  //   poster:
  //     "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
  //   client: "Archangel",
  //   colourist: "Archangel",
  //   video: {
  //     mp4: DEMO_VIDEO,
  //   },
  // },
  // {
  //   title: "All genres",
  //   poster:
  //     "https://i.vimeocdn.com/video/1104167332-6b4e20f12306d88f5a65f940acd631da3d03163d57f77fd2052b4ae260f09cb5-d",
  //   client: "Balkan line",
  //   colourist: "Balkan line",
  //   video: {
  //     mp4: DEMO_VIDEO,
  //   },
  // },

  // {
  //   title: "Select corourist",
  //   poster:
  //     "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
  //   client: "JACK MCGINITY  KEY ERR",
  //   colourist: "JACK MCGINITY  KEY ERR",
  //   video: {
  //     mp4: DEMO_VIDEO,
  //   },
  // },
];

const Home = () => {
  const videoContant = useRef(null);
  
return (
  <>
    <Preloader />
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
      <Popovers options={awardsItems} title="Our Awards" isAboutImg={false} />
    </main>
    <Footer pt="xlg" />
  </>
);
};

export default Home;
