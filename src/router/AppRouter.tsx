import { Routes, Route } from "react-router-dom";
import { useUserContext } from "../state";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/Login";
import NewCampaign from "../pages/NewCampaign";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import "./../styles/App.css";

function AppRouter() {
  const {
    state: { isLogged },
  } = useUserContext();

  return (
    <>
      {isLogged && <NavBar />}
      <Routes>
        <Route path={"/login"} element={<LoginPage />} />
        <Route
          path={"/"}
          element={
            <PrivateRoute allowedRoles={["user", "admin"]}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path={"/campaigns/new"}
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <NewCampaign />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default AppRouter;
