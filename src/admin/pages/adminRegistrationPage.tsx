import Box from "@mui/material/Box";
import AdminHeader from "../components/adminHeader";
import { Grid } from "@mui/material";
import RegistrationForm from "../components/registrationForm";
import AdminRegistration from "../components/adminRegistration";

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
        <Box
          sx={{
            boxShadow: 3,
            width: "90%",
            height: "500px",
            marginTop: "50px",
            marginLeft: "5%",
            paddingTop: "60px",
            justifyContent: "center",
          }}
        >
          <Grid container justifyContent="center">
            <Grid item>
              <RegistrationForm
                onSubmit={function (): // productName: string,
                // price: number,
                // description: string
                void {
                  throw new Error("Function not implemented.");
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: "90%",
            height: "120px",
            marginTop: "50px",
            marginLeft: "5%",
            paddingTop: "20px",
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

export default AdminRegistrationPage;
