import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Link,
  Grid,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { AxiosRequestConfig } from "axios"; // 追加
import { useCart } from "./cartContext";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { cartItemCount } = useCart();

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

  const handleSiteTitleClick = () => {
    // サイトタイトルがクリックされた時の処理をここに追加
    navigate("/");
  };

  return (
    <AppBar position="fixed" style={{ width: "100%" }}>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Link
              underline="none"
              color="inherit"
              onClick={handleSiteTitleClick}
              style={{ cursor: "pointer" }}
            >
              <Typography variant="h6">EC-SITE</Typography>
            </Link>
          </Grid>
          <Grid item>
            <IconButton color="inherit" onClick={handleShoppingCartClick}>
              <Badge
                badgeContent={cartItemCount > 0 ? cartItemCount : null}
                color="secondary"
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={handleUserIconClick}>
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
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
