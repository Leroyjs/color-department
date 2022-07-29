import { ThemeProvider as ThemeEmotionProvider } from "@emotion/react";
import { getGlomalTheme } from "./utils";
import { observer } from "mobx-react-lite";
import theme from "../../../__data__/theme";

export const ThemeProvider = observer(({ children }) => {
  return (
    <ThemeEmotionProvider theme={getGlomalTheme(theme.currentThemeName)}>
      {children}
    </ThemeEmotionProvider>
  );
});
