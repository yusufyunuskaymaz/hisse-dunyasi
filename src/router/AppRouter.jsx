import React from "react";

import Navbar from "../components/NavbarFooter/Navbar";
import Home from "../components/home/Home";
import Footer from "../components/NavbarFooter/Footer";
import Stock from "../components/stock/Stock";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Gold from "../pages/gold/Gold";
import Currency from "../pages/currency/Currency";
import CurrencyDetail from "../pages/currency/CurrencyDetail";
import GoldDetail from "../pages/gold/GoldDetail";
import Crypto from "../pages/crypto/Crypto";
import CryptoDetail from "../pages/crypto/CryptoDetail";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import StockDetail from "../components/stock/StockDetail";
import HareketliNavbar from "../components/NavbarFooter/HareketliNavbar";
import KapDetail from "../components/stock/Kap/KapDetail";
import SliderNews from "../components/home/SwiperNews/SliderNews";
import AllStocks from "../components/stock/TvWidgets/AllStocks";
import WorldStock from "../components/world-stock/WorldStock";
import WorldStockDetail from "../components/world-stock/WorldStockDetail";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <HareketliNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news-detail" element={<SliderNews />} />
        <Route path="stock" element={<Stock />} />
        <Route path="all-stocks" element={<AllStocks />} />
        <Route path="stock/:item2" element={<StockDetail />} />
        <Route path="stock/newsDetail" element={<KapDetail />} />
        <Route path="world-stock" element={<WorldStock />} />
        <Route path="world-stock/:item" element={<WorldStockDetail />} />
        <Route path="gold" element={<Gold />} />
        <Route path="gold/:item" element={<GoldDetail />} />
        <Route path="currency" element={<Currency />} />
        <Route path="currency/:item" element={<CurrencyDetail />} />
        <Route path="crypto" element={<Crypto />} />
        <Route path="crypto/:item" element={<CryptoDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
