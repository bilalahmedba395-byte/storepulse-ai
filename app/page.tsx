import StatCard from "@/components/ui/stat-card";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        
        {/* Sidebar */}
        <aside className="w-64 min-h-screen border-r border-slate-800 p-6">
          <h1 className="text-2xl font-bold mb-10">
            StorePulse AI
          </h1>

          <nav className="space-y-4">
            <div className="text-slate-300 hover:text-white cursor-pointer">
              Dashboard
            </div>

            <div className="text-slate-300 hover:text-white cursor-pointer">
              Analytics
            </div>

            <div className="text-slate-300 hover:text-white cursor-pointer">
              Orders
            </div>

            <div className="text-slate-300 hover:text-white cursor-pointer">
              Customers
            </div>

            <div className="text-slate-300 hover:text-white cursor-pointer">
              Products
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-8">
          
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold">
                Dashboard
              </h2>

              <p className="text-slate-400 mt-1">
                Welcome back, Bilal 👋
              </p>
            </div>

            <button className="bg-white text-black px-4 py-2 rounded-xl font-medium hover:bg-slate-200 transition">
              Generate Report
            </button>
          </div>

          {/* Analytics Cards */}
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
        </section>
      </div>
    </main>
  );
}