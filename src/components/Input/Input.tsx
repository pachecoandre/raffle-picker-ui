import { FC, InputHTMLAttributes } from "react";
import { Label, StyledInput, Wrapper } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<Props> = ({ label, ...rest }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledInput {...rest} />
    </Wrapper>
  );
};

export default Input;
