import Box from "@mui/material/Box";
import AdminHeader from "../components/adminHeader";
import { Grid } from "@mui/material";
import RegistrationForm from "../components/registrationForm";
import AdminRegistration from "../components/adminRegistration";
import axios from "axios";
import { useState } from "react";

function AdminRegistrationPage() {
  const username = "AdminUser";
  const isLoggedIn = true;

  const [userToken, setUserToken] = useState<string | null>(null);

  const handleRegistration = async (
    productName: string,
    price: number,
    content: string
  ) => {
    try {
      console.log("User Token:", userToken);
      // 商品情報をAPIに送信する処理
      const response = await axios.post(
        "http://localhost:8080/api/items",
        { name: productName, price, content },
        {
          headers: {
            Authorization: `Bearer ${userToken}`, // トークンをヘッダーに含める
          },
        }
      );

      // 成功したら適切な処理を行う（例: ページのリロード、成功メッセージの表示など）
      console.log("Product registration successful:", response.data);
    } catch (error) {
      // エラーが発生した場合の処理
      console.error("Error registering product:", error);
    }
  };

  return (
    <>
      <Box>
        <AdminHeader
          username={username}
          isLoggedIn={isLoggedIn}
          onLogout={() => {
            // ログアウト処理
          }}
        />
        <Box
          sx={{
            boxShadow: 3,
            width: "90%",
            height: "500px",
            marginTop: "50px",
            marginLeft: "5%",
            paddingTop: "60px",
            justifyContent: "center",
          }}
        >
          <Grid container justifyContent="center">
            <Grid item>
              <RegistrationForm onSubmit={handleRegistration} />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: "90%",
            height: "120px",
            marginTop: "50px",
            marginLeft: "5%",
            paddingTop: "20px",
          }}
        >
          <Grid container justifyContent="end">
            <Grid item>
              <AdminRegistration />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default AdminRegistrationPage;
