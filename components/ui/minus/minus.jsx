import { IconMinus } from "./minus.style";

export const Minus = ({ onClick, isError, ...props }) => {
  return (
    <IconMinus onClick={onClick} isError={isError}>
      <svg fill="none" viewBox="0 0 26 2">
        <path strokeWidth="2" d="M0 1h26" />
      </svg>
    </IconMinus>
  );
};
