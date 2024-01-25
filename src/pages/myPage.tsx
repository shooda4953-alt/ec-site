import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Header from "../components/templates/header";
import Footer from "../components/templates/footer";
import axios, { AxiosRequestConfig } from "axios";

function MyPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // バックエンドからユーザー情報を取得するAPIエンドポイントのURLを適切に設定
    try {
      const config: AxiosRequestConfig = {
        method: "post",
        url: "http://localhost:8080/api/my/user",
        headers: {
          "Content-Type": "application/json",
        },
      };
    } catch (error) {
      console.error("error:", error);
    }
  });

  return (
    <>
      <Box>
        <Header />

        <div>
          <h2>Welcome to My Page</h2>
          {userData && typeof userData === "object" && "id" in userData && (
            <div>
              <p>User ID: {userData}</p>
              <p>Email: {userData}</p>
              {userData && <p>Name: {userData}</p>}
              {/* 他のユーザー情報も表示する場合はここに追加 */}
            </div>
          )}
        </div>

        <Footer companyName={"EC-SITE"} />
      </Box>
    </>
  );
}

export default MyPage;
