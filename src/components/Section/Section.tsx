import { FC } from "react";
import { Style } from "util";
import { WideDiv } from "./styled";

interface Props {
  mt?: number;
  mb?: number;
  justify?: string;
  style?: Style;
}

const Section: FC<Props> = ({
  mt = 2,
  mb = 4,
  children,
}) => (
  <WideDiv
    style={{
      marginTop: `${mt * 8}px`,
      marginBottom: `${mb * 8}px`,
    }}
  >
    {children}
  </WideDiv>
);

export default Section;
