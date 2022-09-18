import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCampaign } from "../../state/client";
import { currency } from "helpers/formatter";
import Container from "components/Container";
import Section from "components/Section";
import Title from "components/Title";
import Content from "components/Content";
import { Link, Paper } from "./styles";
import Button from "components/Button";

interface ICampaign {
  sellers?: number;
  prizesCount?: number;
  rafflesCount?: number;
  rafflePrice?: number;
  revenue?: number;
}

const Campaign: FC = () => {
  const { campaignId } = useParams();

  const [campaign, setCampaign] = useState<ICampaign>({});

  useEffect(() => {
    getCampaign(campaignId)
      .then((result) => {
        setCampaign(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [campaignId]);

  return (
    <Container>
      <Section>
        <Title backButton={true} configUrl={`/campaigns/${campaignId}/edit`}>
          Campanha {campaignId}
        </Title>
      </Section>
      <Content justifyCenter={true}>
        <Section>
          <Paper>{currency(campaign.revenue)} Arrecadados</Paper>
        </Section>
        <Section>Valor da rifa: {currency(campaign.rafflePrice)}</Section>
        <Section>
          <Link to={`/campaigns/${campaignId}/raffles`}>
            Rifas vendidas: {campaign.rafflesCount}
          </Link>
        </Section>
        <Section>
          <Link to={`/campaigns/${campaignId}/prizes`}>
            Prêmios: {campaign.prizesCount}
          </Link>
        </Section>
        <Section>
          <Button>Realizar sorteio</Button>
        </Section>
      </Content>
    </Container>
  );
};

export default Campaign;
