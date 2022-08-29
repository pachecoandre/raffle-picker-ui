import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

const Paper = styled.div`
  border: solid 1px #dddddd;
  border-radius: 4px;
  margin: 12px 0;
  padding: 12px;
`;

const Link = styled(ReactRouterLink)`
  color: ${({ theme }) => theme.title};
`;

export { Link, Paper };
