// Header.tsx

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

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleShoppingCartClick = () => {
    navigate("/cart");
  };

  const handleMyPageClick = () => {
    navigate("/mypage");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = () => {
    navigate("/login");
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
          <MenuItem onClick={handleLoginClick}>ログイン</MenuItem>
          <MenuItem onClick={handleLogoutClick}>ログアウト</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
