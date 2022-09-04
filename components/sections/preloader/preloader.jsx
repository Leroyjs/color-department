import { useEffect, useState } from "react";
import { stubFunction } from "styles";
import { RunningLine } from "components";
import { initStepCounter } from "./utils";
import { FoxBox } from "./fox-box";
import { steps } from "./constants";
import {
  GridStyled,
  GridWrapper,
  HeaderLine,
  Number,
  NumberInner,
  PreloaderHeader,
  PreloaderWrapper,
  RunningLineWrapper,
} from "./preloader.style";
import { useNoScroll, useVH } from "utils";

export const Preloader = ({ onDone = stubFunction }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [isHidden, setHidden] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  useEffect(() => {
    initStepCounter(setStepIndex, setHidden, onDone);
    const hasInteraction = Boolean(window.sessionStorage.getItem('preloader_complited'))
    setHidden(hasInteraction);
    if (!hasInteraction){
      setShowNumber(true);
    }
  }, []);
  useVH();
  useNoScroll();

  return (
    <PreloaderWrapper isHidden={isHidden}>
      <PreloaderHeader>
        <Number isActive={showNumber}>
          <NumberInner step={stepIndex}>
            {steps.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </NumberInner>
        </Number>
        <HeaderLine stepIndex={stepIndex} />
      </PreloaderHeader>
      <GridWrapper>
        <GridStyled />
        <FoxBox stepIndex={stepIndex} isHidden={isHidden} />
      </GridWrapper>
      <RunningLineWrapper stepIndex={stepIndex}>
        <RunningLine />
      </RunningLineWrapper>
    </PreloaderWrapper>
  );
};
