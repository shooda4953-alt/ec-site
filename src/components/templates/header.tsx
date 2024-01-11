// Header.tsx

import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom"; // 追加

const Header: React.FC = () => {
  const navigate = useNavigate(); // 追加

  const handleShoppingCartClick = () => {
    // ショッピングカートアイコンがクリックされたときの処理
    // 例えば、詳細ページに遷移するなど
    navigate("/cart"); // パスは適切なものに変更
  };

  return (
    <AppBar position="fixed" style={{ width: "100%" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          EC-SITE
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleShoppingCartClick}
        >
          <ShoppingCartIcon />
        </IconButton>
        <div style={{ marginRight: 20 }}></div>
        <IconButton edge="end" color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
