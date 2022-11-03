import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { KeyboardBackspace as Back } from "@mui/icons-material";
import { Wrapper } from "./styles";

interface Props {
  link: string;
}

const GoBack: FC<Props> = ({ link }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <button onClick={() => navigate(link)}>
        <div>
          <Back fontSize="large" />
        </div>
      </button>
    </Wrapper>
  );
};

export default GoBack;
