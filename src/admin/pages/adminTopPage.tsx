import Box from "@mui/material/Box";
import AdminHeader from "../components/adminHeader";

function AdminTop() {
  const username = "AdminUser"; // ダミーのユーザー名
  const isLoggedIn = true; // ログイン状態を示すフラグ
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
      </Box>
    </>
  );
}

export default AdminTop;
