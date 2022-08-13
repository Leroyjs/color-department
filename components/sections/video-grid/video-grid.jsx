import { VideoGridWrapper } from "./video-grid.style";
import { VideoBackground } from "components";
import { useRef } from "react";
import { VideoGridItem } from "components";




export const VideoGrid = () => {

 const gridItems = [
  {
    video:
      "https://user-images.githubusercontent.com/70715305/174163866-72e76540-1982-4e8a-bb40-383cf3ca2491.mp4",
    // poster:
    //   "https://phonoteka.org/uploads/posts/2021-05/1622021938_9-phonoteka_org-p-pop-arti-krasivo-11.jpg",
    id: 1,
  },
  {
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4	",
    // poster:
    //   "https://static.tildacdn.com/tild6363-6630-4436-a132-633033393666/Pop-Art-sochny-j.jpg",
    id: 9,
  },
  {
    video: "../../../assets/video/Mr.Kitty - After Dark.mp4",
    // poster: "https://i.ytimg.com/vi/kYRUg7Vfits/maxresdefault.jpg",
    id: 2,
  },
  {
    video: "../../../assets/video/imagine-jojo.mp4",
    // poster:
    //   "https://proprikol.ru/wp-content/uploads/2021/02/sychi-krasivye-kartinki-5.jpg",
    id: 3,
  },
  {
    video: "../../../assets/video/its-dudes.mp4",
    // poster:
    //   "https://phonoteka.org/uploads/posts/2021-05/1622021938_9-phonoteka_org-p-pop-arti-krasivo-11.jpg",
    id: 4,
  },
  {
    video: "../../../assets/video/Mr.Kitty - After Dark.mp4",
    // poster: "https://i.ytimg.com/vi/kYRUg7Vfits/maxresdefault.jpg",
    id: 5,
  },
  {
    video: "../../../assets/video/Mr.Kitty - After Dark.mp4",
    // poster: "https://i.ytimg.com/vi/kYRUg7Vfits/maxresdefault.jpg",
    id: 6,
  },
  {
    video: "../../../assets/video/imagine-jojo.mp4",
    // poster: "https://i.ytimg.com/vi/kYRUg7Vfits/maxresdefault.jpg",
    id: 7,
  },
  {
    video: "../../../assets/video/Mr.Kitty - After Dark.mp4",
    // poster: "https://i.ytimg.com/vi/kYRUg7Vfits/maxresdefault.jpg",
    id: 8,
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

const VideoList =	gridItems.map((item) => (

  <VideoGridItem
            video={item.video}
            key={item.id}
            autoPlay={false}
            ref={videoRef}
            onClick={handlePlay}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}/>

	))





	return (

		<VideoGridWrapper>
			{VideoList}
		</VideoGridWrapper>
	);
};