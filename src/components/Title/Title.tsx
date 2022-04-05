import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  configUrl?: string;
}

const Title: FC<Props> = ({ children, configUrl }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span style={{ fontSize: 32 }}>{children}</span>
      {configUrl && <Link to={configUrl}>editar</Link>}
    </div>
  );
};

export default Title;
