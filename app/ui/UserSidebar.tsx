"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slideRightVariants = {
  hide: {
    opacity: 0.5,
    x: +100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const UserSidebar = ({ onClose }: { onClose: any }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 overflow-y-auto h-full w-full flex justify-center">
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={slideRightVariants}
        className="w-full h-full flex justify-end"
      >
        <div className="flex flex-col bg-white h-full w-min p-5">
          <div className="flex justify-end">
            <div
              className="rounded border p-2 shadow-sm"
              onClick={() => onClose()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div className="w-96 flex flex-col space-y-3">
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/id/1/200/300"
                alt="user"
                width={0}
                height={0}
                className="rounded-full w-32 h-32"
              />
            </div>
            <p className="text-lg font-bold text-[#3F4951] mt-2">
              User Information
            </p>
            <div className="flex justify-between">
              <p className="font-bold text-[#3F4951]">User</p>
              <p className="text-[#3F4951]">Faith Chima</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-[#3F4951]">Email</p>
              <p className="text-[#3F4951]">johndoe@gmail.com</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-[#3F4951]">NIN</p>
              <p className="text-[#3F4951]">1234567890</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-[#3F4951]">BVN</p>
              <p className="text-[#3F4951]">1234567890</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-[#3F4951]">Address</p>
              <p className="text-[#3F4951]">Umuahia, Abia State</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-[#3F4951]">Time</p>
              <p className="text-[#3F4951]">2 hours ago</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserSidebar;
