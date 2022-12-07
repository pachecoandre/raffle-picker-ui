import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useGlobalContext } from "state";
import Loader from "components/Loader";
import PrivateRoute from "./PrivateRoute";

const LoginPage = lazy(() => import("pages/Login"));
const HomePage = lazy(() => import("pages/Home"));
const NewCampaignPage = lazy(() => import("pages/NewCampaign"));
const CampaignPage = lazy(() => import("pages/Campaign"));
const SellersPage = lazy(() => import("pages/Sellers"));
const SellerInvitationPage = lazy(() => import("pages/SellerInvitation"));
const PrizesPage = lazy(() => import("pages/Prizes"));
const RafflesPage = lazy(() => import("pages/Raffles"));
const NewPrizePage = lazy(() => import("pages/NewPrize"));
const NewRafflePage = lazy(() => import("pages/NewRaffle"));
const DrawResultPage = lazy(() => import("pages/DrawResultPage"));
const NavBar = lazy(() => import("components/NavBar"));

function AppRouter() {
  const {
    state: { isLogged },
  } = useGlobalContext();

  return (
    <Suspense fallback={<Loader />}>
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
          path={"/campaigns/:campaignId/edit"}
          element={
            <PrivateRoute allowedRoles={["user", "admin"]}>
              <NewCampaignPage isEdit={true} />
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
              <SellerInvitationPage />
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
        <Route
          path={"/campaigns/:campaignId/raffles"}
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <RafflesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={"/campaigns/:campaignId/raffles/new"}
          element={
            <PrivateRoute allowedRoles={["admin", "seller"]}>
              <NewRafflePage />
            </PrivateRoute>
          }
        />
        <Route
          path={"/campaigns/:campaignId/draw"}
          element={
            <PrivateRoute allowedRoles={["admin", "seller"]}>
              <DrawResultPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
