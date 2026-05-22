import {
  ShoppingBag,
  AlertTriangle,
  UserPlus,
  PackageCheck,
} from "lucide-react";

const activities = [
  {
    title: "New order received",
    description: "Order #2048 from Sarah Johnson",
    time: "2 min ago",
    icon: ShoppingBag,
  },
  {
    title: "Inventory running low",
    description: "Wireless Mouse stock below 10 units",
    time: "12 min ago",
    icon: AlertTriangle,
  },
  {
    title: "New customer registered",
    description: "Michael Chen joined the platform",
    time: "25 min ago",
    icon: UserPlus,
  },
  {
    title: "Shipment delivered",
    description: "Order #2031 delivered successfully",
    time: "1 hour ago",
    icon: PackageCheck,
  },
];

export default function ActivityFeed() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold">
            Live Activity
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            Real-time platform updates
          </p>
        </div>

        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
      </div>

      <div className="space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex gap-4"
            >
              
              <div className="bg-slate-800 p-3 rounded-xl h-fit">
                <Icon size={18} />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-4">
                  
                  <h4 className="font-medium text-sm">
                    {activity.title}
                  </h4>

                  <span className="text-xs text-slate-500 whitespace-nowrap">
                    {activity.time}
                  </span>

                </div>

                <p className="text-sm text-slate-400 mt-1">
                  {activity.description}
                </p>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}