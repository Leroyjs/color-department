import { throttling } from 'utils';

const onScrollAction = (height, setTransparentBg, observedComponent) => {
    /**Координаты компонента, при скроле которого изменяется прозрачность header*/
    let tmpPosition = undefined;
    /**Вычеселнное значение прозрачности */
    let tmpTransparent = undefined;
    let prevTransparent = undefined;

    return () => {
        tmpPosition = observedComponent.getBoundingClientRect();
        tmpTransparent = 1 - Number((tmpPosition.y / height).toFixed(2));
        console.log(tmpTransparent, tmpPosition.y, height, tmpPosition)
        /**если проскролим за наблюдаемый элемент, то tmpTransparent будет > 1
         * чтобы не дергать setTransparentBg используем предыдущее значение
         * если предюзначение === 1, то ничего не делаем
         */
        if (tmpTransparent < 1) {
            prevTransparent = tmpTransparent;
            setTransparentBg(tmpTransparent);
        } else if (prevTransparent != 1) { setTransparentBg(1) }
    }
}

/**
 *
 * @param {*} transparentToComponent
 * @param {*} setTransparentBg - функция установки нового значения прозрачности хедера
 * @param {*} componentRef - ссылка на header
 * @param {*} window - ссылка на объект window
 * @returns {*} unsubscriber callback
 */
export const setTransperentByScroll = (transparentToComponent, setTransparentBg, componentRef, window) => {
    if (!transparentToComponent) return;
    setTransparentBg(0);
    const height = transparentToComponent.current.getBoundingClientRect().y// - componentRef.current.offsetHeight;
    const onScrollCallback = throttling(onScrollAction(height, setTransparentBg, transparentToComponent.current), 200);
    console.log(height);
    window.addEventListener('scroll', onScrollCallback)
    return () => { window.removeEventListener('scroll', onScrollCallback) }
}
