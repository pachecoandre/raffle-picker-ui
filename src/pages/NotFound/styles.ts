import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

const Link = styled(ReactRouterLink)`
  color: ${({ theme }) => theme.title};
`;

export { Link };
