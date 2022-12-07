import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCampaign, draw } from "../../client";
import { currency } from "helpers/formatter";
import Container from "components/Container";
import Section from "components/Section";
import Title from "components/Title";
import Content from "components/Content";
import { Link, Paper } from "./styles";
import Button from "components/Button";
import { ICampaign } from "./types";

const Campaign: FC = () => {
  const { campaignId = "" } = useParams();
  const navigate = useNavigate();

  const [campaign, setCampaign] = useState<ICampaign>({});

  const handleViewDrawResult = () => {
    navigate(`/campaigns/${campaignId}/draw`);
  };

  const handleDraw = () => {
    draw(campaignId).then(() => {
      handleViewDrawResult();
    });
  };

  useEffect(() => {
    getCampaign(campaignId)
      .then((result: ICampaign) => {
        setCampaign(result);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [campaignId]);

  return (
    <Container>
      <Section>
        <Title backLink={"/"} configUrl={`/campaigns/${campaignId}/edit`}>
          {campaign.name}
        </Title>
      </Section>
      <Content justifyCenter>
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
          {campaign.drawDate ? (
            <Button onClick={handleViewDrawResult}>Ver premiação</Button>
          ) : (
            <Button onClick={handleDraw}>Realizar sorteio</Button>
          )}
        </Section>
      </Content>
    </Container>
  );
};

export default Campaign;
