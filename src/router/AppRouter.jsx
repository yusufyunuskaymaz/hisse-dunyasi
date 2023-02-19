import React from "react";

import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Stock from "../components/Stock";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <BottomNavbar />
      <Routes>
      <Route path="" element={<Home />} />
      <Route path="stock" element={<Stock />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
