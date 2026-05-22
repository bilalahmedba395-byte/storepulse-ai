interface StatCardProps {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
}

export default function StatCard({
  title,
  value,
  change,
  positive = true,
}: StatCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-2">
        {value}
      </h3>

      <p
        className={`text-sm mt-2 ${
          positive ? "text-green-400" : "text-red-400"
        }`}
      >
        {change}
      </p>
    </div>
  );
}