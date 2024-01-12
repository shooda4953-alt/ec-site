// DeleteConfirmationModal.tsx

import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AdminButton from "./adminButton";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const AdminDeleteModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
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
        <AdminButton onClick={onClose} label="キャンセル" />
      </Box>
    </Modal>
  );
};

export default AdminDeleteModal;
