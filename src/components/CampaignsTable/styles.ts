import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
`;

export const ActionsArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  border: 1px solid #dddddd;
  border-radius: 8px;
  width: 100%;

  td,
  th {
    text-align: left;
    padding: 8px;
  }
`;
