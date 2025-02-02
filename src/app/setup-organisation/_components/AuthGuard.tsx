import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function AuthGuard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <AlertCircle className="text-yellow-500 w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Authentication Required
        </h2>
        <p className="text-center text-gray-600 mb-6">
          You need to be logged in to access this page.
        </p>
        <div className="text-center">
          <Link
            href="/login"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
          >
            Log In to Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
