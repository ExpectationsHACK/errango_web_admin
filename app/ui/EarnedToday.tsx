const EarnedToday: React.FC = () => {
  return (
    <div className="border border-gray-300 rounded-lg flex p-5 space-x-5 items-center">
      <img src="/financialOverview.svg" alt="Icon" className="w-10 h-10 mr-2" />
      <div>
        <h2 className="font-bold text-lg">Earned Today</h2>
        <p className="text-gray-500 font-bold">N100,000+</p>
      </div>
    </div>
  );
};

export default EarnedToday;
