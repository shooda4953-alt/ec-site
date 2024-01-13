import React from "react";
import Modal from "@mui/material/Modal";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface AdminRegistrationResultModalProps {
  isOpen: boolean;
  result: string;
  onClose: () => void;
}

const AdminRegistrationResultModal: React.FC<
  AdminRegistrationResultModalProps
> = ({ isOpen, result, onClose }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/admin");

    handleClose();
  };

  const handleClose = () => {
    // モーダルを閉じる処理
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
        <Typography variant="h6" component="div">
          結果
        </Typography>
        <Typography variant="body1" component="div" sx={{ marginTop: 2 }}>
          {result}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
          sx={{ marginTop: 2 }}
        >
          閉じる
        </Button>
      </Box>
    </Modal>
  );
};

export default AdminRegistrationResultModal;
