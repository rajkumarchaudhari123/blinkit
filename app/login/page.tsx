"use client";

import React from "react";
import Image from "next/image";
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="https://www.financialexpress.com/wp-content/uploads/2023/02/Blinkit-allows-brands-to-provide-micro-shop-experience.jpg"
            alt="Blinkit Logo"
            className="w-28"
          />
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800 mb-1 text-center">
          Login / Sign Up
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your phone number to continue
        </p>

        {/* Phone Input */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your number"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition"
          >
            Continue
          </button>
        </form>

        {/* Terms Note */}
        <p className="text-xs text-gray-400 text-center mt-6">
          By continuing, you agree to our Terms of Service & Privacy Policy.
        </p>
      </div>
    </div>
  );
}
