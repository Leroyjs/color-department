import React from "react";
import { PropTypes } from "prop-types";
import { AwardsItem } from "./awards-item";
import { AwardsItemProps } from "./types";
import { ListStyled } from "./awards-list.style";

export const AwardsList = ({ options, onClick, isAboutImg, ...props }) => {
  return (
    <ListStyled {...props}>
      {options.map((option, index) => (
        <AwardsItem
          key={index}
          onClick={onClick}
          isAboutImg={isAboutImg}
          {...option}
        />
      ))}
    </ListStyled>
  );
};

AwardsList.propTypes = {
  options: PropTypes.arrayOf(AwardsItemProps),
};
