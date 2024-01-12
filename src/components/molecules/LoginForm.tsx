import React, { useState } from "react";
import EmailInput from "../atoms/EmailInput";
import PasswordInput from "../atoms/PasswordInput";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleLogin = () => {
    // ログインの処理を実装
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <EmailInput label="Email" value={email} onChange={handleEmailChange} />
      <PasswordInput
        label="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <div
        style={{
          marginTop: "10px",
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
