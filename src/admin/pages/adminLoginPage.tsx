import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import AdminLoginForm from "../components/adminLoginForm";

function AdminLoginPage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "45%",
          height: "700px",
          boxShadow: 3,
          textAlign: "center",
          marginLeft: "25%",
          marginTop: "10%",
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <p
              style={{
                width: "250px",
                borderBottom: "2px solid #333",
              }}
            >
              管理者ログイン
            </p>
          </Grid>
          <Grid item xs={8}>
            <AdminLoginForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AdminLoginPage;
