// DeleteResultModal.tsx

import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AdminButton from "./adminButton";

interface DeleteResultModalProps {
  isOpen: boolean;
  result: "success" | "failure" | null;
  onClose: () => void;
}

const DeleteResultModal: React.FC<DeleteResultModalProps> = ({
  isOpen,
  result,
  onClose,
}) => {
  let message = "";
  let color = "primary";

  if (result === "success") {
    message = "削除が成功しました。";
    color = "primary";
  } else if (result === "failure") {
    message = "削除が失敗しました。";
    color = "secondary";
  }

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
        <p style={{ color }}>{message}</p>
        <AdminButton onClick={onClose} label="閉じる" />
      </Box>
    </Modal>
  );
};

export default DeleteResultModal;
