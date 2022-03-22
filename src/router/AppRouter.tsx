import { Routes, Route } from "react-router-dom";
import { useUserContext } from "../state/context";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/Login";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import "./../styles/App.css";

function AppRouter() {
  const {
    state: { isLogged },
  } = useUserContext();

  return (
    <div className="App">
      {isLogged && <NavBar />}
      <Routes>
        <Route path={"/login"} element={<LoginPage />} />
        <Route
          path={"/"}
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path={"/about"}
          element={
            <PrivateRoute>
              <div>About</div>
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default AppRouter;
