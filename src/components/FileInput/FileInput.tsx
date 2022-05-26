import { FC, InputHTMLAttributes } from "react";
import { Label, Wrapper } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FileInput: FC<Props> = ({ label, ...rest }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <input type="file" {...rest} />
    </Wrapper>
  );
};

export default FileInput;
