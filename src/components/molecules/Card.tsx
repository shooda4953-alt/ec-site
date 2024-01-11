// src/components/molecules/Card.tsx

import React from "react";
import CardImage from "../atoms/CardImage";
import CardTitle from "../atoms/CardTitle";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ imageSrc, imageAlt, title, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: "pointer",
        width: "430px",
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
      <CardImage src={imageSrc} alt={imageAlt} />
      <CardTitle title={title} />
    </div>
  );
};

export default Card;
