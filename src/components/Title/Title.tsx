import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import GoBack from "components/GoBack";
import { Text, Wrapper } from "./styles";

interface Props {
  backLink?: string;
  configUrl?: string;
  children: ReactNode;
}

const Title: FC<Props> = ({ backLink, children, configUrl }) => {
  return (
    <Grid container>
      <Grid item xs={2} sm={2}>
        {backLink && <GoBack link={backLink} />}
      </Grid>
      <Grid item xs={10} sm={8}>
        <Wrapper>
          <Text>{children}</Text>
          {configUrl && <Link to={configUrl}>editar</Link>}
        </Wrapper>
      </Grid>
      <Grid item xs={0} sm={2}></Grid>
    </Grid>
  );
};

export default Title;
