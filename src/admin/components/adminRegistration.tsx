import React, { useState } from "react";
import Button from "../../components/atoms/Button";
import { useNavigate } from "react-router-dom";
import AdminRegistrationModal from "./adminRegistrationModal";

const AdminRegistration: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const adminRegistrationClick = () => {
    const currentPath = window.location.pathname;
    if (currentPath === "/admin/registration") {
      handleButtonClick();
    } else {
      navigate("/admin/registration");
    }
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
      <AdminRegistrationModal isOpen={isModalOpen} />
    </div>
  );
};

export default AdminRegistration;
