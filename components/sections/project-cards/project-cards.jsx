import React, { useEffect, useState } from 'react'
import {
  ColouristFilter,
  DropDownsWrapper,
  MoreWrapper,
  NotFound,
  ProjectPage,
  ResetBtn,
  ResetBtnH3,
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
        currentColourist?.value === colorist || !currentColourist?.value
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
          title="All categories"
          onChange={onChangeFilter(setCurrentCategory)}
          options={categories}
          value={currentCategory}
        />
        <DropDown
          mb="md"
          title="All genreies"
          onChange={onChangeFilter(setCurrentGenre)}
          options={genres}
          value={currentGenre}
        />
        <ColouristFilter>
          <DropDown
            mb="md"
            title="All colourists"
            onChange={onChangeFilter(setCurrentColourist)}
            options={colourists}
            value={currentColourist}
          />
        </ColouristFilter>
        <ResetBtnH3
          wrapperProps={{ className: ResetBtn }}
          onClick={() => {
            setCurrentCategory('')
            setCurrentGenre('')
            setCurrentColourist('')
          }}
        >
          Delete all filtres
        </ResetBtnH3>
      </DropDownsWrapper>
      <WorksCards cards={cards} />
      <MoreWrapper isSeeAll={cards?.length <= amountOfVailableCards} mt="md">
        <ButtonEllipse onClick={showMore}>More</ButtonEllipse>
      </MoreWrapper>
      <NotFound mt="md" isNotFound={isNotFound}>
        Not found
      </NotFound>
    </ProjectPage>
  )
}
