import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getSellers } from "state/client";

const SellersTable = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [sellers, setRows] = React.useState<any>([]);
  const [totalRows, setTotalRows] = React.useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    const { data, totalRows } = getSellers(rowsPerPage, newPage);
    setPage(newPage);
    setRows(data);
    setTotalRows(totalRows);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);

    if (newRowsPerPage * page > totalRows) {
      setPage(0);
      const { data } = getSellers(newRowsPerPage, 0);
      setRows(data);
    } else {
      const { data } = getSellers(newRowsPerPage, page);
      setRows(data);
    }
  };

  React.useEffect(() => {
    const { data, totalRows } = getSellers(rowsPerPage, page);
    setRows(data);
    setTotalRows(totalRows);
  }, []);

  return (
    <Paper>
      <TableContainer>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Vendedor</TableCell>
              <TableCell align="center">Rifas vendidas</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sellers.map((row: any) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.sales}</TableCell>
                <TableCell align="right">
                  <button>Remover</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[3, 5, 7]}
        component="div"
        count={totalRows}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default SellersTable;
