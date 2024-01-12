// AdminRegistrationModal.tsx (components/molecules フォルダ内)

import React from "react";
import Modal from "@mui/material/Modal";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface AdminRegistrationModalProps {
  isOpen: boolean;
}

const AdminRegistrationModal: React.FC<AdminRegistrationModalProps> = ({
  isOpen,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/admin");

    handleClose();
  };

  const handleClose = () => {
    // モーダルを閉じる処理（モーダルライブラリによって異なる可能性があります）
  };

  return (
    <Modal open={isOpen}>
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
        <Typography variant="h6" component="div">
          商品新規登録
        </Typography>
        {/* Add your registration form or content here */}
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          閉じる
        </Button>
      </Box>
    </Modal>
  );
};

export default AdminRegistrationModal;
