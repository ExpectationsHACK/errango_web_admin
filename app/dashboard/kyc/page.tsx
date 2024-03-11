import KYCTable from "@/app/ui/KYCTable";
import SummaryCard from "@/app/ui/SummaryCard";
import React from "react";

const KYC = () => {
  return (
    <div className="px-10 w-full py-5">
      <div className="flex space-x-3">
        <SummaryCard
          title="Total KYC"
          imagePath="/productRequestsIcon.svg"
          count={100}
        />
        <SummaryCard
          title="Verified KYC"
          imagePath="/productRequestsIcon.svg"
          count={80}
        />
        <SummaryCard
          title="Pending KYC"
          imagePath="/productRequestsIcon.svg"
          count={20}
        />
      </div>
      <KYCTable count={10} />
    </div>
  );
};

export default KYC;
