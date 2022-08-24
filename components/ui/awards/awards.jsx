import React, { useState } from "react";
import { AwardsList } from "./awards-list";
import {
  AwardsContainer,
  AwardsTitle,
  AwardsSubTitle,
} from "./awards-list.style";
import { PropTypes } from "prop-types";
import { AwardsItemProps } from "./types";
import { DetailCardModal } from "../../modal";

export const Awards = ({ options, title, subtitle, isAboutImg, ...props }) => {
  const [isOpen, setOpen] = useState(false);
  const [currentModalId, setCurrentModalId] = useState(-1);
  return (
    <AwardsContainer {...props}>
      {title && (
        <AwardsTitle mb="md" color="white">
          {title}
        </AwardsTitle>
      )}
      {subtitle && (
        <AwardsSubTitle mb="md" ml="md" color="primary">
          {subtitle}
        </AwardsSubTitle>
      )}
      <AwardsList
        isAboutImg={isAboutImg}
        options={options}
        onClick={(modalId) => {
          setCurrentModalId(modalId);
          setOpen(true);
        }}
      />
      <DetailCardModal
        isOpen={isOpen}
        setOpen={setOpen}
        modalId={currentModalId}
      />
    </AwardsContainer>
  );
};

Awards.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  options: PropTypes.arrayOf(AwardsItemProps),
};
