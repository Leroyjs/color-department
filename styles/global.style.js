import { colors } from "./constants";
import {breakpointsWidth} from 'styles';
import { injectGlobal } from "@emotion/css";
import { resetStyles } from "./reset.style";

export const initGlobalStyles = injectGlobal`
  ${resetStyles}

  body {
    background-color: ${colors.black};
  }

  //Ширину я бы не трогал
  .map-icon-wrapper {
    width: 300px;
    text-align: center;
    & p {
      color: ${colors.white};
      font-size: 16px;
      width: 500;
      @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
        font-size: 14px;
      }
      @media screen and (max-width: ${breakpointsWidth.photo}) {
        font-size: 12px;
      }
    }
  }
`;
