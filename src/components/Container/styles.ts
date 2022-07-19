import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 8px;
  padding-left: 8px;
  height: calc(100vh - 37px);
  background-color: ${({ theme }) => theme.marginBg};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: ${({ theme }) => theme.bg};
  padding: 16px;
`;
