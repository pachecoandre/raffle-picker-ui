import { ButtonBaseProps } from "@mui/material";
import { FC } from "react";
import { StyledButton } from "./styles";

const Button: FC<ButtonBaseProps> = (props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);

export default Button;
