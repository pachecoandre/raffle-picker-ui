import * as React from "react";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";

import { getRaffles } from "state/client";
import { Raffle } from "../../types";

import {
  TableCell,
  TableContainer,
  TablePagination,
  TableHead,
  Wrapper,
} from "./styles";
import { LinkButton } from "components/Button/styles";

const RafflesTable = () => {
  const { campaignId = "" } = useParams();
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [raffles, setRaffles] = React.useState<any>([]);
  const [totalRows, setTotalRows] = React.useState(0);

  const handleChangePage = async (_: unknown, newPage: number) => {
    const { data, totalRows } = await getRaffles(
      campaignId,
      newPage,
      rowsPerPage
    );
    setPage(newPage);
    setRaffles(data);
    setTotalRows(totalRows);
  };

  const handleChangeRowsPerPage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);

    if (newRowsPerPage * page > totalRows) {
      setPage(0);
      const { data } = await getRaffles(campaignId, 1, newRowsPerPage);
      setRaffles(data);
    } else {
      const { data } = await getRaffles(campaignId, page, newRowsPerPage);
      setRaffles(data);
    }
  };

  React.useEffect(() => {
    getRaffles(campaignId, page, rowsPerPage).then(({ data, totalRows }) => {
      getRaffles(campaignId, page, rowsPerPage);
      setRaffles(data);
      setTotalRows(totalRows);
    });
  }, [campaignId]);

  return (
    <Wrapper>
      <div>
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="center">Telefone</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {raffles.map((row: Raffle) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.participantName}
                  </TableCell>
                  <TableCell align="center">{row.participantPhone}</TableCell>
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

export default RafflesTable;
