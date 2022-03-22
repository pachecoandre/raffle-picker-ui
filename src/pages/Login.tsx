import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../state/context";

const LoginPage: FC<{}> = () => {
  const navigate = useNavigate();
  const { state, setState } = useUserContext();
  const handleLogin = () => {
    setState({ ...state, isLogged: true });
    navigate("/");
  };
  return (
    <>
      <h1>LogIn</h1>
      <button onClick={handleLogin}>LogIn</button>
    </>
  );
};

export default LoginPage;
