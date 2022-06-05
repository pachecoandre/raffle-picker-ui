import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import AppRouter from "./router/AppRouter";
import { ContextProvider } from "./state";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <ContextProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ContextProvider>
);
