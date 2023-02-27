import React from "react";
import AuthcontextProvider from "./context/AuthContextProvider";
import AppRouter from "./router/AppRouter";
import "./style.css";

// Import Swiper styles

// import required modules

function App() {
  return (
    <>
      <AuthcontextProvider>
        <AppRouter />
      </AuthcontextProvider>
    </>
  );
}

export default App;
