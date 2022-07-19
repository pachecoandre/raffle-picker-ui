import { createGlobalStyle } from "styled-components";

import themes from "./themes";

export interface Props {
  theme: typeof themes.orange;
}

const GlobalStyle = createGlobalStyle<Props>`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
  
  a:link {
    color: ${({ theme }) => theme.text};
  }

  a:visited {
    color: ${({ theme }) => theme.text};
  }

  a:hover {
    color: ${({ theme }) => theme.text};
  }

  a:active {
    color: unset;
  }
`;

export default GlobalStyle;
