import UserTable from "@/app/ui/UserTable";
import React from "react";

const User = () => {
  return (
    <div className="px-5 w-full">
      <UserTable count={10} />
    </div>
  );
};

export default User;
