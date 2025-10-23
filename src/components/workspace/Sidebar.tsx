import { Home, BookOpen, Heart, Users, BarChart3, Settings } from "lucide-react";
import { WorkspaceView } from "@/pages/Index";
import { cn } from "@/lib/utils";

interface SidebarProps {
  currentView: WorkspaceView;
  onViewChange: (view: WorkspaceView) => void;
}

const navigationItems = [
  { id: "dashboard" as WorkspaceView, label: "Dashboard", icon: Home },
  { id: "learning" as WorkspaceView, label: "Learning Paths", icon: BookOpen },
  { id: "wellbeing" as WorkspaceView, label: "Well-being", icon: Heart },
  { id: "collaboration" as WorkspaceView, label: "Collaborate", icon: Users },
  { id: "analytics" as WorkspaceView, label: "Analytics", icon: BarChart3 },
  { id: "settings" as WorkspaceView, label: "Settings", icon: Settings },
];

const Sidebar = ({ currentView, onViewChange }: SidebarProps) => {
  return (
    <aside className="w-64 border-r border-border bg-card flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold gradient-text">Adaptive Workspace</h1>
        <p className="text-xs text-muted-foreground mt-1">Product Demo</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                currentView === item.id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate">Jane Doe</p>
            <p className="text-xs text-muted-foreground truncate">Premium User</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
