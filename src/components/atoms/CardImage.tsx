// src/components/atoms/CardImage.tsx

import React from "react";

interface CardImageProps {
  src: string;
  alt: string;
}

const CardImage: React.FC<CardImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} style={{ width: "100%" }} />;
};

export default CardImage;
