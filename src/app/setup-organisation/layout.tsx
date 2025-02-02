"use client";

import useAuth from "@/hooks/useAuth";
import { ReactNode } from "react";
import AuthGuard from "./_components/AuthGuard";
import Loader from "@/components/Loader/Loader";
import EmailVerification from "./_components/EmailVerification";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { user, loading } = useAuth();
  if (loading) return <Loader />;
  if (!user) return <AuthGuard />;
  if (!user.emailVerified) return <EmailVerification />;
  if (user) {
    return children;
  }
  return router.push("/login");
}
