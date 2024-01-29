import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import AdminHeader from "../components/adminHeader";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import AdminRegistration from "../components/adminRegistration";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
  content: string;
  // 他の商品情報も必要に応じて追加
}

function AdminTop() {
  const [products, setProducts] = useState<Product[]>([]);
  const username = "AdminUser"; // ダミーのユーザー名
  const isLoggedIn = true; // ログイン状態を示すフラグ

  useEffect(() => {
    // 商品一覧を取得するAPIのエンドポイントに合わせてURLを変更してください
    const apiUrl = "http://localhost:8080/api/items";

    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching product list:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Box>
        <AdminHeader
          username={username}
          isLoggedIn={isLoggedIn}
          onLogout={() => {
            // ログアウト処理
          }}
        />
        <Box
          sx={{
            width: "90%",
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

          <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>商品名</TableCell>
                  <TableCell>金額</TableCell>
                  <TableCell>商品説明</TableCell>
                  {/* 他の商品情報も必要に応じて追加 */}
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(products) && products.length > 0 ? (
                  products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.content}</TableCell>
                      {/* 他の商品情報も必要に応じて追加 */}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3}>商品がありません。</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default AdminTop;
