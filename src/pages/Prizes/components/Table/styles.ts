import styled from "styled-components";
import MuiTableCell from "@mui/material/TableCell";
import MuiTableHead from "@mui/material/TableHead";
import MuiTableContainer from "@mui/material/TableContainer";
import MuiTablePagination from "@mui/material/TablePagination";

type TP = typeof MuiTablePagination & { component: string };

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
    min-height: 517px;
  }
`;

export const TablePagination = styled(MuiTablePagination)<TP>`
  &.MuiTablePagination-root {
    color: unset;
  }
`;
