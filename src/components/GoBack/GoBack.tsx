import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { KeyboardBackspace as Back } from "@mui/icons-material";
import { Wrapper } from "./styles";

const GoBack: FC = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <button onClick={() => navigate(-1)}>
        <div>
          <Back fontSize="large" />
        </div>
      </button>
    </Wrapper>
  );
};

export default GoBack;
