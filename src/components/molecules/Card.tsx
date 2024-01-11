// src/components/molecules/Card.tsx

import React from "react";
import CardImage from "../atoms/CardImage";
import CardTitle from "../atoms/CardTitle";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, imageAlt, title }) => {
  return (
    <div
      style={{
        width: "430px", // カードの幅を設定
        border: "1px solid #ccc",
        marginBottom: "50px",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
      }}
    >
      <CardImage src={imageSrc} alt={imageAlt} />
      <CardTitle title={title} />
    </div>
  );
};

export default Card;
