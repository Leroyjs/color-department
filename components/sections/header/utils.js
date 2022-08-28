import { throttling } from 'utils';

const onScrollAction = (setTransparentBg, observedComponent, window, componentRef) => {
    /**Координаты компонента, при скроле которого изменяется прозрачность header*/
    let tmpPosition = undefined;
    /**Вычеселнное значение прозрачности */
    let tmpTransparent = undefined;
    let prevTransparent = undefined;
    const height = observedComponent.getBoundingClientRect().y + window.pageYOffset - componentRef.offsetHeight;
    return () => {
        tmpPosition = observedComponent.getBoundingClientRect();
        tmpTransparent = 1 - Number(((tmpPosition.y - componentRef.offsetHeight) / height).toFixed(2));
        //height = tmpPosition.y;
        /**если проскролим за наблюдаемый элемент, то tmpTransparent будет > 1
         * чтобы не дергать setTransparentBg используем предыдущее значение
         * если предюзначение === 1, то ничего не делаем
         */
        if (tmpTransparent < 1 && tmpPosition.top > 0) {
            prevTransparent = tmpTransparent;
            setTransparentBg(tmpTransparent);
        } else if (prevTransparent != 1) {
            setTransparentBg(1)
        }
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
    //TODO: чтобы хедер был темным к началу блока Х - componentRef.current.offsetHeight;
    const onScrollCallback = throttling(
        onScrollAction(
            setTransparentBg,
            transparentToComponent.current,
            window,
            componentRef.current
        ), 200
    );
    window.addEventListener('scroll', onScrollCallback)
    return () => { window.removeEventListener('scroll', onScrollCallback) }
}
