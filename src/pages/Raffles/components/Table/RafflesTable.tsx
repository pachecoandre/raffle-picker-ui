import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Button from "components/Button";
import { getRaffles, deleteRaffle } from "client";
import { Raffle } from "../../types";

import {
  TableCell,
  TableContainer,
  TablePagination,
  TableHead,
  Wrapper,
} from "./styles";
import { LinkButton } from "components/Button/styles";
import ModalBase from "components/ModalBase";

const RafflesTable = () => {
  const { campaignId = "" } = useParams();
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [raffles, setRaffles] = useState<any>([]);
  const [totalRows, setTotalRows] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [raffleToBeDeleted, setRaffleToBeDeleted] = useState<Raffle | null>(
    null
  );

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
    event: ChangeEvent<HTMLInputElement>
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

  const handleModal = (row: Raffle) => {
    setRaffleToBeDeleted(row);
    setModalIsOpen(true);
  };

  const handleDelete = (id: number) => {
    setModalIsOpen(false);
    deleteRaffle(campaignId, id).then(() => {
      getRaffles(campaignId, page, rowsPerPage).then(({ data, totalRows }) => {
        setRaffles(data);
        setTotalRows(totalRows);
      });
    });
  };

  useEffect(() => {
    getRaffles(campaignId, page, rowsPerPage).then(({ data, totalRows }) => {
      setRaffles(data);
      setTotalRows(totalRows);
    });
  }, [campaignId]);

  useEffect(() => {
    if (page > 0 && raffles.length === 0) {
      setPage(page - 1);
      getRaffles(campaignId, page - 1, rowsPerPage).then(
        ({ data, totalRows }) => {
          setRaffles(data);
          setTotalRows(totalRows);
        }
      );
    }
  }, [raffles]);

  if (raffles.length === 0) {
    return null;
  }

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
                    <LinkButton onClick={() => handleModal(row)}>
                      Excluir
                    </LinkButton>
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
      <ModalBase open={modalIsOpen} handleClose={() => setModalIsOpen(false)}>
        <h1>Deletar rifa de {raffleToBeDeleted?.participantName}?</h1>
        <Button onClick={() => handleDelete(raffleToBeDeleted!.id)}>Sim</Button>
        <Button onClick={() => setModalIsOpen(false)}>Não</Button>
      </ModalBase>
    </Wrapper>
  );
};

export default RafflesTable;
