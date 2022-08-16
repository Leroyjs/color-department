import { Cell, GridInner, GridWrapper } from "./grid.style";

import { getArrayOfIndex } from "styles";

export const Grid = ({ amount, ...props }) => (
  <GridWrapper {...props}>
    <GridInner>
      {getArrayOfIndex(amount || 80).map((item) => (
        <Cell key={item} />
      ))}
    </GridInner>
  </GridWrapper>
);
