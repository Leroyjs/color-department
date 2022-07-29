import { colors } from "./constants";
import { injectGlobal } from "@emotion/css";
import { resetStyles } from "./reset.style";

export const initGlobalStyles = injectGlobal`
  ${resetStyles}

  body {
    background-color: ${colors.black};
  }
`;
