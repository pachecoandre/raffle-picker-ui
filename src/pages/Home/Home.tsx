import Container from "../../components/Container";
import { ActionsArea, Description } from "./styles";
import CampaignsTable from "./CampaignsTable";

const HomePage = () => {
  const campaigns = [
    { name: "Ação Social", drawDate: "01/09/2022" },
    { name: "Formatura", drawDate: "02/10/2022" },
  ];
  return (
    <Container>
      <Description>Seja bem vindo ao sorteio de rifa</Description>
      <ActionsArea>
        <button>Criar campanha</button>
      </ActionsArea>
      <CampaignsTable campaigns={campaigns} />
    </Container>
  );
};

export default HomePage;
