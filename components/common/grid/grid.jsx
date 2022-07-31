import { Cell, GridWrapper } from "./grid.style";

import { getArrayOfIndex } from "styles";

export const Grid = (props) => (
  <GridWrapper {...props}>
    {getArrayOfIndex(80).map((item) => (
      <Cell key={item} />
    ))}
  </GridWrapper>
);
