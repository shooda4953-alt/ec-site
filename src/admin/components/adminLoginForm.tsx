import React, { useEffect, useState } from "react";
import EmailInput from "../../components/atoms/EmailInput";
import PasswordInput from "../../components/atoms/PasswordInput";
import axios, { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";

const AdminLoginForm: React.FC = () => {
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
          "http://localhost:5173/admin/login/csrf/token"
        );
        // console.log(response.data);
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error("Failed to fetch CSRF token:", error);
      }
    };

    fetchCsrfToken();
  }, []);

  const [userToken, setUserToken] = useState<string | null>(null);

  const handleInputChange = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
    errorSetter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(value);
    errorSetter("");
    setLoginError("");
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
        email: email,
        password: password,
      });

      try {
        const config: AxiosRequestConfig = {
          method: "post",
          url: "http://localhost:8080/api/auth/admin/signin",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
          },
          data: data,
        };
        console.log(config);

        const response = await axios(config);
        const token = response.data.token;

        // トークンをローカルストレージに保存
        localStorage.setItem("adminToken", token);

        // ログイン成功時にトークンを取得し、stateに保存
        setUserToken(response.data.token);

        console.log(JSON.stringify(response.data.token));

        navigate("/admin", { state: { token: response.data.token } });
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

export default AdminLoginForm;
