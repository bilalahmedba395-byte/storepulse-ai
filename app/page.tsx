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
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <p className="text-slate-400 text-sm">
                Revenue
              </p>

              <h3 className="text-3xl font-bold mt-2">
                $48,240
              </h3>

              <p className="text-green-400 text-sm mt-2">
                +12.5%
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <p className="text-slate-400 text-sm">
                Orders
              </p>

              <h3 className="text-3xl font-bold mt-2">
                1,429
              </h3>

              <p className="text-green-400 text-sm mt-2">
                +8.2%
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <p className="text-slate-400 text-sm">
                Customers
              </p>

              <h3 className="text-3xl font-bold mt-2">
                892
              </h3>

              <p className="text-green-400 text-sm mt-2">
                +5.4%
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <p className="text-slate-400 text-sm">
                Conversion Rate
              </p>

              <h3 className="text-3xl font-bold mt-2">
                3.8%
              </h3>

              <p className="text-red-400 text-sm mt-2">
                -1.1%
              </p>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}