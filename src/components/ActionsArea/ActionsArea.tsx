import { FC, ReactNode } from "react";
import { ActionsArea as StyledActionsArea } from "./styles";

interface Props {
  children: ReactNode;
}

const ActionsArea: FC<Props> = ({ children }) => {
  return <StyledActionsArea>{children}</StyledActionsArea>;
};

export default ActionsArea;
