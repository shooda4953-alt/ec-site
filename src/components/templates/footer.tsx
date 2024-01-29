import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";

interface FooterTemplateProps {
  companyName: string;
}

const Footer: React.FC<FooterTemplateProps> = ({ companyName }) => {
  return (
    <AppBar position="fixed" style={{ top: "auto", bottom: 0, width: "100%" }}>
      <Toolbar>
        <Typography variant="body2" style={{ flexGrow: 1 }}>
          &copy; {new Date().getFullYear()} {companyName}
        </Typography>

        <div>
          <Link
            href="https://littleheroes.jp/"
            color="inherit"
            style={{
              marginRight: 16,
              textDecoration: "none",
              fontSize: "small",
            }}
          >
            会社情報
          </Link>
          <Link
            href="https://littleheroes.jp/about"
            color="inherit"
            style={{
              marginRight: 16,
              textDecoration: "none",
              fontSize: "small",
            }}
          >
            LHについて
          </Link>
          <Link
            href="https://littleheroes.jp/terms"
            color="inherit"
            style={{ textDecoration: "none", fontSize: "small" }}
          >
            利用規約
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
