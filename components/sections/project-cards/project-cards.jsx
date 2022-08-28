import {useEffect, useState} from "react";
import {ColouristFilter, DropDownsWrapper, MoreWrapper} from "./project-cards.style";
import {ButtonEllipse, DropDown, WorksCards} from "components";

function getUniqValuesByKey(data = [], key = '') {
    const uniqValues = [];

    data.reduce((acc, item) => {
        if (acc.indexOf(item[key]) === -1) {
            acc.push(item[key])
            uniqValues.push({label: item[key], value: item[key]})
        }
        return acc;
    }, []);

    return uniqValues;
}

export const ProjectCards = () => {
    const {data, categories, genres, colourists} = useGetData();
    const [currentCategory, setCurrentCategory] = useState();
    const [currentGenre, setCurrentGenre] = useState();
    const [currentColourist, setCurrentColourist] = useState();
    const [cards, setCards] = useState(data);

    useEffect(() => {
        const filteredCards = data.filter(({colourist, genre, category}) => {
            const isColorist = currentColourist?.value === colourist || !currentColourist?.value;
            const isGenre = currentGenre?.value === genre || !currentGenre?.value;
            const isCategory = currentCategory?.value === category || !currentCategory?.value;
            return isColorist && isGenre && isCategory;
        })

        setCards(filteredCards);
    }, [data, currentCategory, currentGenre, currentColourist])

    return (
        <>
            <DropDownsWrapper>
                <DropDown
                    mb="md"
                    title="All category"
                    onChange={(option) => setCurrentCategory(option)}
                    options={categories}
                    value={currentCategory}
                />
                <DropDown
                    mb="md"
                    title="All genres"
                    onChange={(option) => setCurrentGenre(option)}
                    options={genres}
                    value={currentGenre}
                />
                <ColouristFilter>
                    <DropDown
                        mb="md"
                        title="All colourist"
                        onChange={(option) => setCurrentColourist(option)}
                        options={colourists}
                        value={currentColourist}
                    />
                </ColouristFilter>
            </DropDownsWrapper>
            <WorksCards cards={cards}/>
            <MoreWrapper mt="md">
                <ButtonEllipse>
                    More
                </ButtonEllipse>
            </MoreWrapper>
        </>
    );
};

function useGetData() {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [genres, setGenres] = useState([]);
    const [colourists, setColourists] = useState([]);

    useEffect(() => {
        const data = [
          {
            video: {
              mp4: "https://user-images.githubusercontent.com/70715305/174163866-72e76540-1982-4e8a-bb40-383cf3ca2491.mp4",
            },
            poster: "../../../assets/images/projects/_cover_ECI.jpg",
            id: 1,
            colourist: "100% height",
            genre: "drama",
            category: "movie",
            firstTitle: "El corte ingles",
            secondTitle: "show more",
            year: "2016",
            author: "Archangel Studios",
          },
          {
            video: {
              mp4: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4	",
            },
            poster: "../../../assets/images/projects/_cover_LilPump.jpg",
            id: 9,
            colourist: "100% height",
            genre: "horror",
            category: "clip",
            firstTitle: "Lil pump",
            secondTitle: "show more",
            year: "2016",
            author: "Archangel Studios",
          },
          {
            video: {
              mp4: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
              poster: "../../../assets/images/projects/_cover_BLK.jpg",
            },
            id: 2,
            colourist: "SEGA MEGA DRIVE",
            genre: "comedy",
            category: "movie",
            firstTitle: "Balkan line",
            secondTitle: "show more",
            year: "2021",
            author: "Archangel Studios",
          },
          {
            video: {
              mp4: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
            },
            poster: "../../../assets/images/projects/_cover_PDrive.jpg",
            id: 3,
            colourist: "100% height",
            genre: "drama",
            category: "film",
            firstTitle: "Paranormal drive",
            secondTitle: "show more",
            year: "2016",
            author: "Archangel Studios",
          },
          {
            video: {
              mp4: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            },
            poster: "../../../assets/images/projects/_cover_Zolla.jpg",
            id: 4,
            colourist: "Dmitrix",
            genre: "comedy",
            category: "film",
            firstTitle: "Zolla",
            secondTitle: "show more",
            year: "2021",
            author: "Archangel Studios",
          },
          {
            video: {
              mp4: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            },
            poster: "../../../assets/images/projects/_cover_NR.jpg",
            id: 5,
            colourist: "SEGA MEGA DRIVE",
            genre: "drama",
            category: "movie",
            firstTitle: "In the hood",
            secondTitle: "show more",
            year: "2019",
            author: "Archangel Studios",
          },
          {
            video: {
              mp4: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            },
            poster: "https://i.ytimg.com/vi/kYRUg7Vfits/maxresdefault.jpg",
            id: 6,
            colourist: "Dmitrix",
            genre: "horror",
            category: "film",
            firstTitle: "El corte ingles",
            secondTitle: "show more",
            year: "2016",
            author: "Archangel Studios",
          },
          {
            video: {
              mp4: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
            },
            poster: "https://i.ytimg.com/vi/kYRUg7Vfits/maxresdefault.jpg",
            id: 7,
            colourist: "SEGA MEGA DRIVE",
            genre: "comedy",
            category: "clip",
            firstTitle: "Lil pump",
            secondTitle: "show more",
            year: "2016",
            author: "Archangel Studios",
          },
          {
            video: {
              mp4: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
            },
            poster: "https://i.ytimg.com/vi/kYRUg7Vfits/maxresdefault.jpg",
            id: 8,
            colourist: "Dmitrix",
            genre: "horror",
            category: "clip",
            firstTitle: "lol",
            secondTitle: "show more",
            year: "2016",
            author: "Archangel Studios",
          },
        ];
        const categories = getUniqValuesByKey(data, 'category');
        const genres = getUniqValuesByKey(data, 'genre');
        const colourists = getUniqValuesByKey(data, 'colourist');

        setData(data);
        setCategories(categories);
        setGenres(genres);
        setColourists(colourists);
    }, []);

    return {data, categories, genres, colourists}
}
