import React from "react";
import { PropTypes } from "prop-types";
import { PopoverListItem } from "./popover-list-item";
import { AwardsItemProps } from "./types";
import { ListStyled } from "./popover-list.style";

export const PopoverList = ({ options, onClick, ...props }) => {
  return (
    <ListStyled {...props}>
      {options.map((option, index) => (
        <PopoverListItem
          key={index}
          onClick={onClick}
          {...option}
        />
      ))}
    </ListStyled>
  );
};

PopoverList.propTypes = {
  options: PropTypes.arrayOf(AwardsItemProps),
};
