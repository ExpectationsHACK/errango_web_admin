import ErrandSummary from "../ui/errandSummary";
import FinancialOverview from "../ui/financialOverview";
import RecentErrands from "../ui/recentErrands";
import UserManagement from "../ui/userManagement";
import Welcome from "../ui/welcome";

export default function DashboardPage() {
  return (
    <div className="w-full py-10 px-3">
      <div>
        <Welcome />
      </div>
      <div className="grid grid-cols-4 gap-3 space-y-35">
        <ErrandSummary />
        <RecentErrands />
        <UserManagement />
        <FinancialOverview />
      </div>
    </div>
  );
}
