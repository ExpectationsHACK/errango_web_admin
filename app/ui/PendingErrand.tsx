const PendingErrands: React.FC = () => {
  return (
    <div className="border border-gray-300 rounded-lg flex p-5 space-x-5 items-center">
      <img src="/recentErrands.svg" alt="Icon" className="w-10 h-10 mr-2" />
      <div>
        <h2 className="font-bold text-lg">Pending Errands</h2>
        <p className="text-gray-500 font-bold">10+</p>
      </div>
    </div>
  );
};

export default PendingErrands;
