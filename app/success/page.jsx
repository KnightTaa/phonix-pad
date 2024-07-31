import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 border rounded-lg bg-white shadow-lg animate-fadeIn">
        <div className="text-5xl text-green-500 animate-bounce">✔️</div>
        <h1 className="text-2xl font-bold mt-4">Submission Successful</h1>
        <p className="mt-2">Thank you for your submission to the Creative Awards. We have received your work.</p>
        <Link href="/" className="block mt-4 text-blue-500 font-semibold hover:underline">
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default Success;
