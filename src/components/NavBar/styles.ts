import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background-color: ${({ theme }) => theme.navBg};
  height: 34px;
`;
