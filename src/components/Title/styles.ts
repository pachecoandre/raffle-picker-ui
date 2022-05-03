import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 32px;
  margin-right: 8px;
`;

const GoBack = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: #069;
  text-decoration: underline;
  cursor: pointer;
`;

export { GoBack, Text, Wrapper };
