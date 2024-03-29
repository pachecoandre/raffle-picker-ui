import styled from "styled-components";

export const Label = styled.label`
  display: block;
`;

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.input.bg};
  color: ${({theme}) => theme.input.color};
  display: block;
  width: 100%;
  max-width: 200px;
  height: 18px;
  border-radius: 5px;
  border: ${(props) => (props.type === "file" ? "none" : "solid 1px #777")};
  padding: 8px;
  font-size: 14px;
  &:focus-visible {
    outline: none;
  }
`;

export const Wrapper = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
`;
