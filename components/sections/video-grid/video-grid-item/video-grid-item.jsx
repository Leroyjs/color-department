import { VideoGridItemWrapper } from "./video-grid-item.style";
import { VideoBackground } from "components";


export const VideoGridItem = (item) => {

	return (

		<VideoGridItemWrapper>

			<VideoBackground video={item.video} poster={item.poster} key={item.id} />

		</VideoGridItemWrapper>
	);
};
