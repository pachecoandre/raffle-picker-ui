import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ActionsArea from "components/ActionsArea";
import Container from "components/Container";
import Section from "components/Section";
import Title from "components/Title";
import SellersTable from "./components/Table";

const Sellers: FC = () => {
  const { campaignId } = useParams();
  const navigate = useNavigate();

  return (
    <Container>
      <Section>
        <Title backButton={true}>Vendedores de campanha {campaignId}</Title>
      </Section>
      <Section mb={1}>
        <ActionsArea>
          <button
            onClick={() => navigate(`/campaigns/${campaignId}/sellers/invite`)}
          >
            Convidar
          </button>
        </ActionsArea>
      </Section>
      <Section>
        <SellersTable />
      </Section>
    </Container>
  );
};

export default Sellers;
