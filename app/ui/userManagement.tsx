const UserManagement: React.FC = () => {
    return (
      <div className="border border-gray-300 rounded-lg flex flex-col justify-between">
        <div className="flex items-center p-2">
          <img
            src="/userManagement.svg"
            alt="Icon"
            className="w-6 h-6 mr-2"
          />
          <h2 className="font-bold text-[12px] ml-2">User Management</h2>
        </div>
        <div className="">
          <img src="/redArrow.svg" alt="Icon" className="w-2 h-2 inline-block ml-2" />
          <span className="text-red-500 w-2 h-2 text-sm">5%</span>
          <img
            src="/graph2.svg"
            alt="Icon"
            className="w-16 h-14 inline-block ml-4 mr-2"
          />
          <span className="text-gray-500 w-4 h-4 ml-10 font-bold text-sm">10</span>
        </div>
      </div>
    );
  };
  
  export default UserManagement;