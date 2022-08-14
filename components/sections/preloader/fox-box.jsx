import { FoxBoxInner, FoxBoxWrapper, ImageWrapper } from "./preloader.style";

import Image from "next/image";
import { foxPieces } from "./constants";

export const FoxBox = ({ stepIndex, isHidden }) => (
  <FoxBoxWrapper>
    <FoxBoxInner>
      {foxPieces.map(({ img, opasityTransition, gridArea }) => (
        <ImageWrapper
          key={gridArea}
          step={stepIndex}
          isHidden={isHidden}
          gridArea={gridArea}
          opasityTransition={opasityTransition}
        >
          <Image src={img} alt="" />
        </ImageWrapper>
      ))}
    </FoxBoxInner>
  </FoxBoxWrapper>
);
