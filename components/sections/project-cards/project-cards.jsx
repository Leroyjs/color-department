import { useEffect, useState } from "react";
import {
  ColouristFilter,
  DropDownsWrapper,
  MoreWrapper,
  ProjectPage,
} from "./project-cards.style";
import { ButtonEllipse, DropDown, WorksCards } from "components";

function getUniqValuesByKey(data = [], key = "") {
  const uniqValues = [];

  data.reduce((acc, item) => {
    if (acc.indexOf(item[key]) === -1) {
      acc.push(item[key]);
      uniqValues.push({ label: item[key], value: item[key] });
    }
    return acc;
  }, []);

  return uniqValues;
}

export const ProjectCards = () => {
  const { data, categories, genres, colourists } = useGetData();
  const [currentCategory, setCurrentCategory] = useState();
  const [currentGenre, setCurrentGenre] = useState();
  const [currentColourist, setCurrentColourist] = useState();
  const [cards, setCards] = useState(data);

  useEffect(() => {
    const filteredCards = data.filter(({ colourist, genre, category }) => {
      const isColorist =
        currentColourist?.value === colourist || !currentColourist?.value;
      const isGenre = currentGenre?.value === genre || !currentGenre?.value;
      const isCategory =
        currentCategory?.value === category || !currentCategory?.value;
      return isColorist && isGenre && isCategory;
    });

    setCards(filteredCards);
  }, [data, currentCategory, currentGenre, currentColourist]);

  return (
    <ProjectPage>
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
      <WorksCards cards={cards} />
      <MoreWrapper mt="md">
        <ButtonEllipse>More</ButtonEllipse>
      </MoreWrapper>
    </ProjectPage>
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
          mp4: "https://drive.google.com/uc?id=1ClreORL5H_AmhGoCL3N3RDkmVxpGk7Zd",
        },
        poster:
          "https://drive.google.com/uc?id=1M7s3Mcy2Ja15X8a04dY3IYUokaThYcUq",
        id: 1,
        colourist: "Aleks Ver",
        genre: "comedy",
        category: "ads",
        firstTitle: "El corte ingles",
        secondTitle: "show more",
        year: "2016",
        author: "Archangel Studios",
      },
      {
        video: {
          mp4: "https://drive.google.com/uc?id=1yUnz2C5tza_px2UkHJDyzkTtxnRPuO6D",
        },
        poster:
          "https://drive.google.com/uc?id=1n3jYxb5T0YnDCm1VTART2FL_0ayv6vis",
        id: 2,
        colourist: "Aleks Ver",
        genre: "horror",
        category: "film",
        firstTitle: "Paranormal drive",
        secondTitle: "show more",
        year: "2016",
        author: "Archangel Studios",
      },
      {
        video: {
          mp4: "https://drive.google.com/uc?id=11F0_m9TMiknOq9DHnpTnZLOpv2YrSp7n",
        },
        poster:
          "https://drive.google.com/uc?id=14-fs1zjmVxt1NBrbEhrwoSs_4Pzrt_Ar",
        id: 3,
        colourist: "Aleks Ver",
        genre: "adventure",
        category: "ads",
        firstTitle: "Zolla",
        secondTitle: "show more",
        year: "2021",
        author: "Archangel Studios",
      },
      {
        video: {
          mp4: "https://drive.google.com/uc?id=1ClreORL5H_AmhGoCL3N3RDkmVxpGk7Zd",
        },
        poster:
          "https://drive.google.com/uc?id=1M7s3Mcy2Ja15X8a04dY3IYUokaThYcUq",
        id: 4,
        colourist: "Aleks Ver",
        genre: "comedy",
        category: "ads",
        firstTitle: "El corte ingles",
        secondTitle: "show more",
        year: "2016",
        author: "Archangel Studios",
      },
      {
        video: {
          mp4: "https://drive.google.com/uc?id=1yUnz2C5tza_px2UkHJDyzkTtxnRPuO6D",
        },
        poster:
          "https://drive.google.com/uc?id=1n3jYxb5T0YnDCm1VTART2FL_0ayv6vis",
        id: 5,
        colourist: "Aleks Ver",
        genre: "horror",
        category: "film",
        firstTitle: "Paranormal drive",
        secondTitle: "show more",
        year: "2016",
        author: "Archangel Studios",
      },
      {
        video: {
          mp4: "https://drive.google.com/uc?id=11F0_m9TMiknOq9DHnpTnZLOpv2YrSp7n",
        },
        poster:
          "https://drive.google.com/uc?id=14-fs1zjmVxt1NBrbEhrwoSs_4Pzrt_Ar",
        id: 6,
        colourist: "Aleks Ver",
        genre: "adventure",
        category: "ads",
        firstTitle: "Zolla",
        secondTitle: "show more",
        year: "2021",
        author: "Archangel Studios",
      },
      
    ];
    const categories = getUniqValuesByKey(data, "category");
    const genres = getUniqValuesByKey(data, "genre");
    const colourists = getUniqValuesByKey(data, "colourist");

    setData(data);
    setCategories(categories);
    setGenres(genres);
    setColourists(colourists);
  }, []);

  return { data, categories, genres, colourists };
}
