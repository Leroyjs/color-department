import { VideoGridItemWrapper } from "./video-grid-item.style";
import { VideoBackground } from "components";


export const VideoGridItem = (item) => {

	return (

		<VideoGridItemWrapper>

			<VideoBackground poster={item.poster} video={item.video} key={item.id} />

		</VideoGridItemWrapper>
	);
};
