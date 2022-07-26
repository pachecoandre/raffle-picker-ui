import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.button.bg};
  color: ${({ theme }) => theme.button.text};
  font-size: 14px;
  border: solid 1px ${({ theme }) => theme.button.border};
  border-radius: 24px;
  padding: 8px 20px;
  cursor: pointer;
`;

export const LinkButton = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.button.border};
  }
`;
