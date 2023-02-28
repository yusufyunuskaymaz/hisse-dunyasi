import React from "react";

import Navbar from "../components/router/Navbar";
import BottomNavbar from "../components/router/BottomNavbar";
import Home from "../components/home/Home";
import Footer from "../components/router/Footer";
import Stock from "../components/stock/Stock";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Gold from "../pages/gold/Gold"
import Currency from "../pages/currency/Currency";
import CurrencyDetail from "../pages/currency/CurrencyDetail";
import GoldDetail from "../pages/gold/GoldDetail";
import Crypto from "../pages/crypto/Crypto";
import CryptoDetail from "../pages/crypto/CryptoDetail";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import StockDetail from "../components/stock/StockDetail";
import HareketliNavbar from "../components/router/HareketliNavbar";
import KapDetail from "../components/stock/Kap/KapDetail";
import SliderNews from "../components/home/SwiperNews/SliderNews";
import AllStocks from "../components/stock/TvWidgets/AllStocks";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <HareketliNavbar />
      {/* <BottomNavbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news-detail" element={<SliderNews />} />
        <Route path="stock" element={<Stock />} />
        <Route path="all-stocks" element={<AllStocks />} />
        <Route path="stock/:item" element={<StockDetail />} />
        <Route path="stock/newsDetail" element={<KapDetail />} />
        <Route path="gold" element={<Gold />} />
        <Route path="gold/:item" element={<GoldDetail />} />
        <Route path="currency" element={<Currency />} />
        <Route path="currency/:item" element={<CurrencyDetail />} />
        <Route path="crypto" element={<Crypto />} />
        <Route path="crypto/:item" element={<CryptoDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Navigate to="" />} />

        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
