import React, { useEffect, useState } from "react";
import { userObserver } from "./auth/firebase";
import AppRouter from "./router/AppRouter";
import "./style.css";

// Import Swiper styles

// import required modules

function App() {
  useEffect(() => {
    userObserver();
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
