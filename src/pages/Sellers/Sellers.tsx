import { FC } from "react";
import { useParams } from "react-router-dom";
import Container from "components/Container";
import Section from "components/Section";
import Title from "components/Title";
import Seller from "./components/Seller";

const Sellers: FC = () => {
  const { campaignId } = useParams();

  const data = [
    { id: "1", name: "Anastácio" },
    { id: "2", name: "João" },
    { id: "3", name: "Reginaldo" },
  ];

  return (
    <Container>
      <Section>
        <Title backButton={true}>Vendedores de campanha {campaignId}</Title>
      </Section>
      <Section>
        {data.map((seller) => (
          <Seller key={seller.id} name={seller.name} />
        ))}
      </Section>
    </Container>
  );
};

export default Sellers;
