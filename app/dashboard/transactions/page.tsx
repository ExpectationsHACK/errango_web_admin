import TransactionTable from "@/app/ui/TransactionTable";
import React from "react";

const Transactions = () => {
  return (
    <div className="w-full px-5">
      <TransactionTable count={10} />
    </div>
  );
};

export default Transactions;
