import { Cell, GridInner, GridWrapper } from "./grid.style";

import { getArrayOfIndex } from "styles";

export const Grid = (props) => (
  <GridWrapper {...props}>
    <GridInner>
      {getArrayOfIndex(80).map((item) => (
        <Cell key={item} />
      ))}
    </GridInner>
  </GridWrapper>
);
