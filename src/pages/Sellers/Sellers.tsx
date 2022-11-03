import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ActionsArea from "components/ActionsArea";
import Container from "components/Container";
import Section from "components/Section";
import Title from "components/Title";
import SellersTable from "./components/Table";
import Button from "components/Button";

const Sellers: FC = () => {
  const { campaignId } = useParams();
  const navigate = useNavigate();

  return (
    <Container>
      <Section>
        <Title backLink={`/campaigns/${campaignId}`}>
          Vendedores de campanha {campaignId}
        </Title>
      </Section>
      <Section mb={1}>
        <ActionsArea>
          <Button
            onClick={() => navigate(`/campaigns/${campaignId}/sellers/invite`)}
          >
            Convidar
          </Button>
        </ActionsArea>
      </Section>
      <Section>
        <SellersTable />
      </Section>
    </Container>
  );
};

export default Sellers;
