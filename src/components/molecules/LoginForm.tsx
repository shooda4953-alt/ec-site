import React, { useEffect, useState } from "react";
import EmailInput from "../atoms/EmailInput";
import PasswordInput from "../atoms/PasswordInput";
import axios, { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // ログイン画面を表示する際にCSRFトークンを取得
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5173/login/csrf/token"
        );
        console.log(response.data);
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error("Failed to fetch CSRF token:", error);
      }
    };

    fetchCsrfToken();
  }, []);

  const handleInputChange = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
    errorSetter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(value);
    errorSetter("");
    setLoginError(""); // 入力が変更されたらエラーメッセージをクリア
  };

  const handleLogin = async () => {
    // 入力の検証
    if (!email) {
      setEmailError("メールアドレスは必須項目です");
      return;
    }

    if (!password) {
      setPasswordError("パスワードは必須項目です");
      return;
    }

    // ログインの処理を実装
    if (email && password) {
      const data = JSON.stringify({
        email: "user@lh.sandbox",
        password: "pass",
      });

      try {
        const config: AxiosRequestConfig = {
          method: "post",
          url: "http://localhost:8080/auth/signin",
          headers: {
            // "User-Agent": "Apidog/1.0.0 (https://apidog.com)",
            // "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
          },
          data: data,
        };

        const response = await axios(config);

        console.log(JSON.stringify(response.data));

        // パスが "/admin/login" の場合は "/admin" に遷移
        const currentPath = window.location.pathname;
        if (currentPath === "/admin/login") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Login error:", error);
        setLoginError("メールアドレスまたはパスワードが誤っています");
      }
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ marginBottom: "20px" }}>
        <EmailInput
          label="Email"
          value={email}
          onChange={(value) =>
            handleInputChange(value, setEmail, setEmailError)
          }
        />
        {emailError && <div style={{ color: "red" }}>{emailError}</div>}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <PasswordInput
          label="Password"
          value={password}
          onChange={(value) =>
            handleInputChange(value, setPassword, setPasswordError)
          }
        />
        {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}
      </div>
      <div
        style={{ marginTop: "20px", textAlign: "center", alignItems: "center" }}
      >
        <button onClick={handleLogin}>Login</button>
        {loginError && <div style={{ color: "red" }}>{loginError}</div>}
      </div>
    </div>
  );
};

export default LoginForm;
