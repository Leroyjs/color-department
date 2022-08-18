import { VideoGridWrapper } from "./video-grid.style";
import { VideoBackground } from "components";
import { useRef, useState } from "react";
import { VideoGridItem } from "components";
import { gridItems } from "./constant";
import { DropDown } from "components";

export const VideoGrid = () => {
  const videoRef = useRef();
  const [genre, setGenre] = useState(null);
  const [category, setCategory] = useState(null);
  const [colourist, setColourist] = useState(null);

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

  const genreFilter = [];
  const categoryFilter = [];
  const colouristFilter = [];
  const VideoList = gridItems.map(
    ({ poster, video, id, genre, category, colourist }) => (
      genreFilter.push(genre),
      categoryFilter.push(category),
      colouristFilter.push(colourist),
      (
        <VideoGridItem
          poster={poster}
          video={{ mp4: video }}
          key={id}
          autoPlay={false}
          ref={videoRef}
          onClick={handlePlay}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        />
      )
    )
  );
  new Set(genreFilter);
  return (
    <>
      {" "}
      <DropDown
        title="All categories"
        onChange={(option) => setCategory(option)}
        options={new Set(categoryFilter)}
        value={category}
      />
      <DropDown
        title="All genres"
        onChange={(option) => setGenre(option)}
        options={new Set(genreFilter)}
        value={genre}
      />
      <DropDown
        title="Select corourist"
        onChange={(option) => setColourist(option)}
        options={new Set(colouristFilter)}
        value={colourist}
      />
      <VideoGridWrapper>{VideoList}</VideoGridWrapper>
    </>
  );
};
