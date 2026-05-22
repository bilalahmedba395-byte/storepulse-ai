import {
  Plus,
  Download,
  Upload,
  RefreshCcw,
} from "lucide-react";
import { toast } from "sonner";

const actions = [
  {
    title: "Add Product",
    icon: Plus,
  },
  {
    title: "Export Data",
    icon: Download,
  },
  {
    title: "Import CSV",
    icon: Upload,
  },
  {
    title: "Refresh",
    icon: RefreshCcw,
  },
];

export default function QuickActions() {
  return (
    <div className="flex flex-wrap gap-4">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <button onClick={() =>
  toast.success(`${action.title} triggered`)
}
            key={action.title}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:bg-slate-800/40 transition text-left"
          >
            <div className="bg-slate-800 w-fit p-3 rounded-xl mb-4">
              <Icon size={18} />
            </div>

            <p className="font-medium">
              {action.title}
            </p>
          </button>
        );
      })}
    </div>
  );
}