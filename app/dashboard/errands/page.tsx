import CancelledErrands from "@/app/ui/CancelledErrand";
import CompletedErrands from "@/app/ui/CompletedErrand";
import ErrandTable from "@/app/ui/ErrandTable";
import PendingErrands from "@/app/ui/PendingErrand";
import React from "react";

const Errands = () => {
  return (
    <div className="w-full h-full overflow-y-auto px-5 py-3">
      <div className="flex space-x-3">
        <CompletedErrands />
        <PendingErrands />
        <CancelledErrands />
      </div>

      <ErrandTable count={10} />
    </div>
  );
};

export default Errands;
