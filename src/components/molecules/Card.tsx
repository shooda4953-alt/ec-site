// src/components/molecules/Card.tsx

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  id: number;
  imageSrc: string;
  imageAlt: string;
  name: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ id, imageSrc, imageAlt, name, price }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [productDetail, setProductDetail] = useState<any>(null);
  const navigate = useNavigate();

  const handleCardClick = async () => {
    try {
      // 商品の詳細情報を取得するAPIエンドポイント
      const apiUrl = `http://localhost:8080/api/items/${id}`;

      // APIリクエストを行う
      const response = await axios.get(apiUrl);

      console.log("Product Detail:", response.data.id);

      // ここで商品詳細を取得した後、適切な処理を実装してください。
      // 例えば、取得した詳細情報をstateにセットし、詳細ページに遷移するなど。
      // 取得した詳細情報をstateにセット
      setProductDetail(response.data);
      navigate(`/detail/${id}`);
    } catch (error) {
      console.error("Error fetching product detail:", error);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: "pointer",
        width: "30%",
        border: "1px solid #ccc",
        marginBottom: "50px",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
        backgroundColor: isHovered ? "#e0e0e0" : "white",
        transition: "background-color 0.3s ease",
      }}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
        }}
      />
      <h3>{name}</h3>
      <p>金額: {price}</p>
    </div>
  );
};

export default Card;
