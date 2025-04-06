"use client";

import React from "react";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm px-4 py-3 sticky top-0 z-50">
      <div className="flex flex-wrap items-center gap-4">
        {/* Left: Logo + Address */}
        <div className="flex items-center gap-3">
          <Image
            src="https://blinkit.com/"
            alt="Logo"
            width={40}
            height={40}
            className="object-cover rounded"
          />
          <div className="leading-tight">
            <h3 className="text-sm font-semibold text-gray-800">
              Delivery in 8 minutes
            </h3>
            <p className="text-xs text-gray-500">Noida Sector 93, Gejha</p>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="w-full order-3 md:order-none md:w-[50%] md:mx-auto">
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-base">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search for fruits, vegetables, groceries..."
              className="w-full py-2 pl-10 pr-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
          </div>
        </div>

        {/* Right: Login */}
        <div className="text-sm font-medium text-gray-700 ml-auto flex items-center gap-1">
          <span className="text-base">👤</span>
          <a
            href="login"
            className="hover:text-green-600 transition whitespace-nowrap"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
