// AdminDetailPage.tsx

import { useState } from "react";
import Box from "@mui/material/Box";
import AdminButton from "../components/adminButton";
import AdminDeleteModal from "../components/adminDeleteModal";
import AdminHeader from "../components/adminHeader";
import AdminEditModal from "../components/adminEditModal";

function AdminDetailPage() {
  const username = "AdminUser"; // ダミーのユーザー名
  const isLoggedIn = true; // ログイン状態を示すフラグ

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEdit = () => {
    console.log("Edit button clicked");
    setEditModalOpen(true);
  };

  const handleEditSave = (editedData: {
    name: string;
    price: number;
    description: string;
  }) => {
    console.log("Save edited data:", editedData);
    // 編集データを保存する処理を追加
  };

  const handleEditCancel = () => {
    setEditModalOpen(false);
  };
  const handleDelete = () => {
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    console.log("Delete confirmed");
    // 削除の処理を追加
    setDeleteModalOpen(false); // モーダルを閉じる
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false); // モーダルを閉じる
  };

  return (
    <>
      <Box>
        <AdminHeader
          username={username}
          isLoggedIn={isLoggedIn}
          onLogout={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Box
          sx={{
            boxShadow: "3",
            width: "90%",
            height: "120px",
            marginTop: "50px",
            marginLeft: "5%",
            paddingTop: "60px",
          }}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <AdminButton onClick={handleEdit} label="編集" />
          <AdminButton onClick={handleDelete} label="削除" />

          <AdminDeleteModal
            isOpen={isDeleteModalOpen}
            onClose={handleDeleteCancel}
            onConfirm={handleDeleteConfirm}
          />
          <AdminEditModal
            isOpen={isEditModalOpen}
            onClose={handleEditCancel}
            onSave={handleEditSave}
          />
        </Box>
      </Box>
    </>
  );
}

export default AdminDetailPage;
