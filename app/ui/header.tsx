"use client";

import React, { useState } from "react";
import {
  FiSearch,
  FiMessageSquare,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import Link from "next/link";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-[#000000]">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-1.5 text-white">
        <div className="flex items-center">
          <div className="mr-20">
            <img src="/logo.svg" alt="Logo" className="w-24 h-16" />
          </div>
          <p className="text-lg font-semibold">Dashboard</p>
        </div>

        <div className="flex justify-end items-center space-x-4 flex-grow">
          {/* <FiSearch className="w-4 h-4 cursor-pointer" />

          <FiMessageSquare className="w-4 h-4 cursor-pointer" /> */}

          <FiBell className="w-4 h-4 cursor-pointer" />

          <div className="h-10 w-[2px] bg-[#ffffff] mx-4"></div>

          {/* User Avatar and Dropdown */}
          <div className="relative flex items-center">
            {/* Avatar with first letter of user's name */}
            <div className="bg-green-500 rounded-full h-10 w-10 flex items-center justify-center text-sm">
              EK
            </div>

            {/* Full Name */}
            <div className="ml-4">
              <p className="text-sm font-semibold">Emmanuel Kalu</p>
            </div>

            {/* Dropdown Arrow */}
            <button className="focus:outline-none" onClick={toggleDropdown}>
              <FiChevronDown className="w-6 h-6 ml-6 cursor-pointer" />
            </button>

            {/* Dropdown Content */}
            {isDropdownOpen && (
              <div className="absolute top-14 right-0 mt-1 bg-white shadow-lg rounded-md py-1">
                <Link
                  href="#"
                  className="block px-8 py-4 text-gray-800 hover:bg-gray-200"
                >
                  Account Settings
                </Link>
                <Link
                  href="#"
                  className="block px-12 py-4 text-center text-gray-800 hover:bg-red-300 rounded-lg"
                >
                  SignOut
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
