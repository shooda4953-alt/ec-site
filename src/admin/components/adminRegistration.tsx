import React, { useState } from "react";
import Button from "../../components/atoms/Button";
import { useNavigate, useLocation } from "react-router-dom";
import AdminRegistrationModal from "./adminRegistrationModal";

const AdminRegistration: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const adminRegistrationClick = () => {
    const currentPath = location.pathname;
    const registrationPath = "/admin/registration";

    if (currentPath === registrationPath) {
      handleButtonClick();
    } else {
      navigate(registrationPath);
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
