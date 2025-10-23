import { useState } from "react";
import Sidebar from "@/components/workspace/Sidebar";
import Dashboard from "@/components/workspace/Dashboard";
import LearningPaths from "@/components/workspace/LearningPaths";
import Wellbeing from "@/components/workspace/Wellbeing";
import Collaboration from "@/components/workspace/Collaboration";
import Analytics from "@/components/workspace/Analytics";
import Settings from "@/components/workspace/Settings";

export type WorkspaceView = "dashboard" | "learning" | "wellbeing" | "collaboration" | "analytics" | "settings";

const Index = () => {
  const [currentView, setCurrentView] = useState<WorkspaceView>("dashboard");

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "learning":
        return <LearningPaths />;
      case "wellbeing":
        return <Wellbeing />;
      case "collaboration":
        return <Collaboration />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-1 overflow-auto">
        {renderView()}
      </main>
    </div>
  );
};

export default Index;
