import { useEffect, useRef } from "react";

import { Grid } from "components";
import { GridVisibleZone } from "../start-screen.style";
import { sizes } from "styles";

export const FlexibleGrid = () => {
  const someref = useRef(null);

  const handleScroll = (e) => {
    let offset = window.pageYOffset;

    someref.current.style.height = `calc(100% - ${sizes["desktopLG"].half} - ${offset}px)`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <GridVisibleZone ref={someref}>
      <Grid />
    </GridVisibleZone>
  );
};
