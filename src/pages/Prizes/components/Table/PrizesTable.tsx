import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { getPrizes } from "state/client";
import {
  TableCell,
  TableContainer,
  TablePagination,
  TableHead,
  Wrapper,
} from "./styles";
import { LinkButton } from "components/Button/styles";

const SellersTable = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [prizes, setPrizes] = React.useState<any>([]);
  const [totalRows, setTotalRows] = React.useState(0);

  const handleChangePage = (_: unknown, newPage: number) => {
    const { data, totalRows } = getPrizes(rowsPerPage, newPage);
    setPage(newPage);
    setPrizes(data);
    setTotalRows(totalRows);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);

    if (newRowsPerPage * page > totalRows) {
      setPage(0);
      const { data } = getPrizes(newRowsPerPage, 0);
      setPrizes(data);
    } else {
      const { data } = getPrizes(newRowsPerPage, page);
      setPrizes(data);
    }
  };

  React.useEffect(() => {
    const { data, totalRows } = getPrizes(rowsPerPage, page);
    setPrizes(data);
    setTotalRows(totalRows);
  }, []);

  return (
    <Wrapper>
      <div>
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Prêmio</TableCell>
                <TableCell align="center">Quantidade</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prizes.map((row: any) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.sales}</TableCell>
                  <TableCell align="right">
                    <LinkButton>Excluir</LinkButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          style={{ display: totalRows < 5 ? "none" : "" }}
          rowsPerPageOptions={[3, 5, 7]}
          component="div"
          count={totalRows}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </Wrapper>
  );
};

export default SellersTable;
