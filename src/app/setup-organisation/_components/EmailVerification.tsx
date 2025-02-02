'use client'

import Link from "next/link";
import { Mail } from "lucide-react";
import useAuth from "@/hooks/useAuth";

export default function EmailVerification() {
    const {verifyEmail} = useAuth()
    const sendEmail = async () => {
await verifyEmail()
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full">
            <Mail className="text-blue-500 w-12 h-12" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Check Your Email
        </h2>
        <p className="text-gray-600 mb-6">
          We&apos;ve sent a verification link to your email address. Please
          check your inbox and click the link to verify your account.
        </p>
        <div className="mb-6">
          <Link
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
          >
            Return to Home
          </Link>
        </div>
        <p className="text-sm text-gray-500">
          Didn&apos;t receive the email? Check your spam folder or{" "}
          <button onClick={sendEmail} className="text-blue-500 hover:underline">
            resend verification email
          </button>
          .
        </p>
      </div>
    </div>
  );
}
