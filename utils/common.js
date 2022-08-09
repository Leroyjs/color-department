export function debounce(func, wait) {
    let currentTimer = null;
    let lastArgs = null;
    let lastThis = null;

    return (...props) => {
        lastArgs = props;
        lastThis = this;
        clearTimeout(currentTimer);
        currentTimer = setTimeout(() => {
            func.apply(lastThis, lastArgs);
            lastArgs = null;
            lastThis = null;
        }, wait);
    };
}

export function clamp(num, min, max){
    return Math.min(Math.max(num, min), max)
}
