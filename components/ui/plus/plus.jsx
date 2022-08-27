import { IconPlus } from "./plus.style";

export const Plus = ({ onClick, isError, ...props }) => {
  return (
    <IconPlus onClick={onClick} isError={isError}>
      <svg strokeWidth="2px" fill="none" viewBox="0 0 26 26">
        <path strokeWidth="2px" d="M0 13h26M13 26V0" />
      </svg>
    </IconPlus>
  );
};
