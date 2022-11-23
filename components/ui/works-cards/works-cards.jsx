import React from 'react'
import { PropTypes } from 'prop-types'
import { WorksCard } from 'components'
import { propTypesWorksCard } from '../../types'
import {
  GridWrapper,
  WorksTitle,
  WorksTitleWrapper,
  WorksWrapper,
} from './works-cards.style'

export const WorksCards = ({ title, cards }) => {
  return (
    <WorksWrapper>
      {title && (
        <WorksTitle wrapperProps={{ className: WorksTitleWrapper }}>
          {title}
        </WorksTitle>
      )}
      <GridWrapper>
        {cards
          .sort(
            ({ sort_order: sortOrderA }, { sort_order: sortOrderB }) =>
              sortOrderA - sortOrderB
          )
          .map((card) => (
            <WorksCard
              firstTitle={card.title?.substring(0, 16)}
              secondTitle={'see more'}
              author={card?.client || card?.credentials?.client || ''}
              year={card.year}
              preview={card.preview}
              video={card.short_video}
              key={card.firstTitle}
              href={`/detail/${card.id}`}
            />
          ))}
      </GridWrapper>
    </WorksWrapper>
  )
}

WorksCards.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.shape(propTypesWorksCard)).isRequired,
}
