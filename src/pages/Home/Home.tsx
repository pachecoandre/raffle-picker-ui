import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import { ActionsArea, Description } from "./styles";
import CampaignsTable from "./CampaignsTable";

const HomePage = () => {
  const campaigns = [
    { name: "Ação Social", drawDate: "01/09/2022" },
    { name: "Formatura", drawDate: "02/10/2022" },
  ];
  const navigate = useNavigate();
  return (
    <Container>
      <Description>Seja bem vindo ao sorteio de rifa</Description>
      <ActionsArea>
        <button onClick={() => navigate("/campaigns/new")}>
          Criar campanha
        </button>
      </ActionsArea>
      <CampaignsTable title={"Campanhas Ativas"} campaigns={campaigns} />
      <CampaignsTable title={"Campanhas Finalizadas"} campaigns={campaigns} />
    </Container>
  );
};

export default HomePage;
