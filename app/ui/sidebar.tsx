"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [showErrandsDropdown, setShowErrandsDropdown] = useState(false);

  const handleErrandsClick = () => {
    setShowErrandsDropdown(!showErrandsDropdown);
  };

  return (
    <div className="w-1/5 h-full flex flex-col justify-between text-black text-[14px] overflow-y-auto shadow-lg">
      <div className="">
        {/* Dashboard */}
        <Link href="/dashboard">
          <div className="flex items-center px-4 py-4">
            <Image
              className="mr-8"
              src="/dashboard.svg"
              alt="Dashboard"
              width={16}
              height={16}
            />
            Dashboard
          </div>
        </Link>
        {/* Errands */}
        <Link href="/dashboard/errands">
          <div className="flex items-center px-4 py-4">
            <Image
              className="mr-8"
              src="/errands.svg"
              alt="errands"
              width={16}
              height={16}
            />
            Errands
          </div>
          {/* {showErrandsDropdown ? (
            <FaChevronDown className="h-4 w-4" />
          ) : (
            <FaChevronRight className="h-4 w-4" />
          )} */}
        </Link>
        {/* Errands Dropdown */}
        {/* {showErrandsDropdown && (
          <div className="pl-8">
            <Link href="/pick-up">
              <div className="px-4 py-2">Pick Up</div>
            </Link>
            <Link href="/delivery">
              <div className="px-4 py-2">Delivery</div>
            </Link>
          </div>
        )} */}
        {/* Message */}
        <Link href="/dashboard/message">
          <div className="flex items-center px-4 py-4">
            <Image
              className="mr-8"
              src="/message.svg"
              alt="message"
              width={16}
              height={16}
            />
            Message
          </div>
        </Link>
        {/* User */}
        <Link href="/user">
          <div className="flex items-center px-4 py-4">
            <Image
              className="mr-8"
              src="/users.svg"
              alt="user"
              width={16}
              height={16}
            />
            User
          </div>
        </Link>
        {/* Staff */}
        <Link href="/staff">
          <div className="flex items-center px-4 py-4">
            <Image
              className="mr-8"
              src="/staff.svg"
              alt="staff"
              width={16}
              height={16}
            />
            Staff
          </div>
        </Link>
        {/* Payment History */}
        <Link href="/payment-history">
          <div className="flex items-center px-4 py-4">
            <Image
              className="mr-8"
              src="/paymentHistory.svg"
              alt="payment"
              width={16}
              height={16}
            />
            Payment History
          </div>
        </Link>
        {/* Analytics */}
        <Link href="/dashboard/analytics">
          <div className="flex items-center px-4 py-4">
            <Image
              className="mr-8"
              src="/analytics.svg"
              alt="analytics"
              width={16}
              height={16}
            />
            Analytics
          </div>
        </Link>
      </div>

      {/* Downward Part */}
      <div className="border-t border-gray-700">
        {/* Settings */}
        <Link href="/settings">
          <div className="flex items-center px-4 py-4">
            <Image
              className="mr-8"
              src="/settings.svg"
              alt="settings"
              width={16}
              height={16}
            />
            Settings
          </div>
        </Link>
        {/* Logout */}
        <Link href="/">
          <div className="flex items-center px-4 py-4">
            <Image
              className="mr-8"
              src="/logout.svg"
              alt="logout"
              width={16}
              height={16}
            />
            Logout
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
