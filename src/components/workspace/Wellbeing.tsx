import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Coffee, Eye, Activity, Moon } from "lucide-react";
import { useState } from "react";

const Wellbeing = () => {
  const [breakTimer, setBreakTimer] = useState(false);

  return (
    <div className="p-8 space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold mb-2">Digital Well-being</h2>
        <p className="text-muted-foreground">Track and improve your mental and physical health</p>
      </div>

      {/* Well-being Score */}
      <Card className="p-6 bg-gradient-subtle">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold mb-1">Your Well-being Score</h3>
            <p className="text-muted-foreground">Based on activity patterns and breaks</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold gradient-text mb-1">85</div>
            <p className="text-sm text-muted-foreground">out of 100</p>
          </div>
        </div>
        <Progress value={85} className="h-3" />
      </Card>

      {/* Break Timer */}
      <Card className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Coffee className="text-primary" size={28} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Smart Break Reminders</h3>
            <p className="text-muted-foreground mb-4">
              You've been working for 45 minutes. Time for a short break to stay fresh.
            </p>
            <div className="flex gap-3">
              <Button onClick={() => setBreakTimer(true)}>
                Start 5-Min Break
              </Button>
              <Button variant="outline">Snooze 15 Min</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Today's Activity */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Eye className="text-primary" size={20} />
            </div>
            <h3 className="text-lg font-bold">Screen Time</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Today</span>
                <span className="font-semibold">3h 24m</span>
              </div>
              <Progress value={68} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">68% of recommended limit</p>
            </div>
            <div className="pt-3 border-t border-border">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Weekly Average</span>
                <span className="font-medium">4h 12m/day</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Activity className="text-primary" size={20} />
            </div>
            <h3 className="text-lg font-bold">Active Breaks</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Completed</span>
                <span className="font-semibold">4 of 6</span>
              </div>
              <Progress value={67} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">2 more breaks recommended</p>
            </div>
            <div className="pt-3 border-t border-border">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Streak</span>
                <span className="font-medium">7 days 🔥</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Focus Mode */}
      <Card className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Moon className="text-primary" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Focus Mode</h3>
              <p className="text-muted-foreground mb-4">
                Block distractions and optimize your environment for deep work
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>✓ Mute all non-urgent notifications</li>
                <li>✓ Adjust screen brightness and color temperature</li>
                <li>✓ Enable ambient focus sounds</li>
                <li>✓ Auto-decline meeting invites</li>
              </ul>
            </div>
          </div>
          <Button size="lg">Enable Focus</Button>
        </div>
      </Card>

      {/* Posture & Ergonomics */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <Activity className="text-primary-foreground" size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Posture Alert</h4>
            <p className="text-muted-foreground mb-3">
              Our AI has detected you've been sitting for 90 minutes. Consider:
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground mb-4">
              <li>• Standing up and stretching for 2 minutes</li>
              <li>• Adjusting your monitor to eye level</li>
              <li>• Taking a short walk around your space</li>
            </ul>
            <Button variant="outline" size="sm">Start Stretch Routine</Button>
          </div>
        </div>
      </Card>

      {/* Mindfulness Sessions */}
      <div>
        <h3 className="text-xl font-bold mb-4">Guided Mindfulness</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-5 card-hover cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-3">
              <Heart className="text-primary-foreground" size={24} />
            </div>
            <h4 className="font-semibold mb-1">5-Min Breathing</h4>
            <p className="text-sm text-muted-foreground mb-3">Quick relaxation exercise</p>
            <Button variant="outline" size="sm" className="w-full">Start</Button>
          </Card>

          <Card className="p-5 card-hover cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-3">
              <Moon className="text-primary-foreground" size={24} />
            </div>
            <h4 className="font-semibold mb-1">Body Scan</h4>
            <p className="text-sm text-muted-foreground mb-3">10-minute guided meditation</p>
            <Button variant="outline" size="sm" className="w-full">Start</Button>
          </Card>

          <Card className="p-5 card-hover cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-3">
              <Eye className="text-primary-foreground" size={24} />
            </div>
            <h4 className="font-semibold mb-1">Eye Rest</h4>
            <p className="text-sm text-muted-foreground mb-3">Reduce eye strain exercises</p>
            <Button variant="outline" size="sm" className="w-full">Start</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Wellbeing;
