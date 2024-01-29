import Box from "@mui/material/Box";
import AdminHeader from "../components/adminHeader";
import { Grid } from "@mui/material";
import AdminRegistration from "../components/adminRegistration";

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
        <Box
          sx={{
            width: "90%",
            height: "120px",
            marginTop: "50px",
            marginLeft: "5%",
            paddingTop: "60px",
          }}
        >
          <Grid container justifyContent="end">
            <Grid item>
              <AdminRegistration />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default AdminTop;
