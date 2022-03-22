import { useContext } from "react";
import { IUserContext } from "../state/types";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "../state/context";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/Login";
import "./../styles/App.css";

function AppRouter() {
  const { state, setState } = useContext<IUserContext>(UserContext);

  return (
    <div className="App">
      <h1>Sorteio de Rifa</h1>
      <p>Logado: {state.isLogged ? "Logado" : "Não logado"}</p>
      <button onClick={() => setState({ isLogged: !state.isLogged })}>
        Change
      </button>
      <Routes>
        <Route path={"/login"} element={<LoginPage />} />
        <Route
          path={"/"}
          element={
            <PrivateRoute>
              <div>Home</div>
            </PrivateRoute>
          }
        />
        <Route path={"/about"} element={<div>About</div>} />
      </Routes>
    </div>
  );
}

export default AppRouter;
