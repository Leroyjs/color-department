import { colorsTheme } from "../../../styles/theme";

export const getGlomalTheme = (currentThemeName) =>
  colorsTheme[currentThemeName] || colorsTheme[themeNames.YELLOW];
