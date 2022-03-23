import Container from "../../components/Container";

const HomePage = () => {
  const campaigns = [
    { name: "Ação Social", drawDate: "01/09/2022" },
    { name: "Formatura", drawDate: "02/10/2022" },
  ];
  return (
    <Container>
      <p style={{ textAlign: "center" }}>Seja bem vindo ao sorteio de rifa</p>
      <div style={{ textAlign: "end" }}>
        <button>Criar campanha</button>
      </div>
      <div style={{ maxWidth: "400px" }}>
        <h2>Minhas campanhas</h2>
        <div>
          {campaigns.map((campaign) => (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>{campaign.name}</div>
              <div>{campaign.drawDate}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
