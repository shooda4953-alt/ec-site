import React, { useEffect, useState } from "react";
import EmailInput from "../atoms/EmailInput";
import PasswordInput from "../atoms/PasswordInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // ログイン画面を表示する際にCSRFトークンを取得
    async function fetchCsrfToken() {
      try {
        const response = await axios.get(
          "http://localhost:5182/login/csrf/token"
        );
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error("Failed to fetch CSRF token:", error);
      }
    }

    fetchCsrfToken();
  }, []);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailError("");
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordError("");
  };

  // APIのベースURL
  const baseURL = "http://127.0.0.1:3658/m1/440876-0-default";

  // エンドポイントのパス
  const endpointPath = "/auth/signin";

  // リクエストデータ
  const requestData = {
    email: email,
    password: password,
  };

  const handleLogin = async () => {
    // 入力の検証
    if (!email) {
      setEmailError("メールアドレスは必須項目です");
    }

    if (!password) {
      setPasswordError("パスワードは必須項目です");
    }

    console.log("clickButton");

    // ログインの処理を実装
    if (email && password) {
      // ログインリクエストの送信
      try {
        await axios.post(`${baseURL}${endpointPath}`, requestData, {
          headers: {
            "X-CSRF-Token": csrfToken,
          },
        });

        // パスが "/admin/login" の場合は "/admin" に遷移
        const currentPath = window.location.pathname;
        if (currentPath === "/admin/login") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Login failed:", error);
        // エラー処理をここに追加
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <EmailInput label="Email" value={email} onChange={handleEmailChange} />
        {emailError && <div style={{ color: "red" }}>{emailError}</div>}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <PasswordInput
          label="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}
      </div>
      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginForm;
