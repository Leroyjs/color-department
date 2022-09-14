import { useEffect, useState } from 'react'
import { ButtonEllipse, DropDown, WorksCards } from 'components'
import {
  ColouristFilter,
  DropDownsWrapper,
  MoreWrapper,
  NotFound,
  ProjectPage,
} from './project-cards.style'

export const ProjectCards = ({ projects, categories, genres, colourists }) => {
  const [currentCategory, setCurrentCategory] = useState()
  const [currentGenre, setCurrentGenre] = useState()
  const [currentColourist, setCurrentColourist] = useState([])
  const [cards, setCards] = useState(projects)
  const [isSeeAll, setIsSeeAll] = useState(false)
  const [isNotFound, setIsNotFound] = useState(false)

  const handleClick = () => {
    setIsSeeAll(true)
  }

  useEffect(() => {
    const filteredCards = projects.filter(({ colorist, genre, category }) => {
      const isColorist =
        currentColourist?.some(({ value }) => value === colorist) ||
        !currentColourist?.length
      const isGenre =
        currentGenre?.some(({ value }) => value === genre.id) ||
        !currentGenre?.length
      const isCategory =
        currentCategory?.some(({ value }) => value === category.id) ||
        !currentCategory?.length

      return isColorist && isGenre && isCategory
    })

    if (!isSeeAll) {
      setCards(filteredCards.slice(0, 6))

      if (filteredCards.length === 6) {
        setIsSeeAll(true)
      }
      if (filteredCards.length === 0) {
        setIsNotFound(true)
      }
    } else if (isSeeAll === true) {
      setCards(filteredCards)
    }

    if (filteredCards.length === 0) {
      setIsNotFound(true)
    } else if (filteredCards.length !== 0) {
      setIsNotFound(false)
    }
  }, [projects, currentCategory, currentGenre, currentColourist, isSeeAll])

  return (
    <ProjectPage>
      <DropDownsWrapper>
        <DropDown
          mb="md"
          title="All category"
          onChange={(option) => setCurrentCategory(option)}
          options={categories}
          multiple={true}
          value={currentCategory}
        />
        <DropDown
          mb="md"
          title="All genres"
          onChange={(option) => setCurrentGenre(option)}
          options={genres}
          multiple={true}
          value={currentGenre}
        />
        <ColouristFilter>
          <DropDown
            mb="md"
            title="All colourist"
            multiple={true}
            onChange={(option) => setCurrentColourist(option)}
            options={colourists}
            value={currentColourist}
          />
        </ColouristFilter>
      </DropDownsWrapper>
      <WorksCards cards={cards} />
      <MoreWrapper isSeeAll={isSeeAll} mt="md">
        <ButtonEllipse onClick={() => handleClick()}>More</ButtonEllipse>
      </MoreWrapper>
      <NotFound mt="md" isNotFound={isNotFound}>
        Not found
      </NotFound>
    </ProjectPage>
  )
}
