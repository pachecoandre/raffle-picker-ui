import { FC } from "react";
import { Link } from "react-router-dom";
import { Text, Wrapper } from "./styles";

interface Props {
  configUrl?: string;
}

const Title: FC<Props> = ({ children, configUrl }) => {
  return (
    <Wrapper>
      <Text>{children}</Text>
      {configUrl && <Link to={configUrl}>editar</Link>}
    </Wrapper>
  );
};

export default Title;
