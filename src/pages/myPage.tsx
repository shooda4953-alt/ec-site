import Box from "@mui/material/Box";
import Header from "../components/templates/header";
import Footer from "../components/templates/footer";

function MyPage() {
  return (
    <>
      <Box>
        <Header />

        <Footer companyName={"EC-SITE"} />
      </Box>
    </>
  );
}

export default MyPage;
