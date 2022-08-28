import styled from "@emotion/styled";
import { getCurrentMarginStyle } from "styles";
import { H2 } from "components";
import { getCurrentPaddingStyle } from "styles";
import { getCurrentGridTemplateColumsStyle } from "styles";
import { breakpointsWidth } from "styles";
import { sizes } from "styles";

export const ShopWrapper = styled.div`
  width: 100%;
  padding-top: ${sizes["desktopLG"].half};
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    padding-top: ${sizes["tabletLG"].thirdX2};
  }
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    padding-top: ${sizes["tabletLG"].x1};
  }
`;

export const ShopList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${breakpointsWidth.tabletLG}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ShopTitle = styled(H2)`
  width: 100%;
  text-align: center;
  ${getCurrentMarginStyle("vertical", "lg")};
`;
