import React from "react";
import Button from "../../components/atoms/Button";

interface CloseButtonProps {
  onClick: () => void;
  label?: string;
  color?: "default" | "inherit" | "primary" | "secondary";
}

const AdminButton: React.FC<CloseButtonProps> = ({
  onClick,
  label = "閉じる",
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
