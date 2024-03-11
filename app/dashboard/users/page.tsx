import SummaryCard from "@/app/ui/SummaryCard";
import UserTable from "@/app/ui/UserTable";
import React from "react";

const User = () => {
  return (
    <div className="px-5 w-full py-5">
      <div className="flex space-x-3">
        <SummaryCard
          title="Total Users"
          imagePath="/productRequestsIcon.svg"
          count={100}
        />
        <SummaryCard
          title="Active Users"
          imagePath="/productRequestsIcon.svg"
          count={80}
        />
        <SummaryCard
          title="Inactive Users"
          imagePath="/productRequestsIcon.svg"
          count={20}
        />
      </div>
      <UserTable count={10} />
    </div>
  );
};

export default User;
