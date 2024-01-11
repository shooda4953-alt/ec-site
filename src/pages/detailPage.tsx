import Box from "@mui/material/Box";
import Header from "../components/templates/header";
import Footer from "../components/templates/footer";
import { Grid } from "@mui/material";

function DetailPage() {
  return (
    <>
      <Box>
        <Header />
        <Box
          sx={{
            boxShadow: 2,
            width: "90%",
            height: "80px",
            justifyContent: "center",
            marginTop: "100px",
            marginLeft: "5%",
          }}
        >
          <Grid container alignItems="center" justifyContent="center">
            <Grid item>
              <p>Welcome to EC-SITE</p>
            </Grid>
          </Grid>
        </Box>

        <Footer companyName={"EC-SITE"} />
      </Box>
    </>
  );
}

export default DetailPage;
