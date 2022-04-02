import { Link, useNavigate } from "react-router-dom";
import Container from "components/Container";
import Section from "components/Section";

import { Description } from "./styles";
import CampaignsTable from "components/CampaignsTable";

const HomePage = () => {
  const header = ["Nome", "Data de sorteio"];

  const data = [
    {
      id: "1",
      name: "Ação Social",
      drawDate: "10/10/2022",
    },
    {
      id: "2",
      name: "Formatura",
      drawDate: "12/10/2022",
    },
  ];
  const navigate = useNavigate();
  return (
    <Container>
      <Section mb={4}>
        <Description>Seja bem vindo ao sorteio de rifa</Description>
      </Section>
      <Section>
        <CampaignsTable
          header={["Campanhas ativas", "Data de sorteio"]}
          data={data}
        />
      </Section>
    </Container>
  );
};

export default HomePage;
