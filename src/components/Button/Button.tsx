import { ButtonBaseProps } from "@mui/material";
import { FC } from "react";
import { LinkButton, StyledButton } from "./styles";

interface ButtonProps extends ButtonBaseProps {
  variant?: string;
}

const Button: FC<ButtonProps> = (props) => {
  if (props.variant === "link") {
    return <LinkButton {...props}>{props.children}</LinkButton>;
  }
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
