// src/components/organisms/CardList.tsx
import React from "react";
import Card from "../molecules/Card";

interface CardListProps {
  cards: { id: string; imageSrc: string; imageAlt: string; title: string }[];
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
      {cards.map((card) => (
        <Card
          key={card.id}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          title={card.title}
        />
      ))}
    </div>
  );
};

export default CardList;
