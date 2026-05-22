const orders = [
  {
    id: "#1024",
    customer: "Sarah Johnson",
    product: "Wireless Headphones",
    amount: "$129",
    status: "Completed",
  },
  {
    id: "#1025",
    customer: "Michael Chen",
    product: "Gaming Mouse",
    amount: "$89",
    status: "Pending",
  },
  {
    id: "#1026",
    customer: "Emma Wilson",
    product: "Smart Watch",
    amount: "$249",
    status: "Completed",
  },
  {
    id: "#1027",
    customer: "David Miller",
    product: "Mechanical Keyboard",
    amount: "$159",
    status: "Refunded",
  },
];

export default function RecentOrders() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold">
            Recent Orders
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            Latest customer purchases
          </p>
        </div>

        <button className="text-sm text-slate-300 hover:text-white">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          
          <thead>
            <tr className="text-left text-slate-400 border-b border-slate-800">
              <th className="pb-4 font-medium">Order ID</th>
              <th className="pb-4 font-medium">Customer</th>
              <th className="pb-4 font-medium">Product</th>
              <th className="pb-4 font-medium">Amount</th>
              <th className="pb-4 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-slate-800 hover:bg-slate-800/40 transition"
              >
                <td className="py-4">{order.id}</td>

                <td className="py-4 text-slate-300">
                  {order.customer}
                </td>

                <td className="py-4 text-slate-300">
                  {order.product}
                </td>

                <td className="py-4 font-medium">
                  {order.amount}
                </td>

                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : order.status === "Pending"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}