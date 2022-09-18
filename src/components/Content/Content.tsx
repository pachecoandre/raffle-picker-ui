import { FC, ReactNode } from "react";

import { ContentDiv, Wrapper } from "./styles";

interface Props {
  children: ReactNode;
  justifyCenter?: boolean;
}

const Content: FC<Props> = ({ children, justifyCenter }) => {
  return (
    <Wrapper>
      <ContentDiv justifyCenter={justifyCenter}>
        <div>{children}</div>
      </ContentDiv>
    </Wrapper>
  );
};

export default Content;
