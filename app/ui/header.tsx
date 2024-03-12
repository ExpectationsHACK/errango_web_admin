'use client'

import React, { useState } from "react";
import { FiSearch, FiMessageSquare, FiCheck, FiBell, FiChevronDown } from "react-icons/fi";
import { RiCheckDoubleFill } from "react-icons/ri";
import Link from "next/link";

interface Message {
  content: string;
  dateTime: string;
  sender: string;
}

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <header className="bg-[#000000]">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-5 py-1.5 text-white">
        <div className="flex items-center">
          <div className="mr-20">
            <img src="/logo.svg" alt="Logo" className="w-24 h-16" />
          </div>
          <p className="text-lg font-semibold">Dashboard</p>
        </div>

        <div className="flex justify-end items-center space-x-4 flex-grow">
          <button className="focus:outline-none" onClick={toggleNotification}>
            <FiBell className="w-4 h-4 cursor-pointer" />
          </button>

          {/* Notification Modal */}
          {isNotificationOpen && (
              <div className="absolute top-14 right-[7rem] mt-1 bg-white shadow-lg rounded-md py-1 z-50">
                   <div className="w-96 p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex justify-between space-x-2">
                        <h2 className="text-lg text-black font-semibold">Notification</h2>
                        <div className="bg-green-500 text-white px-1  rounded-lg">3 new</div>
                      </div>
                      <div className="flex justify-between space-x-2">
                        <RiCheckDoubleFill className="w-6 h-6 text-green-500" /> 
                        <span className="text-green-500 font-semibold cursor-pointer">Mark as read</span>
                      </div>  
      
                      
                    </div>
                    <div className="space-y-4">
                  
                      <div className="flex px-2 bg-[#E8E6F9] space-x-12 rounded-lg items-center">
                        <div className="py-2 w-[14rem] space-y-2">
                          <p className="font-semibold text-sm text-black">
                            Emmanuel just made an errand request from Ajah lagos
                          </p>
                        <div className="text-gray-500 text-sm">Dec 12, 2023 at  10:13 AM</div>
                      </div>
                        <div className="bg-[#737587] w-12 h-12 flex items-center justify-center rounded-full text-white font-bold">
                          CO
                        </div>
                    </div>
                      
                      <div className="flex px-2 bg-[#E8E6F9] space-x-12 rounded-lg items-center">
                        <div className="py-2 w-[14rem] space-y-2">
                          <p className="font-semibold text-sm text-black">
                            Roland just made an errand request for a laundry pickup
                          </p>
                          <div className="text-gray-500 text-sm">Dec 11, 2023 at  09:10 AM</div>
                        </div>
                        <div className="bg-green-400 w-12 h-12 flex items-center justify-center rounded-full text-white font-bold">
                          EK
                        </div>
                      </div>

                      <div className="flex px-2 bg-[#E8E6F9] space-x-12 rounded-lg items-center">
                        <div className="py-2 w-[14rem] space-y-2">
                          <p className="font-semibold text-sm text-black">
                            You have a new errand request for pickup
                          </p>
                          <div className="text-gray-500 text-sm">Dec 04, 2023 at  13:38 PM</div>
                        </div>
                        <div className="bg-[#F2C31C] w-12 h-12 flex items-center justify-center rounded-full text-white font-bold">
                          JS
                        </div>
                      </div>

                    </div>
                    <div className="mt-4 text-left">
                      <a href="/dashboard/notifications" className="text-green-500 font-bold">View all notifications</a>
                    </div>
                  </div>
              </div>
            )}

          {/* User Avatar and Dropdown */}
          <div className="relative flex items-center">
            <div className="bg-green-500 rounded-full h-10 w-10 flex items-center justify-center text-sm">
              EK
            </div>
            <div className="ml-4">
              <p className="text-sm font-semibold">Emmanuel Kalu</p>
            </div>
            <button className="focus:outline-none" onClick={toggleDropdown}>
              <FiChevronDown className="w-6 h-6 ml-6 cursor-pointer" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-14 right-0 mt-1 bg-white shadow-lg rounded-md py-1">
                <Link href="#" className="block px-8 py-4 text-gray-800 hover:bg-gray-200">
                  Account Settings
                </Link>
                <hr />
                <Link href="#" className="block px-12 py-4 text-center text-gray-800 hover:bg-red-300 rounded-lg">
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
