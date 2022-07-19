import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import AppRouter from "./router/AppRouter";
import { useGlobalContext } from "./state";
import GlobalStyle from "./styles/global-style";

function App() {
  const { state } = useGlobalContext();
  return (
    <ThemeProvider theme={state.theme}>
      <GlobalStyle />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
