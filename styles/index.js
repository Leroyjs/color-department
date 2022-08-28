// константы которые используются в проекте
export {
  fontSizes,
  fontFamilies,
  colors,
  breakpointsWidth,
  offsets,
  sizes,
  typesOfoffset,
  zindex,
  namesOfBreakpoints,
} from "./constants";

// Mixins, которые нужно подключать в стили, чтобы можно было менять стили компонента из пропсов
// Пример использования:
export { applyColor, applyMargins, applyPaddings } from "./mixins";

// Функции, которые нужно подключать в стили, они возвращают нужный стиль
// Пример использования:
export {
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  getCurrentFontSizeStyle,
  getCurrentColorStyles,
  getCurrentGridTemplateColumsStyle,
  getCurrentBackgroundColorStyles,
  getCurrentSizeStyle,
  getCurrentWidthSizeStyle,
  getCurrentHeightSizeStyle,
  getCurrentStyleByDictionary,
  getGridCount,
  getVW
} from "./get-styles-utils";

// Функции, которые возвращают значение стиля
export { getCurrentColor } from "./get-value-utils";

export {
  // Функция для адаптации стиля под разные разрешения
  // Пример использования:
  // getResponsiveStyle('color')(['red', 'green', 'blue']) =>
  //  color: 'red'
  // '@media(max-width: 1920px)': {
  //   color: 'green'
  // }
  // '@media(max-width: 1600px)': {
  //   color: 'blue'
  // }
  getResponsiveStyle,
} from "./media-query-utils";

// Функции, которые облегчат верстку
export {
  // Функция для преобразования цвета из формата HEX в RGBA.
  // Пример использования: hexToRGBA('#FFFFFF', 0.2) => rgba(255, 255, 255, 0.2)
  hexToRGBA,
  getArrayOfIndex,
  stubFunction,
} from "./utils";

export { mapStyle } from "./map";
