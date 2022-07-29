import { colors } from "./constants";

export const getCurrentColor = (color, theme) =>
  colors[color] || theme?.[color] || theme.primary;
