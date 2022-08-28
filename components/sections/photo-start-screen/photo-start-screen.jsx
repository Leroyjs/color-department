import {
    PhotoStartScreenWrapper, BlinkedPictureField, RunningLineStyle, GridWrapper, GridInner, Cell,
    BlinkPictureWrapper, Picture
} from './photo-start-screen.style';
import { RunningLine, Grid, Wolf } from 'components';
import React, { useCallback, useEffect, useState, useRef } from 'react';
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

const pictures = [
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
    'https://p.favim.com/orig/2018/12/11/dog-meme-mood-Favim.com-6664062.jpg',
    'http://tuva-news.net/img/20220315/bb931f4a244d46c7e09022250e133d0f.jpg',
    'https://sun9-30.userapi.com/impf/c841034/v841034207/58ecd/a0dr6Pw1MJ8.jpg?size=720x717&quality=96&sign=712f61e47cd25c6488a21c66836e7628&type=album'

]

/**
 * 
 * @param {*} range максимальное число
 * @param {*} count количество
 * @returns 
 */
function getRandomIndexes(range, count) {
    let m = {};
    let a = [];
    for (let i = 0; i < count; ++i) {
        let r = Math.floor(Math.random() * (range - i));
        a.push(((r in m) ? m[r] : r) + 1);
        let l = range - i - 1;
        m[r] = (l in m) ? m[l] : l;
    }
    return a.slice();
}

/**Перемешивание массива 
 * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
function shuffleArray(array) {
    const tmpArray = array.slice();
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return tmpArray
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const BlinkPicture = ({coordX,coordY,srcImg, delay, isVisible, ...props}) => {
    const [visible, setVisibility] = useState(isVisible);
    const elementRef = useRef();
    useEffect(()=>{
        elementRef.current.addEventListener('animationend',()=>{
            setVisibility(false);
        });
    },[])

    console.log(visible);

    return (
        <BlinkPictureWrapper
            ref={elementRef}
            {...props}
            coordX={coordX}
            coordY={coordY}
            isVisible={visible}
            delay={delay}
            >
                <img src={srcImg} />
        </BlinkPictureWrapper>
    )
}

export const PhotoStartScreen = () => {
    const [displayedCards, setDisplayedCards] = useState([]);
    const [foxIndexCell, setFoxIndexCell] = useState();
    const [animationDuration, setAnimationDuration] = useState();

    const pictureField = useRef(null)

    const getNewPicture = () => {
        const rnd = getRandomInt(arr.current.length);
        if (!arr.current[rnd].busy) {
            arr.current[rnd].busy = true;
            return { href: arr.current[rnd].href, index: rnd }
        } else {
            return undefined;
        }
    }
    const onComplete = (index) => {
        if (!index) return;
        arr.current[index].busy = false
    }

    useEffect(() => {
        const pictureFieldRect = pictureField.current.getBoundingClientRect();
        /**Высота и ширина сетки в пикселях*/
        const pictureBoxSize = pictureFieldRect.width * TEMPLATE_ROWS_VW / 100;
        /**Количество строк */
        const amountLine = Math.floor(pictureFieldRect.height / pictureBoxSize);
        /**Количество колонок */
        const amountColumn = Math.ceil(pictureFieldRect.width / pictureBoxSize);
        /**количество картинок при учете, что на 5-ть квадратов одна картинка */
        const amountPicture = Math.ceil(amountLine*amountColumn/5); 
        /**Создаем удобную структуру для работы с координатами */
        const coordsArray = []
        for (let Y = amountLine; Y !== 0; Y--) {
            for (let X = amountColumn; X !== 0; X--) {
                coordsArray.push({
                    x: X * pictureBoxSize,
                    y: pictureFieldRect.height - Y * pictureBoxSize,
                })
            }
        }

        const interval = setInterval(() => {
            const indexes = getRandomIndexes(coordsArray.length - 1, amountPicture)
            const newDisplaydArray = shuffleArray(coordsArray).filter((coordData, indexCoord) => indexes.includes(indexCoord))
            const shufflePicture = shuffleArray(pictures)
            
            newDisplaydArray.forEach((card,indx)=>{card.src = shufflePicture[indx]})
            setDisplayedCards(newDisplaydArray);
        }, 3000)


        return () => { clearInterval(interval) }

    }, []);

    return (
        <PhotoStartScreenWrapper>
            <BlinkedPictureField ref={pictureField}>
                {
                    displayedCards.map((card, indx) =>
                        <BlinkPicture 
                            key={indx}
                            delay={indx*300}
                            isVisible={true}
                            srcImg={card.src}
                            coordX={card.x} 
                            coordY={card.y}>
                        </BlinkPicture>
                    )
                }
            </BlinkedPictureField>
            <Grid></Grid>
            <RunningLine className={RunningLineStyle}></RunningLine>
        </PhotoStartScreenWrapper>
    )
}