import { FC } from "react";
import Container from "components/Container";
import Section from "components/Section";
import Title from "components/Title";
import Content from "components/Content";
import { Link } from "./styles";

const NotFound: FC = () => {
  return (
    <Container>
      <Section>
        <Title backLink={"/"}>Não encontrado (404)</Title>
      </Section>
      <Content justifyCenter>
        <Section>
          <Link to={`/`}>Voltar para a página principal</Link>
        </Section>
      </Content>
    </Container>
  );
};

export default NotFound;
