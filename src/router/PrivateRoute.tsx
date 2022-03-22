import { Navigate } from "react-router-dom";
import { useUserContext } from '../state/context'

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { state } =  useUserContext()
  
  // https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx

  if (!state.isLogged) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;
