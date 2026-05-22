"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4780 },
  { month: "May", revenue: 5890 },
  { month: "Jun", revenue: 6390 },
  { month: "Jul", revenue: 7490 },
];

export default function RevenueChart() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">
      <div className="mb-6">
        <h3 className="text-xl font-semibold">
          Revenue Overview
        </h3>

        <p className="text-slate-400 text-sm mt-1">
          Monthly revenue performance
        </p>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#ffffff"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}