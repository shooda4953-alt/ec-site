// src/components/atoms/CardTitle.tsx

import React from "react";

interface CardTitleProps {
  title: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ title }) => {
  return <h4>{title}</h4>;
};

export default CardTitle;
