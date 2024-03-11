const TotalUsers: React.FC = () => {
  return (
    <div className="border border-gray-300 rounded-lg flex p-5 space-x-5 items-center">
      <img src="/userManagement.svg" alt="Icon" className="w-10 h-10 mr-2" />
      <div>
        <h2 className="font-bold text-lg">Users</h2>
        <p className="text-gray-500 font-bold">100+</p>
      </div>
    </div>
  );
};

export default TotalUsers;
