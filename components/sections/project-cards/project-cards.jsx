import { useEffect, useState } from 'react'
import {
  ColouristFilter,
  DropDownsWrapper,
  MoreWrapper,
  NotFound,
  ProjectPage,
} from './project-cards.style'
import { ButtonEllipse, DropDown, WorksCards } from 'components'

/**Шаг пагинации для карт с проектами*/
const paginationStep = 6

export const ProjectCards = ({ projects, categories, genres, colourists }) => {
  const [currentCategory, setCurrentCategory] = useState('')
  const [currentGenre, setCurrentGenre] = useState('')
  const [currentColourist, setCurrentColourist] = useState('')

  const [cards, setCards] = useState(projects)
  /**Количество видимых элементов */
  const [amountOfVailableCards, setAmountOfVailableCards] =
    useState(paginationStep)
  const [isNotFound, setIsNotFound] = useState(false)

  const showMore = () => {
    setAmountOfVailableCards((prev) => prev + paginationStep)
  }

  /**Ресет пагинации при изменении фильтра */
  const onChangeFilter = (state) => {
    return (...args) => {
      setAmountOfVailableCards(paginationStep)
      state(...args)
    }
  }

  useEffect(() => {
    const filteredCards = projects.filter(({ colorist, genre, category }) => {
      const isColorist =
        currentColourist?.value === colorist || !currentColourist
      const isGenre = currentGenre?.value === genre.id || !currentGenre?.value
      const isCategory =
        currentCategory?.value === category.id || !currentCategory?.value

      return isColorist && isGenre && isCategory
    })

    setCards(filteredCards.slice(0, amountOfVailableCards))

    if (filteredCards.length == 0) {
      setIsNotFound(true)
    } else if (filteredCards.length !== 0) {
      setIsNotFound(false)
    }
  }, [
    projects,
    currentCategory,
    currentGenre,
    currentColourist,
    amountOfVailableCards,
  ])

  return (
    <ProjectPage>
      <DropDownsWrapper>
        <DropDown
          mb="md"
          title="All category"
          onChange={onChangeFilter(setCurrentCategory)}
          options={categories}
          value={currentCategory}
        />
        <DropDown
          mb="md"
          title="All genres"
          onChange={onChangeFilter(setCurrentGenre)}
          options={[
            ...genres,
            {
              value: '',
              label: 'Reset',
            },
          ]}
          value={currentGenre}
        />
        <ColouristFilter>
          <DropDown
            mb="md"
            title="All colourist"
            onChange={onChangeFilter(setCurrentColourist)}
            options={[
              ...colourists,
              {
                value: '',
                label: 'Reset',
              },
            ]}
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
