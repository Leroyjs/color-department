
export const initStepCounter = (setStepIndex, totalSteps) => {
  const interval = setInterval(() => {
    setStepIndex((prevIndex) => {
        if(prevIndex > totalSteps) return 0;
      return prevIndex + 1;
    });
  }, 2000);

  return () => {
    clearInterval(interval);
  };
};
