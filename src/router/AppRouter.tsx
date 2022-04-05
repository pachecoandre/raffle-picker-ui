import { Routes, Route } from "react-router-dom";
import { useUserContext } from "../state";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/Login";
import Home from "../pages/Home";
import NewCampaign from "../pages/NewCampaign";
import Campaign from "../pages/Campaign";
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
        <Route
          path={"/campaigns/:campaignId"}
          element={
            <PrivateRoute allowedRoles={["user", "admin"]}>
              <Campaign />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default AppRouter;
