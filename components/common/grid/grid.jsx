import { useEffect, useRef, useState } from 'react'
import { getArrayOfIndex } from 'styles'
import {
  getArrayOfImagesOnThisStep,
  getCurrentPattern,
  getNumdersOfAvaleblePositions,
  getStepFn,
  isValidPositionFn,
} from './grid-utils'
import { Cell, CellImage, GridInner, GridWrapper } from './grid.style'

export const Grid = ({ props, arrayOfImages }) => {
  /**Индекс позиции патерна patExample = [[1,2,3],[5,6,7]] */
  const [indexOfPattern, setIndexOfPattern] = useState(0)
  const [isPlayAnimation, setPlayAnimation] = useState(false)
  /**Индексы всех ячеек, в которых можно отобразить изображения. Равен row*column */
  const [numdersOfAvaleblePositions, setNumdersOfAvaleblePositions] = useState(
    []
  )

  /**Функция проверки  видимости изображения в зависимости от индекса*/
  const isValidPositionForImage = isValidPositionFn(numdersOfAvaleblePositions)
  /**Набор индексов, в которых можно отобразить картинку*/
  const patternDisplayPicture = useRef([])
  /**Набор изображения на текущий шаг*/
  const arrayOfImagesOnThisStep = useRef([])
  /** */
  const pattern = useRef([])

  useEffect(() => {
    patternDisplayPicture.current = getCurrentPattern(indexOfPattern)
    const onResize = () => {
      patternDisplayPicture.current = getCurrentPattern(indexOfPattern)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [indexOfPattern])

  pattern.current = patternDisplayPicture.current?.filter((value) => {
    return isValidPositionForImage(value)
  })

  useEffect(() => {
    arrayOfImagesOnThisStep.current = getArrayOfImagesOnThisStep(
      7,
      arrayOfImages
    )
  }, [indexOfPattern, arrayOfImages])

  const [isAppearance, setAppearance] = useState(true)
  const isVisible = isValidPositionFn(pattern.current)
  const getStep = getStepFn(pattern.current)
  useEffect(() => {
    const setNumdersOfAvaleblePositionsEventFunction = () =>
      setNumdersOfAvaleblePositions(getNumdersOfAvaleblePositions())

    setNumdersOfAvaleblePositionsEventFunction()

    window.addEventListener(
      'resize',
      setNumdersOfAvaleblePositionsEventFunction
    )

    return () => {
      window.removeEventListener(
        'resize',
        setNumdersOfAvaleblePositionsEventFunction
      )
    }
  }, [])

  useEffect(() => {
    if (!arrayOfImages) return
    setPlayAnimation(true)

    const interval = setInterval(() => {
      setAppearance((prevApearenceState) => {
        if (prevApearenceState) {
          setIndexOfPattern((prevIndexOfPatternState) => {
            if (prevIndexOfPatternState < pattern.current.length - 2) {
              return prevIndexOfPatternState + 1
            } else {
              return 0
            }
          })
        }
        return !prevApearenceState
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <GridWrapper {...props}>
      <GridInner>
        {getArrayOfIndex(80)
          .slice(0)
          .reverse()
          .map((item, index) => (
            <Cell key={item}>
              {isPlayAnimation && isValidPositionForImage(item) && (
                <CellImage
                  step={getStep(item)}
                  isVisible={isAppearance && isVisible(item)}
                  image={() => {
                    return arrayOfImagesOnThisStep.current[getStep(item)]
                  }}
                />
              )}
            </Cell>
          ))}
      </GridInner>
    </GridWrapper>
  )
}
