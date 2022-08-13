import {
  GridStyled,
  GridWrapper,
  HeaderLine,
  Number,
  NumberInner,
  PreloaderHeader,
  PreloaderWrapper,
} from "./preloader.style";
import { useEffect, useState } from "react";

import { FoxBox } from "./fox-box";

const steps = ["00", "34", "56", "93", "100"];

export const Preloader = ({}) => {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prevIndex) => {
        if (steps.length <= prevIndex + 1) {
          // clearInterval(interval)
          return 0;
        }

        return prevIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const percent = steps[stepIndex];

  return (
    <PreloaderWrapper>
      <PreloaderHeader>
        <Number>
          <NumberInner step={stepIndex}>
            {steps.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </NumberInner>
        </Number>
        <HeaderLine percent={percent} />
      </PreloaderHeader>
      <GridWrapper>
        <GridStyled />
        <FoxBox stepIndex={stepIndex} />
      </GridWrapper>
    </PreloaderWrapper>
  );
};
