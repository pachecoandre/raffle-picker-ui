import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/Login";
import "./../styles/App.css";

function AppRouter() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <div className="App">
      <h1>Sorteio de Rifa</h1>
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
