import { preloaderAnimations, steps } from "./constants";
import { getCurrentStyleByDictionary } from "styles";

const getCurrentTransformValueByStep = (values, step) =>
  values.map((mediaQueryValues) =>
    Object.keys(mediaQueryValues).reduce(
      (ac, mediaQuery) => ({
        ...ac,
        [mediaQuery]: {
          transform: mediaQueryValues[mediaQuery].transform[step],
        },
      }),
      {}
    )
  );

export const applyCurrentAnimation = ({ step, gridArea }) =>
  getCurrentTransformValueByStep(
    getCurrentStyleByDictionary(preloaderAnimations)("transform")(gridArea),
    step
  );


export const initStepCounter = (setStepIndex, setHidden, onDone) => {

  const interval = setInterval(() => {
    setStepIndex((prevIndex) => {
      if (steps.length <= prevIndex + 1) {
        clearInterval(interval);
        onDone();
        setHidden(true);
        setTimeout(() => {
          window.sessionStorage.setItem('preloader_complited', true);
        }, 1000)
      }

      return prevIndex + 1;
    });
  }, 1000);

  return () => {
    clearInterval(interval);
  };
};
