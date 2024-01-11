import Box from "@mui/material/Box";
import Header from "../components/templates/header";
import "../pages/topPage.css";
import Footer from "../components/templates/footer";

function App() {
  return (
    <>
      <Box>
        <Header />
        <h1>Welcome EC-SITE</h1>
        <Footer companyName={""} />
      </Box>
    </>
  );
}

export default App;
