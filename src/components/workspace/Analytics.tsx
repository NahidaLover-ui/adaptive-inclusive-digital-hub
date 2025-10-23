import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Target, Award, Brain, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Analytics = () => {
  return (
    <div className="p-8 space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold mb-2">Performance Analytics</h2>
        <p className="text-muted-foreground">AI-powered insights into your learning and productivity</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Overall Progress</span>
            <TrendingUp className="text-green-500" size={20} />
          </div>
          <div className="text-3xl font-bold mb-1">68%</div>
          <p className="text-sm text-green-500">+12% from last month</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Learning Streak</span>
            <Award className="text-primary" size={20} />
          </div>
          <div className="text-3xl font-bold mb-1">14 days</div>
          <p className="text-sm text-muted-foreground">Personal best: 28 days</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Skills Mastered</span>
            <Target className="text-primary" size={20} />
          </div>
          <div className="text-3xl font-bold mb-1">12</div>
          <p className="text-sm text-primary">3 in progress</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Study Time</span>
            <Clock className="text-primary" size={20} />
          </div>
          <div className="text-3xl font-bold mb-1">24.5h</div>
          <p className="text-sm text-muted-foreground">This month</p>
        </Card>
      </div>

      <Tabs defaultValue="skills" className="space-y-6">
        <TabsList>
          <TabsTrigger value="skills">Skills Progress</TabsTrigger>
          <TabsTrigger value="feedback">AI Feedback</TabsTrigger>
          <TabsTrigger value="comparison">Peer Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="skills" className="space-y-6">
          {/* Skills Breakdown */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6">Skill Mastery Tracker</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold">Data Analysis</h4>
                    <p className="text-sm text-muted-foreground">Python, Pandas, NumPy</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">85%</div>
                    <p className="text-xs text-muted-foreground">Advanced</p>
                  </div>
                </div>
                <Progress value={85} className="h-2 mb-2" />
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="text-green-500" size={16} />
                  <span className="text-green-500">+8% this week</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold">Communication</h4>
                    <p className="text-sm text-muted-foreground">Presentations, Writing, Active Listening</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">72%</div>
                    <p className="text-xs text-muted-foreground">Intermediate</p>
                  </div>
                </div>
                <Progress value={72} className="h-2 mb-2" />
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="text-green-500" size={16} />
                  <span className="text-green-500">+5% this week</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold">Project Management</h4>
                    <p className="text-sm text-muted-foreground">Agile, Scrum, Planning</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">58%</div>
                    <p className="text-xs text-muted-foreground">Developing</p>
                  </div>
                </div>
                <Progress value={58} className="h-2 mb-2" />
                <div className="flex items-center gap-2 text-sm">
                  <TrendingDown className="text-orange-500" size={16} />
                  <span className="text-orange-500">Needs attention</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Learning Patterns */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Learning Patterns</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Most Productive Time</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Morning (9-11 AM)</span>
                    <div className="flex items-center gap-2">
                      <Progress value={92} className="w-24 h-2" />
                      <span className="text-sm font-semibold">92%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Afternoon (2-4 PM)</span>
                    <div className="flex items-center gap-2">
                      <Progress value={68} className="w-24 h-2" />
                      <span className="text-sm font-semibold">68%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Evening (7-9 PM)</span>
                    <div className="flex items-center gap-2">
                      <Progress value={45} className="w-24 h-2" />
                      <span className="text-sm font-semibold">45%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Preferred Learning Style</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Hands-on Practice</span>
                    <div className="flex items-center gap-2">
                      <Progress value={85} className="w-24 h-2" />
                      <span className="text-sm font-semibold">85%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Video Tutorials</span>
                    <div className="flex items-center gap-2">
                      <Progress value={72} className="w-24 h-2" />
                      <span className="text-sm font-semibold">72%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Reading Documentation</span>
                    <div className="flex items-center gap-2">
                      <Progress value={58} className="w-24 h-2" />
                      <span className="text-sm font-semibold">58%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-4">
          <Card className="p-6 bg-gradient-subtle">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <Brain className="text-primary-foreground" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2">AI Performance Analysis</h4>
                <p className="text-muted-foreground mb-4">
                  Your learning velocity has increased 23% over the past month. You're particularly 
                  strong in practical application but could benefit from more theoretical foundation 
                  in advanced topics.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5" />
                    <span><strong>Strength:</strong> Quick to apply new concepts in real scenarios</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5" />
                    <span><strong>Strength:</strong> Consistent learning schedule and habits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5" />
                    <span><strong>Opportunity:</strong> Spend more time on foundational concepts</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Recent Assessments</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div>
                  <h4 className="font-semibold">Data Manipulation Quiz</h4>
                  <p className="text-sm text-muted-foreground">Completed 2 days ago</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold gradient-text">92%</div>
                  <p className="text-xs text-green-500">Above average</p>
                </div>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div>
                  <h4 className="font-semibold">Communication Skills Assessment</h4>
                  <p className="text-sm text-muted-foreground">Completed 5 days ago</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold gradient-text">78%</div>
                  <p className="text-xs text-muted-foreground">On track</p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Cohort Performance Comparison</h3>
            <p className="text-muted-foreground mb-6">
              See how you compare to peers in similar learning paths (anonymized data)
            </p>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Overall Progress</span>
                  <span className="text-sm text-muted-foreground">You: 68% • Avg: 62%</span>
                </div>
                <div className="relative h-6 bg-muted rounded-full overflow-hidden">
                  <div className="absolute h-full bg-muted-foreground/30 rounded-full" style={{ width: '62%' }} />
                  <div className="absolute h-full bg-primary rounded-full" style={{ width: '68%' }} />
                </div>
                <p className="text-sm text-green-500 mt-1">+6% above cohort average</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Completion Rate</span>
                  <span className="text-sm text-muted-foreground">You: 85% • Avg: 71%</span>
                </div>
                <div className="relative h-6 bg-muted rounded-full overflow-hidden">
                  <div className="absolute h-full bg-muted-foreground/30 rounded-full" style={{ width: '71%' }} />
                  <div className="absolute h-full bg-primary rounded-full" style={{ width: '85%' }} />
                </div>
                <p className="text-sm text-green-500 mt-1">+14% above cohort average</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Weekly Study Time</span>
                  <span className="text-sm text-muted-foreground">You: 6.2h • Avg: 8.1h</span>
                </div>
                <div className="relative h-6 bg-muted rounded-full overflow-hidden">
                  <div className="absolute h-full bg-primary rounded-full" style={{ width: '62%' }} />
                  <div className="absolute h-full bg-muted-foreground/30 rounded-full left-[62%]" style={{ width: '19%' }} />
                </div>
                <p className="text-sm text-orange-500 mt-1">-1.9h below cohort average</p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
