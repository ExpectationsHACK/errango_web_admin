import EarningChart from "../ui/EarningChart";
import ErrandTable from "../ui/ErrandTable";
import ErrandSummary from "../ui/errandSummary";
import FinancialOverview from "../ui/financialOverview";
import RecentErrands from "../ui/recentErrands";
import UserManagement from "../ui/userManagement";
import Welcome from "../ui/welcome";

export default function DashboardPage() {
  return (
    <div className="w-full h-full overflow-y-auto py-10 px-5">
      <Welcome />

      <div className="grid grid-cols-4 gap-3 space-y-35">
        <ErrandSummary />
        <RecentErrands />
        <UserManagement />
        <FinancialOverview />
      </div>
      <ErrandTable count={5} />
      <EarningChart />
    </div>
  );
}
