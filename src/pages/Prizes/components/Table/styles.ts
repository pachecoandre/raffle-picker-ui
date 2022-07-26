import styled from "styled-components";
import MuiTableCell from "@mui/material/TableCell";
import MuiTableHead from "@mui/material/TableHead";
import MuiTableContainer from "@mui/material/TableContainer";

export const TableHead = styled(MuiTableHead)`
  border-bottom: solid 1px #ccc;

  th {
    font-weight: 600;
  }
`;

export const TableCell = styled(MuiTableCell)`
  &.MuiTableCell-root {
    border-bottom: none;
    color: ${({ theme }) => theme.text};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TableContainer = styled(MuiTableContainer)`
  &.MuiTableContainer-root {
    min-height: 220px;
  }
`;
