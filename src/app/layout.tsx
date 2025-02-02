import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/provider/AuthProvider";

export const metadata: Metadata = {
  title: "Beyond Chat",
  description: "AI Chatbot Platform for Businesses",
  icons: {
    icon: "/vercel.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </AuthProvider>
  );
}
