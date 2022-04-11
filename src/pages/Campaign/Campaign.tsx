import { FC } from "react";
import { useParams } from "react-router-dom";
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
      amount: 2000,
      price: 10,
    },
    sellers: 4,
    prizes: 8,
  };

  return (
    <Container>
      <Section>
        <Title configUrl={`/campaigns/${campaignId}/edit`}>
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
            <Paper>Vendedores: {data.sellers}</Paper>
            <Paper>Prêmios: {data.prizes}</Paper>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <button>Realizar sorteio</button>
      </Section>
    </Container>
  );
};

export default Campaign;
