import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "components/Container";
import Section from "components/Section";
import Title from "components/Title";
import useWinners from "hooks/useWinners";

const Prizes: FC = () => {
  const { campaignId } = useParams();
  const navigate = useNavigate();
  const winners = useWinners();

  return (
    <Container>
      <Section>
        <Title backLink={`/campaigns/${campaignId}`}>
          Resultado da campanha {campaignId}
        </Title>
      </Section>
      <Section>
        <table>
          <thead>
            <tr>
              <td>Prêmio</td>
              <td>Nome</td>
              <td>Telefone</td>
            </tr>
          </thead>
          <tbody>
            {winners.length > 0
              ? winners.map((winner) => (
                  <tr>
                    <td>{winner?.prizeName}</td>
                    <td>{winner?.winnerName}</td>
                    <td>{winner?.winnerPhone}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </Section>
    </Container>
  );
};

export default Prizes;
