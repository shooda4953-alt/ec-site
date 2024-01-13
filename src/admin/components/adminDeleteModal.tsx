import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AdminButton from "./adminButton";
import AdminRegistrationResultModal from "./adminDeleteResultModal";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const AdminDeleteModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const onConfirm = () => {
    setModalOpen(true);
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          width: 400,
          bgcolor: "background.paper",
          border: "1px solid #333",
          boxShadow: 24,
          p: 2,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <p>本当に削除しますか？</p>
        <AdminButton onClick={onConfirm} label="削除する" color="secondary" />
        <AdminRegistrationResultModal
          isOpen={isModalOpen}
          result={""}
          onClose={onClose}
        />
        <AdminButton onClick={onClose} label="キャンセル" />
      </Box>
    </Modal>
  );
};

export default AdminDeleteModal;
