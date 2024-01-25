// src/components/organisms/CardList.tsx
import React from "react";
import Card from "../molecules/Card";

interface Product {
  id: number;
  name: string;
  price: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  createdBy: number;
  updatedBy: number;
  imageSrc: string;
}

interface CardListProps {
  cards: Product[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "16px",
        flexWrap: "wrap",
      }}
    >
      {cards.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          price={product.price}
          imageSrc={"https://via.placeholder.com/350"}
          imageAlt={""}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default CardList;
