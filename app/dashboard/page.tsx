import EarningChart from "../ui/EarningChart";
import ErrandTable from "../ui/ErrandTable";
import TotalErrand from "../ui/TotalErrand";
import EarnedToday from "../ui/EarnedToday";
import RecentErrands from "../ui/RecentErrand";
import TotalUsers from "../ui/TotalUsers";
import Welcome from "../ui/welcome";

export default function DashboardPage() {
  return (
    <div className="w-full h-full overflow-y-auto py-10 px-5">
      <Welcome />

      <div className="grid grid-cols-4 gap-3 space-y-35">
        <TotalErrand />
        <RecentErrands />
        <TotalUsers />
        <EarnedToday />
      </div>
      <ErrandTable count={5} />
      <EarningChart />
    </div>
  );
}
