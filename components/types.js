import { PropTypes } from "prop-types";
import { colors } from "../styles";
import { typesOfoffset } from "../styles";

export const propTypesMargin = {
  my: PropTypes.oneOf(typesOfoffset),
  mx: PropTypes.oneOf(typesOfoffset),
  mt: PropTypes.oneOf(typesOfoffset),
  mb: PropTypes.oneOf(typesOfoffset),
  ml: PropTypes.oneOf(typesOfoffset),
  mr: PropTypes.oneOf(typesOfoffset),
  m: PropTypes.oneOf(typesOfoffset),
};

export const propTypesPadding = {
  py: PropTypes.oneOf(typesOfoffset),
  px: PropTypes.oneOf(typesOfoffset),
  pt: PropTypes.oneOf(typesOfoffset),
  pb: PropTypes.oneOf(typesOfoffset),
  pl: PropTypes.oneOf(typesOfoffset),
  pr: PropTypes.oneOf(typesOfoffset),
  p: PropTypes.oneOf(typesOfoffset),
};

export const propTypesTextTag = {
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "span", "p"]),
};

export const propTypesColors = {
  color: PropTypes.oneOf([...Object.keys(colors), "primary"]),
};

export const propTypesChildren = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export const propTypesSource = PropTypes.oneOfType([PropTypes.string, PropTypes.object]);

export const propTypesVideoBg = {
  poster: propTypesSource,
  autoPlay: PropTypes.bool,
  video: PropTypes.shape({
    webm: propTypesSource,
    mp4: propTypesSource.isRequired,
  }).isRequired,
}

export const propTypesWorksCard = {
  ...propTypesVideoBg,
  firstTitle: PropTypes.string.isRequired,
  secondTitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
}
