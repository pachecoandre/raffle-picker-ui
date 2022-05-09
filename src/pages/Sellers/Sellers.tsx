import { FC } from "react";
import { useParams } from "react-router-dom";
import Container from "components/Container";
import Section from "components/Section";
import Title from "components/Title";
import SellersTable from "./components/Table";

const Sellers: FC = () => {
  const { campaignId } = useParams();

  return (
    <Container>
      <Section>
        <Title backButton={true}>Vendedores de campanha {campaignId}</Title>
      </Section>
      <Section>
        <SellersTable />
      </Section>
    </Container>
  );
};

export default Sellers;
