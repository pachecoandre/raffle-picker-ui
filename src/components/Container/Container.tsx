import { FC, ReactNode } from "react";

import { Content, Wrapper } from "./styles";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Container;
