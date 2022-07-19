import { createRoot } from "react-dom/client";

import { ContextProvider } from "./state";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
