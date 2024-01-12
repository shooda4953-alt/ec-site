import Box from "@mui/material/Box";
import AdminHeader from "../components/adminHeader";
import { Grid } from "@mui/material";

function AdminRegistrationPage() {
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
        <Box>
          <Grid container>
            <Grid item></Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default AdminRegistrationPage;
