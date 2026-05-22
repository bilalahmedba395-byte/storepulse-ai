import {
  Sparkles,
  FileText,
  Megaphone,
  Search,
} from "lucide-react";

const tools = [
  {
    title: "Generate Product Description",
    description: "Create high-converting product copy instantly.",
    icon: FileText,
  },
  {
    title: "Ad Copy Generator",
    description: "Generate engaging ad campaigns for products.",
    icon: Megaphone,
  },
  {
    title: "SEO Optimizer",
    description: "Improve search visibility with AI suggestions.",
    icon: Search,
  },
];

export default function AITools() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">
      
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="text-violet-400" size={22} />

        <h3 className="text-xl font-semibold">
          AI Tools
        </h3>
      </div>

      <div className="space-y-4">
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <div
              key={tool.title}
              className="p-4 rounded-xl border border-slate-800 hover:bg-slate-800/40 transition cursor-pointer"
            >
              <div className="flex items-start gap-4">
                
                <div className="bg-slate-800 p-3 rounded-lg">
                  <Icon size={18} />
                </div>

                <div>
                  <h4 className="font-medium">
                    {tool.title}
                  </h4>

                  <p className="text-sm text-slate-400 mt-1">
                    {tool.description}
                  </p>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}