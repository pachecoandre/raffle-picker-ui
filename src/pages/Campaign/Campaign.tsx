import { FC } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { currency } from "helpers/formatter";
import Container from "components/Container";
import Section from "components/Section";
import Title from "components/Title";
import { Paper } from "./styles";
import Button from "components/Button";

const Campaign: FC = () => {
  const { campaignId } = useParams();
  const navigate = useNavigate();

  const data = {
    sales: {
      quantity: 400,
      amount: 4000,
      price: 10,
    },
    sellers: 6,
    prizes: 8,
  };

  const handleNewRaffle = () => {
    navigate(`/campaigns/${campaignId}/raffles/new`);
  };

  return (
    <Container>
      <Section>
        <Title backButton={true} configUrl={`/campaigns/${campaignId}/edit`}>
          Campanha {campaignId}
        </Title>
      </Section>
      <Section>
        <p>Valor da rifa: {currency(data.sales.price)}</p>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Paper>{currency(data.sales.amount)} Arrecadados</Paper>
            <Paper>{data.sales.quantity} Rifas vendidas</Paper>
            <Paper>
              <Link to={`/campaigns/${campaignId}/prizes`}>
                Prêmios: {data.prizes}
              </Link>
            </Paper>
            {/* <Paper>
              <Link to={`/campaigns/${campaignId}/sellers`}>
                Vendedores: {data.sellers}
              </Link>
            </Paper> */}
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Button onClick={handleNewRaffle}>Cadastrar venda</Button>
      </Section>
      <Section>
        <Button>Realizar sorteio</Button>
      </Section>
    </Container>
  );
};

export default Campaign;
