// main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // 追加
import App from "./pages/topPage.tsx";
import "./index.css";
import CartPage from "./pages/cartPage.tsx";
import DetailPage from "./pages/detailPage.tsx";
import MyPage from "./pages/myPage.tsx";
import Login from "./pages/loginPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
