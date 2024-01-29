// src/pages/DetailPage.tsx

import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Header from "../components/templates/header";
import Footer from "../components/templates/footer";
import { Grid } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "../components/atoms/Button";
import { useCart } from "../components/templates/cartContext";

interface ProductDetail {
  id: number;
  name: string;
  price: number;
  content: string;
  // 他の商品情報も必要に応じて追加
}

function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const [productDetail, setProductDetail] =
    React.useState<ProductDetail | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const apiUrl = `http://localhost:8080/api/items/${id}`;

    const fetchProductDetail = async () => {
      try {
        const response = await axios.get<ProductDetail>(apiUrl);
        setProductDetail(response.data);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };

    fetchProductDetail();
  }, [id]);

  const handleAddToCart = () => {
    if (productDetail) {
      addToCart({
        id: productDetail.id,
        name: productDetail.name,
        price: productDetail.price,
        // 他の商品情報も必要に応じて追加
      });
    }
  };

  return (
    <>
      <Box>
        <Header />
        <Box
          sx={{
            boxShadow: 2,
            width: "60%",
            height: "600px",
            justifyContent: "center",
            marginTop: "150px",
            marginLeft: "20%",
            alignItems: "center",
          }}
        >
          <Grid container alignItems="center" justifyContent="center">
            <Grid item>
              {productDetail ? (
                <>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      marginTop: "20px",
                    }}
                  >
                    <img
                      src="https://via.placeholder.com/350"
                      alt={productDetail.name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <h1>{productDetail.name}</h1>
                    <p>金額: {productDetail.price}</p>
                  </Grid>
                  <Grid item>
                    <p>{productDetail.content}</p>
                  </Grid>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: "60%",
            height: "100px",
            marginTop: "20px",
            marginLeft: "20%",
          }}
        >
          <Grid container justifyContent="end">
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
            >
              カートに追加
            </Button>
          </Grid>
        </Box>

        <Footer companyName={"EC-SITE"} />
      </Box>
    </>
  );
}

export default DetailPage;
