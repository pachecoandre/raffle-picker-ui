import styled from "styled-components";

export const Label = styled.label`
  display: block;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  max-width: 200px;
  height: 18px;
  border-radius: 5px;
  border: solid 1px #777;
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
