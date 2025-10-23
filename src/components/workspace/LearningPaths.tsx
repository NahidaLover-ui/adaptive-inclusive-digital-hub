import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Brain, CheckCircle, Clock, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const LearningPaths = () => {
  return (
    <div className="p-8 space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold mb-2">Learning Paths</h2>
        <p className="text-muted-foreground">AI-personalized curriculum tailored to your goals</p>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Active Paths</TabsTrigger>
          <TabsTrigger value="recommended">AI Recommended</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          {/* Active Learning Path */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold">Data Science Fundamentals</h3>
                  <Badge>In Progress</Badge>
                </div>
                <p className="text-muted-foreground">Master the core concepts of data analysis and visualization</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold gradient-text">68%</p>
                <p className="text-sm text-muted-foreground">Complete</p>
              </div>
            </div>

            <Progress value={68} className="mb-6" />

            {/* Learning Modules */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-muted/50">
                <CheckCircle className="text-primary shrink-0" size={24} />
                <div className="flex-1">
                  <p className="font-semibold">Introduction to Python</p>
                  <p className="text-sm text-muted-foreground">Completed • Score: 92%</p>
                </div>
                <Button variant="outline" size="sm">Review</Button>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg border-2 border-primary bg-primary/5">
                <Brain className="text-primary shrink-0" size={24} />
                <div className="flex-1">
                  <p className="font-semibold">Data Manipulation with Pandas</p>
                  <p className="text-sm text-muted-foreground">In Progress • 45% Complete</p>
                  <div className="mt-2">
                    <Progress value={45} className="h-2" />
                  </div>
                </div>
                <Button size="sm">Continue</Button>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg border border-border opacity-60">
                <Clock className="text-muted-foreground shrink-0" size={24} />
                <div className="flex-1">
                  <p className="font-semibold">Statistical Analysis</p>
                  <p className="text-sm text-muted-foreground">Not started • Unlocks in 3 days</p>
                </div>
                <Button variant="outline" size="sm" disabled>Locked</Button>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg border border-border opacity-60">
                <Lock className="text-muted-foreground shrink-0" size={24} />
                <div className="flex-1">
                  <p className="font-semibold">Machine Learning Basics</p>
                  <p className="text-sm text-muted-foreground">Complete previous modules to unlock</p>
                </div>
                <Button variant="outline" size="sm" disabled>Locked</Button>
              </div>
            </div>

            {/* AI Recommendation */}
            <Card className="mt-6 p-4 bg-gradient-subtle">
              <div className="flex items-start gap-3">
                <Brain className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold mb-1">AI Recommendation</p>
                  <p className="text-sm text-muted-foreground">
                    You're making great progress! Consider reviewing "Introduction to Python" concepts 
                    before moving to Statistical Analysis for better retention.
                  </p>
                </div>
              </div>
            </Card>
          </Card>

          {/* Second Active Path */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold">Leadership & Communication</h3>
                  <Badge variant="outline">Active</Badge>
                </div>
                <p className="text-muted-foreground">Develop essential soft skills for team collaboration</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold gradient-text">34%</p>
                <p className="text-sm text-muted-foreground">Complete</p>
              </div>
            </div>

            <Progress value={34} className="mb-4" />
            <p className="text-sm text-muted-foreground">5 of 12 modules completed</p>
          </Card>
        </TabsContent>

        <TabsContent value="recommended" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Brain className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Advanced Data Visualization</h3>
                <p className="text-muted-foreground mb-3">
                  Based on your progress in Data Science Fundamentals, this path will help you master 
                  visual storytelling with data.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock size={16} />
                  <span>Estimated: 6 weeks</span>
                  <span>•</span>
                  <span>18 modules</span>
                </div>
                <Button>Start Learning Path</Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Brain className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Agile Project Management</h3>
                <p className="text-muted-foreground mb-3">
                  Complement your communication skills with project management expertise.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock size={16} />
                  <span>Estimated: 4 weeks</span>
                  <span>•</span>
                  <span>12 modules</span>
                </div>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">Introduction to Web Development</h3>
                <p className="text-muted-foreground">Completed on March 15, 2025</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold gradient-text">95%</p>
                <p className="text-sm text-muted-foreground">Final Score</p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LearningPaths;
