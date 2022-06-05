import styled from "styled-components";

export const Label = styled.label`
  display: block;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 80%;
  max-width: 100%;
  height: 42px;
  max-height: 400px;
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
