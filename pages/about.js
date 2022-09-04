import { useState } from "react";
import {
  Popovers,
  Preloader,
  Footer,
  Header,
  IntroAboutTextBlock,
  PhotoStartScreen,
  PreTitleSlider,
  RunningLineLink,
  DetailCardModal,
  Slider,
} from "components";
import { colors } from "styles";
import stateStorage from '../__data__/state-storage';

const ArrayImages = [
  "https://i.postimg.cc/XpHKgYBn/img-01.jpg",
  "https://i.postimg.cc/zVXSWgBd/img-02.jpg",
  "https://i.postimg.cc/fkvfJKwt/img-03.jpg",
  "https://i.postimg.cc/HjmtYKC1/img-04.jpg",
];

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
    client: "JACK MCGINITY KEY ERR",
    colourist: "JACK MCGINITY KEY ERR",
    video: {
      mp4: DEMO_VIDEO,
    },
  },
];

const About = () => {
    const [isOpen, setOpen] = useState(false);
    const [currentModalId, setCurrentModalId] = useState(-1);
  const [isAboutImg, setAboutImg] = useState(true);
  const SeniorColourists = [
    {
      modalId: "/",
      startLabel: "Сraig Saunders",
      endLabel: "Senior colourist",
      img: "https://images.unsplash.com/photo-1660598353451-9c5a0a0ff901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      modalId: "/",
      startLabel: "Ellen Kennedy",
      endLabel: "VFX-designer",
      img: "https://images.unsplash.com/photo-1514993805013-c428d7f63ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      modalId: "/",
      startLabel: "Miranda Bell",
      endLabel: "Creative director",
      img: "https://images.unsplash.com/photo-1660032109345-f513b154cc2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const Colourists = [
    {
      modalId: "/",
      startLabel: "Herman Payne",
      endLabel: "CEO-founder",
      img: "https://images.unsplash.com/photo-1548536082-6959567349c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      modalId: "/",
      startLabel: "Jeff Washington",
      endLabel: "Sales manager",
      img: "https://images.unsplash.com/photo-1660054031395-3c01627e8842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const Assistants = [
    {
      modalId: "/",
      startLabel: "Milton Hogan",
      endLabel: "Account",
      img: "https://images.unsplash.com/photo-1659492061718-f3708aae95d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      modalId: "/",
      startLabel: "Dexter Swanson",
      endLabel: "Account",
      img: "https://images.unsplash.com/photo-1659273145320-4a9750783c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      modalId: "/",
      startLabel: "Carla Garcia",
      endLabel: "Manager",
      img: "https://images.unsplash.com/photo-1502323703385-c3ea9ace787d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <>
      { stateStorage.hasInteractionWithPreloader ? null : <Preloader/> }
      <Header />
      <PhotoStartScreen
        arrayOfImages={ArrayImages}
        title={["We are", "color department"]}
      />
      <main style={{ backgroundColor: colors.black }}>
        <IntroAboutTextBlock pt="xlg" />
        <Popovers
          isAboutImg={isAboutImg}
          options={SeniorColourists}
          subtitle="Senior colourists"
          title="We are bold"
          mt="xlg"
          mb="lg"
          onClick={(modalId) => {
              setCurrentModalId(modalId);
              setOpen(true);
          }}
        />
        <Popovers
          options={Colourists}
          subtitle="Colourists"
          mt="lg"
          isAboutImg={isAboutImg}
          onClick={(modalId) => {
              setCurrentModalId(modalId);
              setOpen(true);
          }}
        />
        <Popovers
          options={Assistants}
          subtitle="Assistants"
          mt="lg"
          isAboutImg={isAboutImg}
          onClick={(modalId) => {
              setCurrentModalId(modalId);
              setOpen(true);
          }}
        />
        <PreTitleSlider mt="xlg" mb="md">
          Look at our selected works <br />
          to evaluate our capabilities and skills
        </PreTitleSlider>
        <Slider slides={slides} />
        <RunningLineLink
          mt="lg"
          outline={"true"}
          link={"/order"}
          titles={["LET’S TALK", "LET’S TALK", "LET’S TALK"]}
        />
          <DetailCardModal
              isOpen={isOpen}
              setOpen={setOpen}
              modalId={currentModalId}
          />
      </main>
      <Footer pt="xlg" />
    </>
  );
};

export default About;
