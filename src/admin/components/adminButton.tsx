import React from "react";
import Button from "../../components/atoms/Button";

interface CloseButtonProps {
  onClick: () => void;
  label?: string; // ボタンのラベルを指定するためのプロパティ
  color?: "default" | "inherit" | "primary" | "secondary"; // ボタンの色を指定するためのプロパティ
}

const AdminButton: React.FC<CloseButtonProps> = ({
  onClick,
  label = "閉じる", // デフォルトのラベルは"閉じる"
}) => {
  const handleButtonClick = () => {
    onClick();
  };

  return (
    <Button variant="contained" onClick={handleButtonClick}>
      {label}
    </Button>
  );
};

export default AdminButton;
