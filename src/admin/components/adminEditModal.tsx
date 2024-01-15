// AdminEditModal.tsx

import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AdminButton from "./adminButton";
import AdminEditResultModal from "./adminEditResultModal";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (editedData: {
    name: string;
    price: number;
    description: string;
  }) => void;
}

const AdminEditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  // onSave,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const onConfirm = () => {
    setModalOpen(true);
  };

  const [editedData, setEditedData] = React.useState({
    name: "", // 商品名
    price: 0, // 金額
    description: "", // 説明
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSave = () => {
  //   onSave(editedData);
  //   onClose(); // モーダルを閉じる
  // };

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
        <TextField
          label="商品名"
          name="name"
          value={editedData.name}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="金額"
          name="price"
          type="number"
          value={editedData.price}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="説明"
          name="description"
          multiline
          rows={4}
          value={editedData.description}
          onChange={handleInputChange}
          fullWidth
        />
        <AdminButton onClick={onConfirm} label="更新" color="primary" />
        <AdminEditResultModal
          isOpen={isModalOpen}
          result={""}
          onClose={onClose}
        />
        <AdminButton onClick={onClose} label="閉じる" />
      </Box>
    </Modal>
  );
};

export default AdminEditModal;
