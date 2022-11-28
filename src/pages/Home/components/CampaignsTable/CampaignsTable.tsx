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
  header: string[];
  data: Campaign[];
}

const CampaignsTable: FC<Props> = ({ title, header, data }) => {
  const navigate = useNavigate();
  return (
    <Content>
      <ActionsArea>
        <Button onClick={() => navigate("/campaigns/new")}>
          Criar campanha
        </Button>
      </ActionsArea>
      {title && <span>{title}</span>}
      <StyledTable>
        <thead>
          <tr>
            {header.map((label) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>
                <Link to={`/campaigns/${row.id}`}>{row.name}</Link>
              </td>
              <td>{format(new Date(row.estimated_draw_date), 'dd/MM/yyyy')}</td>
              <td>
                <Link to={`/campaigns/${row.id}/raffles/new`}>Cadastrar rifa</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </Content>
  );
};

export default CampaignsTable;
