import { IconPlus } from "./plus.style";

export const Plus = ({ onClick, ...props }) => {
  return (
    <IconPlus onClick={onClick}>
      <svg fill="none" viewBox="0 0 26 26" {...props}>
        <path strokeWidth="2" d="M0 13h26M13 26V0" />
      </svg>
    </IconPlus>
  );
};
