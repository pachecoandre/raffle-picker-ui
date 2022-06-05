import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Label, TextArea, Wrapper } from "./styles";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Input: FC<Props> = ({ label, ...rest }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <TextArea {...rest} />
    </Wrapper>
  );
};

export default Input;
