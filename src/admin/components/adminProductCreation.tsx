// AdminProductCreation.tsx
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const AdminProductCreation: React.FC = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productContent, setProductContent] = useState("");

  const handleProductCreate = async () => {
    try {
      const token = localStorage.getItem("adminToken"); // ローカルストレージからトークンを取得
      const apiUrl = "http://localhost:8080/api/items";

      const response = await axios.post(
        apiUrl,
        {
          name: productName,
          price: parseFloat(productPrice), // 数値型に変換
          content: productContent,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // トークンをヘッダーに含める
          },
        }
      );

      console.log("Product created successfully:", response.data);
      // 成功時の処理を追加（例: メッセージ表示、リダイレクトなど）

      // 入力フィールドをクリア
      setProductName("");
      setProductPrice("");
      setProductContent("");
    } catch (error) {
      console.error("Error creating product:", error);
      // エラー時の処理を追加（例: エラーメッセージ表示など）
    }
  };

  return (
    <div>
      <TextField
        label="商品名"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <TextField
        label="金額"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <TextField
        label="商品説明"
        value={productContent}
        onChange={(e) => setProductContent(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleProductCreate}>
        商品作成
      </Button>
    </div>
  );
};

export default AdminProductCreation;
