"use client";

import { TAuthContext } from "@/utils/Type";
import { createContext } from "react";

const defaultValue: TAuthContext = {
  user: null,
  loading: false,
  createUser: async () => {
    throw new Error("Not implemented");
  },
  signIn: async () => {
    throw new Error("Not implemented");
  },
  googleSignIn: async () => {
    throw new Error("Not implemented");
  },
  logOut: async () => {
    throw new Error("Not implemented");
  },
  updateUserProfile: async () => {
    throw new Error("Not implemented");
  },
  verifyEmail: async () => {
    throw new Error("Not implemented");
  },
};

const AuthContext = createContext<TAuthContext>(defaultValue);

export default AuthContext;
