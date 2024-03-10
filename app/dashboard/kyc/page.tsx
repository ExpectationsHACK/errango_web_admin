import KYCTable from "@/app/ui/KYCTable";
import React from "react";

const KYC = () => {
  return (
    <div className="px-10 w-full">
      <KYCTable count={10} />
    </div>
  );
};

export default KYC;
