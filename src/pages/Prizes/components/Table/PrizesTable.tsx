import { useEffect, useState, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";

import { getPrizes, deletePrize } from "client";
import {
  TableCell,
  TableContainer,
  TablePagination,
  TableHead,
  Wrapper,
} from "./styles";
import { LinkButton } from "components/Button/styles";
import ModalBase from "components/ModalBase";
import Button from "components/Button";
import { Prize } from "pages/Prizes/types";

const PrizesTable = () => {
  const { campaignId = "" } = useParams();

  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [page, setPage] = useState(0);
  const [prizes, setPrizes] = useState<any>([]);
  const [totalRows, setTotalRows] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [prizeToBeDeleted, setPrizeToBeDeleted] = useState<null | Prize>(null);

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
    event: ChangeEvent<HTMLInputElement>
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

  const handleDeleteModal = (prize: Prize) => {
    setModalIsOpen(true);
    setPrizeToBeDeleted(prize);
  };

  const handleDelete = (prizeId: number) => {
    setModalIsOpen(false);
    deletePrize(campaignId, prizeId).then(() => {
      getPrizes(campaignId, page, rowsPerPage).then(({ data, totalRows }) => {
        setPrizes(data);
        setTotalRows(totalRows);
      });
    });
  };

  useEffect(() => {
    getPrizes(campaignId, page, rowsPerPage).then(({ data, totalRows }) => {
      setPrizes(data);
      setTotalRows(totalRows);
    });
  }, [campaignId]);

  useEffect(() => {
    if (page > 0 && prizes.length === 0) {
      getPrizes(campaignId, page - 1, rowsPerPage).then(
        ({ data, totalRows }) => {
          setPrizes(data);
          setTotalRows(totalRows);
        }
      );
    }
  }, [prizes]);

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
                    <LinkButton onClick={() => handleDeleteModal(row)}>
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
          rowsPerPageOptions={[15, 50, 100]}
          component="div"
          count={totalRows}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
      <ModalBase open={modalIsOpen} handleClose={() => setModalIsOpen(false)}>
        <h1>Excluir prêmio {prizeToBeDeleted?.name || ""}?</h1>
        <Button onClick={() => setModalIsOpen(false)}>Cancelar</Button>
        <Button onClick={() => handleDelete(prizeToBeDeleted!.id)}>Sim</Button>
      </ModalBase>
    </Wrapper>
  );
};

export default PrizesTable;
