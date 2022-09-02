import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { currency } from "helpers/formatter";
import Container from "components/Container";
import Section from "components/Section";
import Title from "components/Title";
import { Link, Paper } from "./styles";
import Button from "components/Button";

const Campaign: FC = () => {
  const { campaignId } = useParams();
  const navigate = useNavigate();

  const data = {
    sellers: 6,
    prizes: 8,
    raffles: 400,
    rafflePrice: 10,
    revenue: 4000,
  };

  return (
    <Container>
      <Section>
        <Title backButton={true} configUrl={`/campaigns/${campaignId}/edit`}>
          Campanha {campaignId}
        </Title>
      </Section>
      <Section>
        <Paper>{currency(data.revenue)} Arrecadados</Paper>
      </Section>
      <Section>
        Valor da rifa: {currency(data.rafflePrice)}
      </Section>
      <Section>
        <Link to={`/campaigns/${campaignId}/prizes`}>
          Prêmios: {data.prizes}
        </Link>
      </Section>
      <Section>
        <Link to={`/campaigns/${campaignId}/raffles`}>
          Rifas vendidas: {data.raffles}
        </Link>
      </Section>
      <Section>
        <Button>Realizar sorteio</Button>
      </Section>
    </Container>
  );
};

export default Campaign;
