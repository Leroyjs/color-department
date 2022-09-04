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
import { useEffect, useState } from "react";

import { FoxBox } from "./fox-box";
import { RunningLine } from "components";
import { initStepCounter } from "./utils";
import { steps } from "./constants";
import { stubFunction } from "styles";
import { useVH } from "utils";
import { useNoScroll } from "utils";

export const Preloader = ({ onDone = stubFunction }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [isHidden, setHidden] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(()=>{
    const hasInteraction = Boolean(window.sessionStorage.getItem('preloader_complited'))
    setShowPreloader(!hasInteraction)
  });
  useEffect(() => initStepCounter(setStepIndex, setHidden, onDone), []);
  useVH();
  useNoScroll();
  if (!showPreloader) return null;

  return (
    <PreloaderWrapper isHidden={isHidden}>
      <PreloaderHeader>
        <Number>
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
