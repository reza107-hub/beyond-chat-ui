import { TAuthContext } from "@/utils/Type";
import { createContext } from "react";

const AuthContext = createContext<TAuthContext | null>(null);

export default AuthContext;
