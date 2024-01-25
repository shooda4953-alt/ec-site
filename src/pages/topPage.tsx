import Box from "@mui/material/Box";
import Header from "../components/templates/header";
import Footer from "../components/templates/footer";
import { Grid } from "@mui/material";
import CardList from "../components/organisms/CardList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [productList, setProductList] = useState<[]>([]);

  useEffect(() => {
    // バックエンドから商品一覧を取得するAPIエンドポイント
    const apiUrl = "http://localhost:8080/api/items";

    // APIリクエストを行う関数
    const fetchProductList = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log(response.data.data);
        setProductList(response.data.data); // 取得した商品一覧をstateにセット
      } catch (error) {
        console.error("Error fetching product list:", error);
      }
    };

    // ページがロードされたときに商品一覧を取得
    fetchProductList();
  }, []);
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
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
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
          <CardList cards={productList} />
        </Box>
        <Footer companyName={"EC-SITE"} />
      </Box>
    </>
  );
}

export default App;
