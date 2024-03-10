import ErrandTable from "@/app/ui/ErrandTable";
import React from "react";

const Errands = () => {
  return (
    <div className="w-full h-full overflow-y-auto px-5">
      <ErrandTable count={10} />
    </div>
  );
};

export default Errands;
