import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "state";
import Container from "components/Container";
import Button from "components/Button";

const LoginPage: FC<{}> = () => {
  const navigate = useNavigate();
  const { setState } = useGlobalContext();
  const handleLogin = () => {
    setState({ isLogged: true });
    navigate("/");
  };
  return (
    <Container>
      <h1>LogIn</h1>
      <Button onClick={handleLogin}>LogIn</Button>
    </Container>
  );
};

export default LoginPage;
