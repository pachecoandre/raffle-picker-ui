import { Grid } from "@mui/material";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoBack, Text, Wrapper } from "./styles";

interface Props {
  backButton?: boolean;
  configUrl?: string;
}

const Title: FC<Props> = ({ backButton, children, configUrl }) => {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid item xs={2}>
        {backButton && <GoBack onClick={() => navigate(-1)}>Voltar</GoBack>}
      </Grid>
      <Grid item xs={8}>
        <Wrapper>
          <Text>{children}</Text>
          {configUrl && <Link to={configUrl}>editar</Link>}
        </Wrapper>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Title;
