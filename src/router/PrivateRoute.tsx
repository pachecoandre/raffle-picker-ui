import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../state/context";
import AccessDenied from "./AccessDenied";

interface Props {
  children: JSX.Element;
  allowedRoles: string[];
}

const PrivateRoute: FC<Props> = ({ children, allowedRoles }) => {
  const { state } = useUserContext();
  const isLogged = state.isLogged;
  const hasAccess = () => allowedRoles.includes(state.role);

  // https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx
  // https://medium.com/front-end-weekly/how-to-create-private-route-with-react-router-v6-fa4b9d74cb55

  if (isLogged && hasAccess()) {
    return children;
  }

  if (isLogged && !hasAccess()) {
    return <AccessDenied />;
  }

  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
