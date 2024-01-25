import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import axios, { AxiosRequestConfig } from "axios"; // 追加

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // ログイン状態を示すフラグ (仮のもので、実際のログイン状態に応じて設定してください)
  const isLoggedIn = true;

  const handleShoppingCartClick = () => {
    navigate("/cart");
  };

  const handleMyPageClick = () => {
    navigate("/mypage");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = async () => {
    try {
      const config: AxiosRequestConfig = {
        method: "post",
        url: "http://localhost:8080/api/auth/signout",
        headers: {
          "Content-Type": "application/json",
        },
      };

      console.log("Logout successful");

      // ログアウト後の遷移先を指定
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleUserIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
        <IconButton edge="end" color="inherit" onClick={handleUserIconClick}>
          <AccountCircleIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          style={{ fontSize: "small" }}
        >
          <MenuItem onClick={handleMyPageClick}>マイページ</MenuItem>
          {isLoggedIn ? (
            <MenuItem onClick={handleLogoutClick}>ログアウト</MenuItem>
          ) : (
            <MenuItem onClick={handleLoginClick}>ログイン</MenuItem>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
