import { FC } from "react";
import { useParams } from "react-router-dom";
import Container from "components/Container";
import Section from "components/Section";
import Title from "components/Title";
import PrizesTable from "./components/Table";

const Prizes: FC = () => {
  const { campaignId } = useParams();

  return (
    <Container>
      <Section>
        <Title backButton={true}>Prêmios da campanha {campaignId}</Title>
      </Section>
      <Section>
        <PrizesTable />
      </Section>
    </Container>
  );
};

export default Prizes;
