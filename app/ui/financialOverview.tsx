const FinancialOverview: React.FC = () => {
    return (
      <div className="border border-gray-300 rounded-lg flex flex-col justify-between">
        <div className="flex items-center p-2">
          <img
            src="/financialOverview.svg"
            alt="Icon"
            className="w-6 h-6 mr-2"
          />
          <h2 className="font-bold text-[12px] ml-2">Financial Overview</h2>
        </div>
        <div className="">
          <img src="/greenArrow.svg" alt="Icon" className="w-2 h-2 inline-block ml-2" />
          <span className="text-green-500 w-2 h-2 text-sm">10%</span>
          <img
            src="/graph3.svg"
            alt="Icon"
            className="w-16 h-14 inline-block ml-4 mr-2"
          />
          <span className="text-gray-500 w-4 h-4 ml-10 font-bold text-sm">50+</span>
        </div>
      </div>
    );
  };
  
  export default FinancialOverview;