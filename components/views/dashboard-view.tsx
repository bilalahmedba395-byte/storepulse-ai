import QuickActions from "@/components/ui/quick-actions";
import RevenueChart from "@/components/ui/revenue-chart";
import RecentOrders from "@/components/ui/recent-orders";
import AITools from "@/components/ui/ai-tools";
import ActivityFeed from "@/components/ui/activity-feed";
import StatCard from "@/components/ui/stat-card";

export default function DashboardView() {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8 mb-10">

        <div>
          <h2 className="text-4xl font-bold tracking-tight">
            Dashboard
          </h2>

          <p className="text-slate-400 mt-2">
            Welcome back, Bilal 👋
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <QuickActions />

          <button className="bg-white text-black px-5 py-3 rounded-2xl font-medium hover:bg-slate-200 transition whitespace-nowrap">
            Generate Report
          </button>
        </div>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Revenue"
          value="$48,240"
          change="+12.5%"
        />

        <StatCard
          title="Orders"
          value="1,429"
          change="+8.2%"
        />

        <StatCard
          title="Customers"
          value="892"
          change="+5.4%"
        />

        <StatCard
          title="Conversion Rate"
          value="3.8%"
          change="-1.1%"
          positive={false}
        />

      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8">

        <div className="xl:col-span-2">
          <RevenueChart />
          <RecentOrders />
        </div>

        <div>
          <AITools />
          <ActivityFeed />
        </div>

      </div>
    </>
  );
}