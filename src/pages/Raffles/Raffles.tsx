import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ActionsArea from "components/ActionsArea";
import Container from "components/Container";
import Section from "components/Section";
import Title from "components/Title";
import RafflesTable from "./components/Table";
import Button from "components/Button";

const Raffles: FC = () => {
  const { campaignId } = useParams();
  const navigate = useNavigate();

  return (
    <Container>
      <Section>
        <Title backLink={`/campaigns/${campaignId}`}>
          Rifas vendidas de campanha {campaignId}
        </Title>
      </Section>
      <Section mb={1}>
        <ActionsArea>
          <Button
            onClick={() => navigate(`/campaigns/${campaignId}/raffles/new`)}
          >
            Cadastrar Rifa
          </Button>
        </ActionsArea>
      </Section>
      <Section>
        <RafflesTable />
      </Section>
    </Container>
  );
};

export default Raffles;
