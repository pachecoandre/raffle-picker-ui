import { FC } from "react";

interface Campaign {
  name: string;
  drawDate: string;
}

interface Props {
  campaigns: Campaign[];
}

const CampaignsTable: FC<Props> = ({ campaigns }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <div>
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
  </div>
);

export default CampaignsTable;
