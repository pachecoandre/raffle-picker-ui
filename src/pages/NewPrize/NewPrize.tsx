import { FC } from "react";
import { useParams } from "react-router-dom";
import Container from "components/Container";
import Section from "components/Section";
import Title from "components/Title";

const Prizes: FC = () => {
  const { campaignId } = useParams();

  return (
    <Container>
      <Section>
        <Title backButton={true}>Cadastrar novo prêmio na campanha {campaignId}</Title>
      </Section>
    </Container>
  );
};

export default Prizes;
