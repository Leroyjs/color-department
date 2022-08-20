import { DropDownsWrapper, VideoGridWrapper } from "./video-grid.style";
import { VideoBackground } from "components";
import { useRef, useState, useState } from "react";
import { VideoGridItem } from "components";
import { DropDown } from "components";
import { WorksCards } from "components";

export const VideoGrid = () => {
  const [category, setCategory] = useState("");
  const [genre, setGenre] = useState("");
  const [colourist, setColourist] = useState("");

  const gridItems = [
    {
      video:
        "https://user-images.githubusercontent.com/70715305/174163866-72e76540-1982-4e8a-bb40-383cf3ca2491.mp4",
      poster:
        "https://phonoteka.org/uploads/posts/2021-05/1622021938_9-phonoteka_org-p-pop-arti-krasivo-11.jpg",
      id: 1,
      colourist: "100% height",
      genre: "drama",
      category: "movie",
      firstTitle: "lol",
      secondTitle: "kek",
      year: "1488",
    },
    {
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4	",
      poster:
        "https://static.tildacdn.com/tild6363-6630-4436-a132-633033393666/Pop-Art-sochny-j.jpg",
      id: 9,
      colourist: "100% height",
      genre: "horror",
      category: "clip",
      firstTitle: "lol",
      secondTitle: "kek",
      year: "1488",
    },
    {
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      poster: "https://i.ytimg.com/vi/kYRUg7Vfits/maxresdefault.jpg",
      id: 2,
      colourist: "SEGA MEGA DRIVE",
      genre: "comedy",
      category: "movie",
      firstTitle: "lol",
      secondTitle: "kek",
      year: "1488",
    },
    {
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      poster:
        "https://proprikol.ru/wp-content/uploads/2021/02/sychi-krasivye-kartinki-5.jpg",
      id: 3,
      colourist: "100% height",
      genre: "drama",
      category: "film",
      firstTitle: "lol",
      secondTitle: "kek",
      year: "1488",
    },
    {
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      poster:
        "https://phonoteka.org/uploads/posts/2021-05/1622021938_9-phonoteka_org-p-pop-arti-krasivo-11.jpg",
      id: 4,
      colourist: "Dmitrix",
      genre: "comedy",
      category: "film",
      firstTitle: "lol",
      secondTitle: "kek",
      year: "1488",
    },
    {
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: "https://i.ytimg.com/vi/kYRUg7Vfits/maxresdefault.jpg",
      id: 5,
      colourist: "SEGA MEGA DRIVE",
      genre: "drama",
      category: "movie",
      firstTitle: "lol",
      secondTitle: "kek",
      year: "1488",
    },
    {
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      poster: "https://i.ytimg.com/vi/kYRUg7Vfits/maxresdefault.jpg",
      id: 6,
      colourist: "Dmitrix",
      genre: "horror",
      category: "film",
      firstTitle: "lol",
      secondTitle: "kek",
      year: "1488",
    },
    {
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      poster: "https://i.ytimg.com/vi/kYRUg7Vfits/maxresdefault.jpg",
      id: 7,
      colourist: "SEGA MEGA DRIVE",
      genre: "comedy",
      category: "clip",
      firstTitle: "lol",
      secondTitle: "kek",
      year: "1488",
    },
    {
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      poster: "https://i.ytimg.com/vi/kYRUg7Vfits/maxresdefault.jpg",
      id: 8,
      colourist: "Dmitrix",
      genre: "horror",
      category: "clip",
      firstTitle: "lol",
      secondTitle: "kek",
      year: "1488",
    },
  ];

  const videoRef = useRef();

   function handleEnter(event) {
     const { target } = event;
     if (target.currentTime > 0.001) target.play();
   }

   function handleLeave(event) {
     const { target } = event;
     target.pause();
   }

   function handlePlay() {
     const videoEl = videoRef.current;
     if (!videoEl) return;
     videoEl.play();
  }

  const categoryFilter = [];
  const genreFilter = [];
  const colouristFilter = [];

  const VideoList = gridItems.map(
    (card) => (
      categoryFilter.push(card.category),
      genreFilter.push(card.genre),
      colouristFilter.push(card.colourist),
      (<WorksCards cards={card} />)
    )
  );

  // console.log(new Set(categoryFilter));
  // console.log(new Set(genreFilter));
  // console.log(new Set(colouristFilter));
  const genreOptions = [];
  const categoryOptions = [];
  const colouristOptions = [];
  const uniqueCategoryFilter = [...new Set(categoryFilter)];
  const uniqueGenreFilter = [...new Set(genreFilter)];
  const uniqueColouristFilter = [...new Set(colouristFilter)];

  uniqueGenreFilter.map((option) =>
    genreOptions.push({
      label: option,
      value: option,
    })
  );
  uniqueCategoryFilter.map((option) =>
    categoryOptions.push({
      label: option,
      value: option,
    })
  );
  uniqueColouristFilter.map((option) =>
    colouristOptions.push({
      label: option,
      value: option,
    })
  );

  return (
    <>
      <DropDownsWrapper>
        <DropDown
          mb="md"
          title="All category"
          onChange={(option) => setCategory(option)}
          options={categoryOptions}
        />
        <DropDown
          mb="md"
          title="All genres"
          onChange={(option) => setGenre(option)}
          options={genreOptions}
          value={genre}
        />
        <DropDown
          mb="md"
          title="All colourist"
          onChange={(option) => setColourist(option)}
          options={colouristOptions}
          value={colourist}
        />
      </DropDownsWrapper>
    </>
  );
};
