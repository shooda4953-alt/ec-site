import Box from "@mui/material/Box";
import Header from "../components/templates/header";
import Footer from "../components/templates/footer";
import { Grid } from "@mui/material";
import CardList from "../components/organisms/CardList";

function App() {
  const sampleCards = [
    {
      id: "1",
      imageSrc: "https://via.placeholder.com/150",
      imageAlt: "Image 1",
      title: "Card 1",
    },
    {
      id: "2",
      imageSrc: "https://via.placeholder.com/150",
      imageAlt: "Image 2",
      title: "Card 2",
    },
    {
      id: "3",
      imageSrc: "https://via.placeholder.com/150",
      imageAlt: "Image 3",
      title: "Card 3",
    },
    {
      id: "4",
      imageSrc: "https://via.placeholder.com/150",
      imageAlt: "Image 1",
      title: "Card 1",
    },
    {
      id: "5",
      imageSrc: "https://via.placeholder.com/150",
      imageAlt: "Image 2",
      title: "Card 2",
    },
    {
      id: "6",
      imageSrc: "https://via.placeholder.com/150",
      imageAlt: "Image 2",
      title: "Card 2",
    },
  ];
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
            marginTop: "80px",
            marginLeft: "5%",
          }}
        >
          <Grid container alignItems="center" justifyContent="center">
            <Grid item>
              <p>Welcome to EC-SITE</p>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            width: "90%",
            marginTop: "80px",
            marginLeft: "5%",
          }}
        >
          <CardList cards={sampleCards} />
        </Box>
        <Footer companyName={"EC-SITE"} />
      </Box>
    </>
  );
}

export default App;
