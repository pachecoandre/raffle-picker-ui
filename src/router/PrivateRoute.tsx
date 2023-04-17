import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../state";
import { client } from "../client";
import AccessDenied from "./AccessDenied";
import Loader from "components/Loader";

interface Props {
  children: JSX.Element;
  allowedRoles: string[];
}

const PrivateRoute: FC<Props> = ({ children, allowedRoles }) => {
  const {
    state: { isLogged, role },
    setState,
  } = useGlobalContext();

  const navigate = useNavigate();
  const hasAccess = () => allowedRoles.includes(role);

  useEffect(() => {
    const token = localStorage.getItem("t");
    if (token) {
      client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setState({ isLogged: true });
    } else {
      navigate("/login");
    }
  }, []);

  // https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx
  // https://medium.com/front-end-weekly/how-to-create-private-route-with-react-router-v6-fa4b9d74cb55

  if (isLogged && hasAccess()) {
    return children;
  }

  if (isLogged && !hasAccess()) {
    return <AccessDenied />;
  }

  return <Loader />;
};

export default PrivateRoute;
