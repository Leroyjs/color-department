import React, {useRef, useState} from 'react';
import {propTypesVideoBg} from "../../types";
import {VideoBackground} from "components";
import {PropTypes} from "prop-types";
import {CardCaption, CardFooter, CardTitle, CardTitleWrapper, CardWrapper} from "./works-card.style";

export const WorksCard = ({poster, video, href = "/", firstTitle, secondTitle = "", author, year}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <CardWrapper href={href} p="md"
                     onMouseEnter={() => setIsPlaying(true)}
                     onMouseLeave={() => setIsPlaying(false)}>
            <VideoBackground
                poster={poster}
                video={video}
                playing={isPlaying}
            />

            <CardTitle wrapperProps={{className: CardTitleWrapper}}
                       data-default={firstTitle}
                       data-hover={secondTitle || firstTitle}>
                {firstTitle}
            </CardTitle>

            <CardFooter>
                <CardCaption color="white">{author}</CardCaption>
                <CardCaption color="white">{year}</CardCaption>
            </CardFooter>
        </CardWrapper>
    );
};

WorksCard.propTypes = {
    ...propTypesVideoBg,
    href: PropTypes.string.isRequired,
    firstTitle: PropTypes.string.isRequired,
    secondTitle: PropTypes.string,
    author: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
}
