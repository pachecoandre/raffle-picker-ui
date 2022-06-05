import { FC, ReactNode } from "react";
import Modal from "@mui/material/Modal";
import { Wrapper } from "./styles";

interface Props {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
}

const ModalBase: FC<Props> = ({ open, handleClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Wrapper>{children}</Wrapper>
    </Modal>
  );
};

export default ModalBase;
