import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import LoginForm from "../../components/molecules/LoginForm";

function AdminLoginPage() {
  return (
    <>
      <Box>
        <Box
          sx={{
            width: "45%",
            height: "600px",
            boxShadow: 3,
            textAlign: "center",
            justifyContent: "center",
            marginLeft: "25%",
            marginTop: "10%",
            display: "flex",
          }}
        >
          <Grid
            container
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item style={{ display: "flex", justifyContent: "center" }}>
              <p
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "250px",
                  borderBottom: "2px solid #333",
                }}
              >
                管理者ログイン
              </p>
            </Grid>
            <Grid item xs={8}>
              <LoginForm />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default AdminLoginPage;
