import {
    PhotoStartScreenWrapper, RunningLineStyle, GridWrapper, GridInner, Cell,
    BlinkPictureWrapper

} from './photo-start-screen.style';
import { RunningLine, Grid, VideoBackground, Wolf } from 'components';
import { useCallback, useEffect, useState, useRef } from 'react';
import { getArrayOfIndex } from 'styles';
import Image from 'next/image';

//TODO: Ну а как иначе, а что ты мне сделаешь, я в другом городе
const TEMPLATE_ROWS_VW = 12.5;

const picture1 = 'https://storage.yandexcloud.net/printio/assets/realistic_views/canvas50x50/tile/0a106dcc02179b40eaccc1b563b7e6aa26e32ac6.png?1534621139'
const picture2 = 'https://kartinkin.net/uploads/posts/2022-03/1647910227_49-kartinkin-net-p-pepe-kartinki-52.png'
const picture3 = 'https://kartinkin.net/uploads/posts/2022-03/1647910127_4-kartinkin-net-p-pepe-kartinki-4.jpg'
const picture4 = 'https://kartinkin.net/uploads/posts/2022-03/1647910092_1-kartinkin-net-p-pepe-kartinki-1.png'
const picture5 = 'https://kartinkin.net/uploads/posts/2022-03/1647910110_9-kartinkin-net-p-pepe-kartinki-9.png'
const picture6 = 'https://kartinkin.net/uploads/posts/2022-03/1647910116_7-kartinkin-net-p-pepe-kartinki-7.png'

const arrTMP = [
    { href: picture1, busy: false },
    { href: picture2, busy: false },
    { href: picture3, busy: false },
    { href: picture4, busy: false },
    { href: picture5, busy: false },
    { href: picture6, busy: false },
]


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const BlinkPicture = ({
    frequency = 1000,
    durationAnimationSec = 0.25,
    getPicture = () => { },
    onComplete = () => { },
    children,
    displayDuration = undefined }) => {

    const [imgSrc, setImgSrc] = useState();
    const [isVisible, setVisible] = useState(false);
    const [selectedIndex, setIndex] = useState(undefined);

    useEffect(() => {
        const interval = setInterval(() => {
            onComplete(selectedIndex);
            setVisible(false);
            setIndex(undefined);
            if (!isVisible) {
                const picture = getPicture();
                console.log('getPicture', picture)
                if (picture?.href) {
                    setImgSrc(picture.href)
                    setIndex(picture.index);
                }
            }
        }, frequency);
        return () => { clearInterval(interval) }
    }, [])

    useEffect(() => {
        setVisible(true)
    }, [imgSrc])

    return (
        <BlinkPictureWrapper BlinkPictureWrapper
            isVisible={isVisible}
            animationDuration={durationAnimationSec} >
            {
                children ? children : <img src={imgSrc}></img>
            }
        </BlinkPictureWrapper>
    )
}

export const PhotoStartScreen = () => {
    const [activeLineAmount, setActiveLine] = useState(0);
    const [cellAmount, setCellAmount] = useState(0);
    const [foxIndexCell, setFoxIndexCell] = useState();
    const arr = useRef(arrTMP)

    const getNewPicture = () => {
        const rnd = getRandomInt(arr.current.length);
        console.log(arr.current);
        if (!arr.current[rnd].busy) {
            arr.current[rnd].busy = true;
            return { href: arr.current[rnd].href, index: rnd }
        } else {
            return undefined;
        }
    }

    const onComplete = (index) => {
        if (!index) return;
        console.log(index);
        arr.current[index].busy = false
    }

    useEffect(() => {
        const cellHeight = window.screen.width * TEMPLATE_ROWS_VW / 100;
        const amountLine = Math.floor((window.screen.height - cellHeight - cellHeight / 2) / cellHeight);
        const amoutCellsInLine = Math.ceil(window.screen.width / cellHeight);
        //Позиция лисицы - левый нижний угол, в этой ячейке не будем отображать фотографии
        const foxIndex = (amountLine - 1) * amoutCellsInLine;
        setFoxIndexCell(foxIndex);
        setActiveLine(amountLine);
        setCellAmount(amountLine * amoutCellsInLine);
    }, []);

    return (
        <PhotoStartScreenWrapper>
            <GridWrapper>
                <GridInner lineAmount={activeLineAmount}>
                    {getArrayOfIndex(cellAmount).map((_, indx) =>

                        <Cell key={indx}>
                            {indx === foxIndexCell ?
                                <BlinkPicture
                                    durationSec={0.05}
                                    displayDuration={50}
                                >
                                    <Wolf></Wolf>
                                </BlinkPicture>
                                :
                                <BlinkPicture
                                    getPicture={getNewPicture}
                                    onComplete={onComplete}
                                ></BlinkPicture>
                            }
                        </Cell>
                    )}
                </GridInner>
                <Grid></Grid>
            </GridWrapper>
            <RunningLine className={RunningLineStyle}></RunningLine>
        </PhotoStartScreenWrapper>
    )
}



// useEffect(() => {
//     const interval = setInterval(() => {
//         const rnd = getRandomInt(pictureArray.length)
//         const mustChange = Math.round(Math.random());
//         if (!isVisible && mustChange && !pictureArray[rnd].busy) {
//             pictureArray[rnd].busy = true;
//             pictureArray[selectedImageIndex].busy = false;
//             setImageIndex(rnd);
//         }
//         if (mustChange) { setVisible(prev => !prev); }
//     }, frequency);
//     return () => { clearInterval(interval) }
// })