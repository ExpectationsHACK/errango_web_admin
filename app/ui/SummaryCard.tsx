interface SummaryCardProps {
  title: string;
  imagePath: string;
  count: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  imagePath,
  count,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg flex p-5 space-x-5 items-center">
      <img src={imagePath} alt="Icon" className="w-10 h-10 mr-2" />
      <div>
        <h2 className="font-bold text-md">{title}</h2>
        <p className="text-gray-500 font-bold">{count}+</p>
      </div>
    </div>
  );
};

export default SummaryCard;
