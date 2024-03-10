"use client";

import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Earnings"],
  ["Jan", 1000],
  ["Feb", 1500],
  ["Mar", 1200],
  ["Apr", 1300],
  ["May", 1400],
  ["Jun", 1500],
  ["Jul", 1600],
  ["Aug", 1700],
  ["Sep", 1800],
  ["Oct", 1900],
  ["Nov", 2000],
  ["Dec", 2100],
];

export default function EarningChart() {
  return (
    <div className="p-10 rounded-lg shadow-md">
      <p className="font-medium text-[#000929] text-[18px]">Earning Analysis</p>
      <div className="flex space-x-3 items-center mb-4">
        <p className="font-bold text-[#000929] text-[32px]">₦59,800</p>
        <span className="bg-green-100 text-[#27AE60] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full h-min">
          +10.6%
        </span>
      </div>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={{
          legend: { position: "none" },
          colors: ["#00BF63"],
        }}
      />
    </div>
  );
}
