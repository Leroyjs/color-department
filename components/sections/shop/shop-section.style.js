import styled from "@emotion/styled";
import {getCurrentMarginStyle} from "styles";
import {H2} from "components";

export const ShopWrapper = styled.div`
  width: 100%;
`;

export const ShopList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const ShopTitle = styled(H2)`
  width: 100%;
  text-align: center;
  ${getCurrentMarginStyle("vertical", "lg")};
`;
