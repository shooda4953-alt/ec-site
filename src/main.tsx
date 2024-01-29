import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/topPage.tsx";
import "./index.css";
import CartPage from "./pages/cartPage.tsx";
import DetailPage from "./pages/detailPage.tsx";
import MyPage from "./pages/myPage.tsx";
import Login from "./pages/loginPage.tsx";
import AdminTop from "./admin/pages/adminTopPage.tsx";
import AdminLoginPage from "./admin/pages/adminLoginPage.tsx";
import AdminRegistrationPage from "./admin/pages/adminRegistrationPage.tsx";
import AdminDetailPage from "./admin/pages/adminDetailPage.tsx";
import { CartProvider } from "./components/templates/cartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminTop />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/admin/registration"
            element={<AdminRegistrationPage />}
          />
          <Route path="/admin/detail" element={<AdminDetailPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
