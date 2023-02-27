import React from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthcontextProvider = ({ children }) => {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

export default AuthcontextProvider;
