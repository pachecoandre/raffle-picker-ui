import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import ActionsArea from "components/ActionsArea";
import { StyledTable } from "./styles";
import Button from "components/Button";
import Content from "components/Content";

interface Campaign {
  id: number;
  name: string;
  estimated_draw_date: string;
  draw_date: string;
  raffle_price: number;
  user_id: number;
  role: string;
}

interface Props {
  title?: string;
  data: Campaign[];
}

const CampaignsTable: FC<Props> = ({ title, data }) => {
  const navigate = useNavigate();
  return (
    <Content>
      <ActionsArea>
        <Link to={"/campaigns/new"}>
          Criar campanha <span style={{ fontSize: 22 }}>+</span>
        </Link>
      </ActionsArea>
      {title && <span>{title}</span>}
      <StyledTable>
        <thead>
          <tr>
            <th align="left">Campanhas</th>
            <th align="center">Data do sorteio</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td align="left">
                <Link to={`/campaigns/${row.id}`}>{row.name}</Link>
              </td>
              <td align="center">
                {format(new Date(row.estimated_draw_date), "dd/MM/yyyy")}
              </td>
              <td align="right">
                {row.draw_date ? (
                  <Link to={`/campaigns/${row.id}/draw`}>Ver premiação</Link>
                ) : (
                  <Button
                    onClick={() => navigate(`/campaigns/${row.id}/raffles/new`)}
                  >
                    Cadastrar rifa
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </Content>
  );
};

export default CampaignsTable;
