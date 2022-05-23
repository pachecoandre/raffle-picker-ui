import { FC } from "react";
import { ActionsArea as StyledActionsArea } from "./styles";

const ActionsArea: FC = ({ children }) => {
  return <StyledActionsArea>{children}</StyledActionsArea>;
};

export default ActionsArea;
