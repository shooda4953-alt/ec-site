import React from "react";
import Button from "../../components/atoms/Button";
import { useNavigate } from "react-router-dom";

const AdminRegistration: React.FC = () => {
  const navigate = useNavigate();
  const adminRegistrationClick = () => {
    // ボタンがクリックされた時の処理
    navigate("/admin/registration");
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={adminRegistrationClick}
      >
        商品新規登録
      </Button>
    </div>
  );
};

export default AdminRegistration;
