import * as React from "react";
import { useParams } from "react-router-dom";
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
  const { campaignId = "" } = useParams();

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [prizes, setPrizes] = React.useState<any>([]);
  const [totalRows, setTotalRows] = React.useState(0);

  const handleChangePage = async (_: unknown, newPage: number) => {
    const { data, totalRows } = await getPrizes(
      campaignId,
      newPage,
      rowsPerPage
    );
    setPage(newPage);
    setPrizes(data);
    setTotalRows(totalRows);
  };

  const handleChangeRowsPerPage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);

    if (newRowsPerPage * page > totalRows) {
      setPage(0);
      const { data } = await getPrizes(campaignId, 0, newRowsPerPage);
      setPrizes(data);
    } else {
      const { data } = await getPrizes(campaignId, page, newRowsPerPage);
      setPrizes(data);
    }
  };

  React.useEffect(() => {
    getPrizes(campaignId, page, rowsPerPage).then(({ data, totalRows }) => {
      console.log("data", data)
      console.log("totalRows", totalRows)
      setPrizes(data);
      setTotalRows(totalRows);
    });
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
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.quantity}</TableCell>
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
