import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Heart, TrendingUp, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="p-8 space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold mb-2">Welcome back, Jane!</h2>
        <p className="text-muted-foreground">Here's your personalized workspace overview</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 card-hover">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Brain className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Courses</p>
              <p className="text-2xl font-bold">4</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 card-hover">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <TrendingUp className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg. Progress</p>
              <p className="text-2xl font-bold">68%</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 card-hover">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Heart className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Well-being Score</p>
              <p className="text-2xl font-bold">85/100</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 card-hover">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Calendar className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Upcoming Sessions</p>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Current Learning Paths */}
      <div>
        <h3 className="text-xl font-bold mb-4">Continue Learning</h3>
        <div className="grid gap-4">
          <Card className="p-6 card-hover">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-semibold text-lg mb-1">Advanced Data Analytics</h4>
                <p className="text-sm text-muted-foreground">AI-recommended based on your progress</p>
              </div>
              <Button size="sm">Continue</Button>
            </div>
            <Progress value={72} className="mb-2" />
            <p className="text-sm text-muted-foreground">72% Complete • 4 lessons remaining</p>
          </Card>

          <Card className="p-6 card-hover">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-semibold text-lg mb-1">Effective Communication Skills</h4>
                <p className="text-sm text-muted-foreground">Next session in 2 hours</p>
              </div>
              <Button size="sm">Continue</Button>
            </div>
            <Progress value={45} className="mb-2" />
            <p className="text-sm text-muted-foreground">45% Complete • 8 lessons remaining</p>
          </Card>
        </div>
      </div>

      {/* AI Insights */}
      <Card className="p-6 bg-gradient-subtle">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <Brain className="text-primary-foreground" size={24} />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2">AI Insight</h4>
            <p className="text-muted-foreground mb-4">
              Based on your learning patterns, you're most productive between 9-11 AM. 
              We've scheduled your most challenging content during these times.
            </p>
            <Button variant="outline" size="sm">View Full Analysis</Button>
          </div>
        </div>
      </Card>

      {/* Upcoming Schedule */}
      <div>
        <h3 className="text-xl font-bold mb-4">Today's Schedule</h3>
        <div className="space-y-3">
          <Card className="p-4 flex items-center gap-4">
            <div className="text-center min-w-[60px]">
              <p className="text-2xl font-bold">10:00</p>
              <p className="text-xs text-muted-foreground">AM</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="flex-1">
              <p className="font-semibold">Team Collaboration Session</p>
              <p className="text-sm text-muted-foreground">Virtual meeting with design team</p>
            </div>
            <Button size="sm" variant="outline">Join</Button>
          </Card>

          <Card className="p-4 flex items-center gap-4">
            <div className="text-center min-w-[60px]">
              <p className="text-2xl font-bold">14:30</p>
              <p className="text-xs text-muted-foreground">PM</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="flex-1">
              <p className="font-semibold">Mindful Break</p>
              <p className="text-sm text-muted-foreground">Guided meditation session</p>
            </div>
            <Button size="sm" variant="outline">Start</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
