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
import AdminProductCreation from "../components/adminProductCreation";

interface Product {
  id: number;
  name: string;
  price: number;
  content: string;
}

function AdminTop() {
  const [products, setProducts] = useState<Product[]>([]);
  const username = "AdminUser";
  const isLoggedIn = true;

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
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

  const handleCellClick = (productId: number) => {
    // ここにクリック時の処理を追加
    // 例: 商品の詳細画面に遷移するなど
    alert(`Product ID ${productId} clicked!`);
  };

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

          <AdminProductCreation />

          <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>商品名</TableCell>
                  <TableCell>金額</TableCell>
                  <TableCell>商品説明</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(products) && products.length > 0 ? (
                  products.map((product) => (
                    <TableRow key={product.id}>
                      <ClickableCell
                        onClick={() => handleCellClick(product.id)}
                      >
                        {product.name}
                      </ClickableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.content}</TableCell>
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

const ClickableCell: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => {
  return (
    <TableCell>
      <div
        style={{
          cursor: "pointer",
          color: "#1a73e8",
        }}
        onClick={onClick}
      >
        {children}
      </div>
    </TableCell>
  );
};

export default AdminTop;
