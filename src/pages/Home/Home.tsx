import Container from "../../components/Container";

const HomePage = () => {
  const campaigns = [{ name: "Ação Social" }, { name: "Formatura" }];
  return (
    <Container>
      <p style={{ textAlign: "center" }}>Seja bem vindo ao sorteio de rifa</p>
      <div style={{ textAlign: "end" }}>
        <button>Criar campanha</button>
      </div>
    </Container>
  );
};

export default HomePage;
