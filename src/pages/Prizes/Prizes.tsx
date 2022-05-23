import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ActionsArea from "components/ActionsArea";
import Container from "components/Container";
import Section from "components/Section";
import Title from "components/Title";
import PrizesTable from "./components/Table";

const Prizes: FC = () => {
  const { campaignId } = useParams();
  const navigate = useNavigate();

  return (
    <Container>
      <Section>
        <Title backButton={true}>Prêmios da campanha {campaignId}</Title>
      </Section>
      <Section mb={1}>
        <ActionsArea>
          <button
            onClick={() => navigate(`/campaigns/${campaignId}/prizes/new`)}
          >
            Cadastrar Prêmio
          </button>
        </ActionsArea>
      </Section>
      <Section>
        <PrizesTable />
      </Section>
    </Container>
  );
};

export default Prizes;
