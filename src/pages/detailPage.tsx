import Box from "@mui/material/Box";
import Header from "../components/templates/header";
import Footer from "../components/templates/footer";
import { Grid } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const [productDetail, setProductDetail] = useState<any>(null); // 商品の詳細情報

  useEffect(() => {
    // 商品の詳細情報を取得するAPIエンドポイント
    const apiUrl = `https://localhost:8080/api/items/`;

    // APIリクエストを行う関数
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProductDetail(response.data);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };

    // 商品IDが変更されたときに詳細情報を再取得
    fetchProductDetail();
  }, [id]);
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
          {/* 商品の詳細情報を表示 */}
          {productDetail && (
            <div>
              <p>{productDetail.id}</p>
              <h1>{productDetail.name}</h1>
              <p>Price: ${productDetail.price}</p>
              {/* 他の商品詳細情報もここに表示 */}
            </div>
          )}
        </Box>
        <Footer companyName={"EC-SITE"} />
      </Box>
    </>
  );
}

export default DetailPage;
