"use client";
import { useState } from "react";
import {
  LayoutDashboard,
  BarChart3,
  ShoppingCart,
  Users,
  Package,
  Menu,
  X,
} from "lucide-react";
import StatCard from "@/components/ui/stat-card";
import RevenueChart from "@/components/ui/revenue-chart";
import RecentOrders from "@/components/ui/recent-orders";
import AITools from "@/components/ui/ai-tools";
import QuickActions from "@/components/ui/quick-actions";
export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex">

        {/* Sidebar */}
        <>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed top-6 left-6 z-50 lg:hidden bg-slate-900 border border-slate-800 p-3 rounded-xl"
          >
            <Menu size={20} />
          </button>

          {/* Sidebar */}
          <aside
            className={`fixed lg:static top-0 left-0 z-50 h-screen w-64 bg-slate-950 border-r border-slate-800 p-6 transform transition-transform duration-300 ${sidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
              }`}
          >

            <div className="flex items-center justify-between mb-10">
              <h1 className="text-3xl font-bold tracking-tight">
                StorePulse AI
              </h1>

              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-3">

              <div className="flex items-center gap-3 text-white bg-slate-800 px-4 py-3 rounded-xl cursor-pointer">
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-xl cursor-pointer transition">
                <BarChart3 size={18} />
                <span>Analytics</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-xl cursor-pointer transition">
                <ShoppingCart size={18} />
                <span>Orders</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-xl cursor-pointer transition">
                <Users size={18} />
                <span>Customers</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-xl cursor-pointer transition">
                <Package size={18} />
                <span>Products</span>
              </div>

            </nav>
          </aside>
        </>

        {/* Main Content */}
        <section className="flex-1 p-10 bg-gradient-to-b from-slate-950 to-slate-900">

          {/* Top Bar */}
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
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8">

            <div className="xl:col-span-2">
              <RevenueChart />
              <RecentOrders />
            </div>

            <div>
              <AITools />
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}