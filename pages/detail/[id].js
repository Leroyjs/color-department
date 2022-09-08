import React from 'react';
import { DetailTitle, Slider, Footer, Stakeholders, VideoPlayer, Header } from "components";
import styled from '@emotion/styled';
import { sizes, breakpointsWidth } from 'styles';
import {useRouter} from "next/router";

const DEMO_VIDEO =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";
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
      mp4: "https://drive.google.com/uc?id=1sSJQF1aWaEs384M8ni4G7KpqLtqPx4za",
    },
  },
  {
    title: "Balkan line",
    poster:
      "https://i.vimeocdn.com/video/969956438-651eaae49450178bd03a0a1a7a19d5daf29ee7e56c410f9507e95e04117952ff-d",
    client: "ANDRIC WATSON",
    colourist: "ANDRIC WATSON",
    video: {
      mp4: "https://drive.google.com/uc?id=1sSJQF1aWaEs384M8ni4G7KpqLtqPx4za",
    },
  },
  {
    title: "Paranormal drive",
    poster:
      "https://i.vimeocdn.com/video/1104167332-6b4e20f12306d88f5a65f940acd631da3d03163d57f77fd2052b4ae260f09cb5-d",
    client: "Find out more",
    colourist: "Find out more",
    video: {
      mp4: "https://drive.google.com/uc?id=1sSJQF1aWaEs384M8ni4G7KpqLtqPx4za",
    },
  },

  {
    title: "Zolla",
    poster:
      "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
    client: "vimeocdn",
    colourist: "vimeocdn",
    video: {
      mp4: "https://drive.google.com/uc?id=1sSJQF1aWaEs384M8ni4G7KpqLtqPx4za",
    },
  },
  {
    title: "In the hood",
    poster:
      "https://i.vimeocdn.com/video/1098107786-66e16e6c38f322badf0757fb378d618222697e1e0a3fada0b993df076daea72f-d",
    client: "El corte ingles",
    colourist: "El corte ingles",
    video: {
      mp4: "https://drive.google.com/uc?id=1sSJQF1aWaEs384M8ni4G7KpqLtqPx4za",
    },
  },
  {
    title: "projects",
    poster:
      "https://i.vimeocdn.com/video/969956438-651eaae49450178bd03a0a1a7a19d5daf29ee7e56c410f9507e95e04117952ff-d",
    client: "Studios",
    colourist: "Studios",
    video: {
      mp4: "https://drive.google.com/uc?id=1sSJQF1aWaEs384M8ni4G7KpqLtqPx4za",
    },
  },
  {
    title: "All categories",
    poster:
      "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
    client: "Archangel",
    colourist: "Archangel",
    video: {
      mp4: "https://drive.google.com/uc?id=1sSJQF1aWaEs384M8ni4G7KpqLtqPx4za",
    },
  },
  {
    title: "All genres",
    poster:
      "https://i.vimeocdn.com/video/1104167332-6b4e20f12306d88f5a65f940acd631da3d03163d57f77fd2052b4ae260f09cb5-d",
    client: "Balkan line",
    colourist: "Balkan line",
    video: {
      mp4: "https://drive.google.com/uc?id=1sSJQF1aWaEs384M8ni4G7KpqLtqPx4za",
    },
  },

  {
    title: "Select corourist",
    poster:
      "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
    client: "JACK MCGINITY  KEY ERR",
    colourist: "JACK MCGINITY  KEY ERR",
    video: {
      mp4: "https://drive.google.com/uc?id=1sSJQF1aWaEs384M8ni4G7KpqLtqPx4za",
    },
  },
];

const MainComponent = styled.main`
    padding-top: ${sizes["desktopLG"].half};
    @media screen and (max-width: ${breakpointsWidth.tabletLG}){
      padding-top: ${sizes["tabletLG"].thirdX2};
    }
    @media screen and (max-width: ${breakpointsWidth.phone}){
      padding-top: ${sizes["tabletLG"].x1};
    }
`

const DetailCardPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Header />
            <MainComponent>
                <DetailTitle title="Balkan line" year="2021" py="lg" />
                <Slider slides={slides} isSimpleMode />
                <Stakeholders mt="md" mb="xlg"
                    client="Archangel Studios"
                    colourist="JACK MCGINITY"
                    director="OZZIE PULLIN"
                    dop="ANDRIC WATSON" />
                <VideoPlayer />
            </MainComponent>
            <Footer pt="xlg" />
        </>
    );
};

export default DetailCardPage;
