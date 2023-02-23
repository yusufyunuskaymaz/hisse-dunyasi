import React from "react";

import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Stock from "../components/stock/Stock";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gold from "../components/Gold";
import Currency from "../components/Currency";
import CurrencyDetail from "../components/CurrencyDetail";
import GoldDetail from "../components/GoldDetail";
import Crypto from "../components/Crypto";
import CryptoDetail from "../components/CryptoDetail";
import Login from "../components/Login";
import Register from "../components/Register";
import StockDetail from "../components/stock/StockDetail";
import HareketliNavbar from "../components/HareketliNavbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <HareketliNavbar />
      <BottomNavbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="stock" element={<Stock />} />
        <Route path="stock/:item" element={<StockDetail />} />
        <Route path="gold" element={<Gold />} />
        <Route path="gold/:item" element={<GoldDetail />} />
        <Route path="currency" element={<Currency />} />
        <Route path="currency/:item" element={<CurrencyDetail />} />
        <Route path="crypto" element={<Crypto />} />
        <Route path="crypto/:item" element={<CryptoDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
