import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { currency } from "helpers/formatter";
import Container from "components/Container";
import Section from "components/Section";
import Title from "components/Title";
import { Paper } from "./styles";

const Campaign: FC = () => {
  const { campaignId } = useParams();

  const data = {
    sales: {
      quantity: 400,
      amount: 4000,
      price: 10,
    },
    sellers: 6,
    prizes: 8,
    participants: 50,
  };

  return (
    <Container>
      <Section>
        <Title backButton={true} configUrl={`/campaigns/${campaignId}/edit`}>
          Campanha {campaignId}
        </Title>
      </Section>
      <Section>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper>Arrecadado: {currency(data.sales.amount)}</Paper>
            <Paper>Rifas vendidas: {data.sales.quantity}</Paper>
            <Paper>Valor da rifa: {currency(data.sales.price)}</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper>
              <Link to={`/campaigns/${campaignId}/sellers`}>
                Vendedores: {data.sellers}
              </Link>
            </Paper>
            <Paper>
              <Link to={`/campaigns/${campaignId}/prizes`}>
                Prêmios: {data.prizes}
              </Link>
            </Paper>
            <Paper>Participantes: {data.participants}</Paper>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <button>Cadastrar venda</button>
      </Section>
      <Section>
        <button>Realizar sorteio</button>
      </Section>
    </Container>
  );
};

export default Campaign;
