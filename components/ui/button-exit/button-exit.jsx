import { ButtonWrapper, Exit } from "./button-exit.style";

export const ButtonExit = ({ onClick, ...props }) => (
  <ButtonWrapper onClick={onClick} {...props}>
    <Exit>
      <svg fill="none" viewBox="0 0 14 14">
        <path
          stroke="#101010"
          strokeWidth="2"
          d="m1 13 6-6m0 0 6-6M7 7l6 6M7 7 1 1"
        />
      </svg>
    </Exit>
  </ButtonWrapper>
);
