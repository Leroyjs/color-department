import { FoxBoxInner, FoxBoxWrapper, ImageWrapper, FoxImg } from "./preloader.style";

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
          <Image src={img} layout='responsive' alt="" />
        </ImageWrapper>
      ))}
    </FoxBoxInner>
  </FoxBoxWrapper>
);
