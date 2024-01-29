import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";

interface AdminHeaderProps {
  username: string;
  isLoggedIn: boolean;
  onLogout: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ username, isLoggedIn }) => {
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/admin/login");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          管理画面
        </Typography>
        <div style={{ textAlign: "right" }}>
          {isLoggedIn ? (
            <>
              <Typography variant="body1" sx={{ marginRight: 2 }}>
                Welcome, {username}!
              </Typography>
              <IconButton color="inherit" onClick={onLogout}>
                <ExitToAppIcon />
              </IconButton>
            </>
          ) : (
            <Typography variant="body2" color="textSecondary">
              Not logged in
            </Typography>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
