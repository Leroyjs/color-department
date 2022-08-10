export const debounce = (callback, delay, ...args) => {
    let timer;
  
    return () => {
      if (timer) return;
      timer = setTimeout(() => {
        callback(...args);
        clearTimeout(timer);
        timer = null;
      }, delay);
    };
  };