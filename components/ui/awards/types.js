import {PropTypes, string} from "prop-types";

export const AwardsItemProps = PropTypes.shape({
    href: string,
    startLabel: string,
    endLabel: string,
    img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
});
