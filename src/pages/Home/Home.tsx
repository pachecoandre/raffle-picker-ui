import { useEffect, useState } from "react";
import Container from "components/Container";
import Section from "components/Section";

import { getCampaigns } from "state/client";
import { Description } from "./styles";
import CampaignsTable from "pages/Home/components/CampaignsTable";

const HomePage = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCampaigns().then((result) => {
      setCampaigns(result);
    });
  }, []);

  return (
    <Container>
      <Section mb={4}>
        <Description>Seja bem vindo ao sorteio de rifa</Description>
      </Section>
      <Section>
        <CampaignsTable
          header={["Campanhas", "Data de sorteio"]}
          data={campaigns}
        />
      </Section>
    </Container>
  );
};

export default HomePage;
