import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import AppRouter from "./router/AppRouter";
import { ContextProvider } from "./state/context";

ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ContextProvider>,
  document.getElementById("root")
);
