import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import "./sass/style.scss";

function App() {
  const location = useLocation();
  const showHeader = location.pathname !== "/admin";

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
