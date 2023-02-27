import React, { useEffect, useState } from "react";
import { userObserver } from "./auth/firebase";
import AuthcontextProvider from "./context/AuthcontextProvider";
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
      <AuthcontextProvider>
        <AppRouter />
      </AuthcontextProvider>
    </>
  );
}

export default App;
