import { FC } from "react";

interface Campaign {
  name: string;
  drawDate: string;
}

interface Props {
  title?: string;
  campaigns: Campaign[];
}

const CampaignsTable: FC<Props> = ({ title, campaigns }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginBottom: "32px",
    }}
  >
    <div>
      <h2>{title}</h2>
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
