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
import ActivityFeed from "@/components/ui/activity-feed";
import DashboardView from "@/components/views/dashboard-view";
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
  <DashboardView />
</section>
      </div>
    </main>
  );
}