import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Header from "../components/templates/header";
import Footer from "../components/templates/footer";
import axios from "axios";

function MyPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // バックエンドからユーザー情報を取得するAPIエンドポイントのURLを適切に設定
    const apiUrl = "http://127.0.0.1:3658/m1/440876-0-default/my/user";

    // ユーザー情報を取得するためのAPIリクエスト
    axios
      .get(apiUrl)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch user data:", error);
      });
  }, []);

  return (
    <>
      <Box>
        <Header />

        <div>
          <h2>Welcome to My Page</h2>
          {userData && (
            <div>
              {/* <p>User ID: {userData.id}</p>
              <p>Email: {userData.email}</p>    */}
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
