import React from "react";

import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Stock from "../components/Stock";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gold from "../components/Gold";
import Currency from "../components/Currency";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <BottomNavbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="stock" element={<Stock />} />
        <Route path="gold" element={<Gold />} />
        <Route path="currency" element={<Currency />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
