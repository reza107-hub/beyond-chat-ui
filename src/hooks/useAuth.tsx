"use client";
import AuthContext from "@/context/AuthContext/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
