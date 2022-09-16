import { useEffect, useState } from 'react'
import {
  ColouristFilter,
  DropDownsWrapper,
  MoreWrapper,
  NotFound,
  ProjectPage,
} from './project-cards.style'
import { ButtonEllipse, DropDown, WorksCards } from 'components'

function getUniqValuesByKey(data = [], key = '') {
  const uniqValues = []

  data.reduce((acc, item) => {
    if (acc.indexOf(item[key]) === -1) {
      acc.push(item[key])
      uniqValues.push({ label: item[key], value: item[key] })
    }
    return acc
  }, [])

  return uniqValues
}

/**Шаг пагинации для карт с проектами*/
const paginationStep = 6;

export const ProjectCards = ({ projects, categories, genres, colourists }) => {
  const [currentCategory, setCurrentCategory] = useState()
  const [currentGenre, setCurrentGenre] = useState()
  const [currentColourist, setCurrentColourist] = useState([])

  const [cards, setCards] = useState(projects)
  /**Количество видимых элементов */
  const [amountOfVailableCards, setAmountOfVailableCards] = useState(paginationStep)
  const [isNotFound, setIsNotFound] = useState(false)

  const showMore = () => {
    setAmountOfVailableCards(prev => (prev + paginationStep))
  }

  /**Ресет пагинации при изменении фильтра */
  const onChangeFilter = (state) => {
    return (...args) => {
      setAmountOfVailableCards(paginationStep);
      state(...args);
    }
  }

  useEffect(() => {
    const filteredCards = projects.filter(
      ({ credentials, genre, category }) => {
        const isColorist =
          currentColourist?.some(
            ({ value }) => value === credentials.colorist
          ) || !currentColourist?.length
        const isGenre =
          currentGenre?.some(({ value }) => value === genre.id) ||
          !currentGenre?.length
        const isCategory =
          currentCategory?.some(({ value }) => value === category.id) ||
          !currentCategory?.length

        return isColorist && isGenre && isCategory
      }
    )

    setCards(filteredCards.slice(0, amountOfVailableCards));

    if (filteredCards.length == 0) {
      setIsNotFound(true)
    } else if (filteredCards.length !== 0) {
      setIsNotFound(false)
    }
  }, [projects, currentCategory, currentGenre, currentColourist, amountOfVailableCards])

  return (
    <ProjectPage>
      <DropDownsWrapper>
        <DropDown
          mb="md"
          title="All category"
          onChange={onChangeFilter(setCurrentCategory)}
          options={categories}
          multiple={true}
          value={currentCategory}
        />
        <DropDown
          mb="md"
          title="All genres"
          onChange={onChangeFilter(setCurrentGenre)}
          options={genres}
          multiple={true}
          value={currentGenre}
        />
        <ColouristFilter>
          <DropDown
            mb="md"
            title="All colourist"
            multiple={true}
            onChange={onChangeFilter(setCurrentColourist)}
            options={colourists}
            value={currentColourist}
          />
        </ColouristFilter>
      </DropDownsWrapper>
      <WorksCards cards={cards} />
      <MoreWrapper isSeeAll={cards?.length < amountOfVailableCards} mt="md">
        <ButtonEllipse onClick={showMore}>More</ButtonEllipse>
      </MoreWrapper>
      <NotFound mt="md" isNotFound={isNotFound}>
        Not found
      </NotFound>
    </ProjectPage>
  )
}

function useGetData() {
  const [data, setData] = useState([])
  const [categories, setCategories] = useState([])
  const [genres, setGenres] = useState([])
  const [colourists, setColourists] = useState([])

  useEffect(() => {
    const data = [
      {
        video: {
          mp4: 'https://drive.google.com/uc?id=1ClreORL5H_AmhGoCL3N3RDkmVxpGk7Zd',
        },
        preview:
          'https://drive.google.com/uc?id=1M7s3Mcy2Ja15X8a04dY3IYUokaThYcUq',
        id: 1,
        colourist: 'Aleks Ver',
        genre: 'comedy',
        category: 'ads',
        firstTitle: 'El corte ingles',
        secondTitle: 'show more',
        year: '2016',
        author: 'Archangel Studios',
      },
      {
        video: {
          mp4: 'https://drive.google.com/uc?id=1yUnz2C5tza_px2UkHJDyzkTtxnRPuO6D',
        },
        preview:
          'https://drive.google.com/uc?id=1n3jYxb5T0YnDCm1VTART2FL_0ayv6vis',
        id: 2,
        colourist: 'Aleks Ver',
        genre: 'horror',
        category: 'film',
        firstTitle: 'Paranormal drive',
        secondTitle: 'show more',
        year: '2016',
        author: 'Archangel Studios',
      },
      {
        video: {
          mp4: 'https://drive.google.com/uc?id=11F0_m9TMiknOq9DHnpTnZLOpv2YrSp7n',
        },
        preview:
          'https://drive.google.com/uc?id=14-fs1zjmVxt1NBrbEhrwoSs_4Pzrt_Ar',
        id: 3,
        colourist: 'Aleks Ver',
        genre: 'adventure',
        category: 'ads',
        firstTitle: 'Zolla',
        secondTitle: 'show more',
        year: '2021',
        author: 'Archangel Studios',
      },
      {
        video: {
          mp4: 'https://drive.google.com/uc?id=1ClreORL5H_AmhGoCL3N3RDkmVxpGk7Zd',
        },
        preview:
          'https://drive.google.com/uc?id=1M7s3Mcy2Ja15X8a04dY3IYUokaThYcUq',
        id: 4,
        colourist: 'Aleks Ver',
        genre: 'comedy',
        category: 'ads',
        firstTitle: 'El corte ingles ',
        secondTitle: 'show more',
        year: '2016',
        author: 'Archangel Studios',
      },
      {
        video: {
          mp4: 'https://drive.google.com/uc?id=1yUnz2C5tza_px2UkHJDyzkTtxnRPuO6D',
        },
        preview:
          'https://drive.google.com/uc?id=1n3jYxb5T0YnDCm1VTART2FL_0ayv6vis',
        id: 5,
        colourist: 'Aleks Ver',
        genre: 'horror',
        category: 'film',
        firstTitle: 'Paranormal drive ',
        secondTitle: 'show more',
        year: '2016',
        author: 'Archangel Studios',
      },
      {
        video: {
          mp4: 'https://drive.google.com/uc?id=11F0_m9TMiknOq9DHnpTnZLOpv2YrSp7n',
        },
        preview:
          'https://drive.google.com/uc?id=14-fs1zjmVxt1NBrbEhrwoSs_4Pzrt_Ar',
        id: 6,
        colourist: 'Aleks Ver',
        genre: 'adventure',
        category: 'ads',
        firstTitle: 'Zolla ',
        secondTitle: 'show more',
        year: '2021',
        author: 'Archangel Studios',
      },
      {
        video: {
          mp4: 'https://drive.google.com/uc?id=1ClreORL5H_AmhGoCL3N3RDkmVxpGk7Zd',
        },
        preview:
          'https://drive.google.com/uc?id=1M7s3Mcy2Ja15X8a04dY3IYUokaThYcUq',
        id: 7,
        colourist: 'Aleks Ver',
        genre: 'comedy',
        category: 'ads',
        firstTitle: ' gitEl corte ingles ',
        secondTitle: 'show more',
        year: '2016',
        author: 'Archangel Studios',
      },
      {
        video: {
          mp4: 'https://drive.google.com/uc?id=1yUnz2C5tza_px2UkHJDyzkTtxnRPuO6D',
        },
        preview:
          'https://drive.google.com/uc?id=1n3jYxb5T0YnDCm1VTART2FL_0ayv6vis',
        id: 8,
        colourist: 'Aleks Ver',
        genre: 'horror',
        category: 'film',
        firstTitle: ' Paranormal drive ',
        secondTitle: 'show more',
        year: '2016',
        author: 'Archangel Studios',
      },
      {
        video: {
          mp4: 'https://drive.google.com/uc?id=11F0_m9TMiknOq9DHnpTnZLOpv2YrSp7n',
        },
        preview:
          'https://drive.google.com/uc?id=14-fs1zjmVxt1NBrbEhrwoSs_4Pzrt_Ar',
        id: 9,
        colourist: 'Aleks Ver',
        genre: 'adventure',
        category: 'ads',
        firstTitle: ' Zolla ',
        secondTitle: 'show more',
        year: '2021',
        author: 'Archangel Studios',
      },
    ]
    const categories = getUniqValuesByKey(data, 'category')
    const genres = getUniqValuesByKey(data, 'genre')
    const colourists = getUniqValuesByKey(data, 'colourist')

    setData(data)
    setCategories(categories)
    setGenres(genres)
    setColourists(colourists)
  }, [])

  return { data, categories, genres, colourists }
}
