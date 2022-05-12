import { Routes, Route } from "react-router-dom";
import { useUserContext } from "state";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "pages/Login";
import Home from "pages/Home";
import NewCampaign from "pages/NewCampaign";
import Campaign from "pages/Campaign";
import NavBar from "components/NavBar";
import Sellers from "pages/Sellers";
import Prizes from "pages/Prizes";
import "../styles/App.css";

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
        <Route
          path={"/campaigns/:campaignId/sellers"}
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <Sellers />
            </PrivateRoute>
          }
        />
        <Route
          path={"/campaigns/:campaignId/prizes"}
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <Prizes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default AppRouter;
