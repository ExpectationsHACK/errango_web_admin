import React from "react";

const TransactionTable = ({ count }: { count: number }) => {
  return (
    <div className="my-5">
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold text-gray-900">Transactions</p>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-white uppercase bg-[#00BF63]">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                USER
              </th>
              <th scope="col" className="px-6 py-3">
                TYPE
              </th>
              <th scope="col" className="px-6 py-3">
                AMOUNT
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3">
                DATE
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: count }).map((_, i) => (
              <tr key={i} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">#290888890</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Faith Chima
                </th>
                <td className="px-6 py-4">Airtime</td>
                <td className="px-6 py-4">N100,000</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-[#27AE60] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                    Successful
                  </span>
                </td>
                <td className="px-6 py-4 flex items-center justify-between mt-2">
                  2nd January 2020
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-sm text-gray-700">
            Showing <span className="font-semibold text-gray-900">1</span> to{" "}
            <span className="font-semibold text-gray-900">10</span> of{" "}
            <span className="font-semibold text-gray-900">100</span> Entries
          </span>
          <div className="flex">
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Previous
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Next
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
