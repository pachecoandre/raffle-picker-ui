import { FC } from "react";

import { Content, Wrapper } from "./styles";

const Container: FC<{}> = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Container;
