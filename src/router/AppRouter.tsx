import { Routes, Route } from "react-router-dom";
import { useUserContext } from "state";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "pages/Login";
import HomePage from "pages/Home";
import NewCampaignPage from "pages/NewCampaign";
import CampaignPage from "pages/Campaign";
import SellersPage from "pages/Sellers";
import SellerInvitation from "pages/SellerInvitation";
import PrizesPage from "pages/Prizes";
import NewPrizePage from "pages/NewPrize";
import NavBar from "components/NavBar";
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
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path={"/campaigns/new"}
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <NewCampaignPage />
            </PrivateRoute>
          }
        />
        <Route
          path={"/campaigns/:campaignId"}
          element={
            <PrivateRoute allowedRoles={["user", "admin"]}>
              <CampaignPage />
            </PrivateRoute>
          }
        />
        <Route
          path={"/campaigns/:campaignId/sellers"}
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <SellersPage />
            </PrivateRoute>
          }
        />
        <Route
          path={"/campaigns/:campaignId/sellers/invite"}
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <SellerInvitation />
            </PrivateRoute>
          }
        />
        <Route
          path={"/campaigns/:campaignId/prizes"}
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <PrizesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={"/campaigns/:campaignId/prizes/new"}
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <NewPrizePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default AppRouter;
