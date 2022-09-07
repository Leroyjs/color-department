import { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import { initStepCounter } from './utils'
import {
  PartnersItem,
  PartnersLineSlider,
  PartnersLineWrapper,
} from './partners-line.style'

export const PartnersLine = ({ partners = [] }) => {
  const [step, setStep] = useState(0)
  const [pictureArray, setPictureArray] = useState([])

  useEffect(() => initStepCounter(setStep, partners, setPictureArray), [])

  return (
    <PartnersLineWrapper>
      <PartnersLineSlider step={step}>
        {pictureArray.map(({ icon, label }, indx) => (
          <PartnersItem key={label + indx}>
            <img src={icon} alt={label} />
          </PartnersItem>
        ))}
      </PartnersLineSlider>
    </PartnersLineWrapper>
  )
}

PartnersLine.propTypes = {
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
}
