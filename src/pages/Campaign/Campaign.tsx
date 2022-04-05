import { FC } from "react";
import { useParams } from "react-router-dom";
import Container from "components/Container";
import Title from "components/Title";
import Section from "components/Section";

const Campaign: FC = () => {
  const { campaignId } = useParams();

  return (
    <Container>
      <Section>
        <Title configUrl={`/campaigns/${campaignId}/edit`}>
          Campanha {campaignId}
        </Title>
      </Section>
    </Container>
  );
};

export default Campaign;
