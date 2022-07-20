import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import ActionsArea from "components/ActionsArea";
import { Content, StyledTable, Wrapper } from "./styles";
import Button from "components/Button";

interface Campaign {
  id: string;
  name: string;
  drawDate: string;
}

interface Props {
  title?: string;
  header: string[];
  data: Campaign[];
}

const CampaignsTable: FC<Props> = ({ title, header, data }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
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
                <td>{row.drawDate}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </Content>
    </Wrapper>
  );
};

export default CampaignsTable;
