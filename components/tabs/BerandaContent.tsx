import { Layers, DollarSign, Grid, HelpCircle, FileText } from "lucide-react";
import Smile from "../../imports/Smile-2025-401";

interface BerandaContentProps {
  onOpenTab: (title: string, tabType?: string) => void;
}

export function BerandaContent({ onOpenTab }: BerandaContentProps) {
  const quickActions = [
    { title: "Components", description: "Browse UI components", icon: Layers, action: () => onOpenTab('Components') },
    { title: "Memo Pencairan", description: "Financial memos", icon: DollarSign, action: () => onOpenTab('Memo Pencairan Anggaran') },
    { title: "Design System", description: "Design guidelines", icon: Grid, action: () => onOpenTab('Design System') },
    { title: "Documentation", description: "User guides & help", icon: HelpCircle, action: () => onOpenTab('Documentation') }
  ];

  return (
    <div className="h-full overflow-auto bg-gradient-to-br from-blue-50 to-neutral-50">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 relative">
              <Smile />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-neutral-800 mb-4">
            Design System Hub
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Welcome to your comprehensive design system and component library. 
            Explore components, documentation, and tools to build amazing interfaces.
          </p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 border border-neutral-100 text-left"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <action.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-neutral-800 mb-2">{action.title}</h3>
              <p className="text-sm text-neutral-600">{action.description}</p>
            </button>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
          <h2 className="text-xl font-semibold text-neutral-800 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: "Component Library Updated", time: "2 minutes ago", icon: Layers },
              { action: "New Financial Memo Created", time: "1 hour ago", icon: DollarSign },
              { action: "Design System Documentation", time: "3 hours ago", icon: FileText },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-neutral-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-neutral-800">{item.action}</p>
                  <p className="text-sm text-neutral-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}