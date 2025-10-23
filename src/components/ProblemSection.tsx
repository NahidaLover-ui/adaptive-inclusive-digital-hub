import { AlertCircle, Brain, Users, Accessibility } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: AlertCircle,
    title: "Inadequate Evaluation",
    description: "Traditional systems fail to capture individual learning needs and progress effectively.",
  },
  {
    icon: Brain,
    title: "Digital Well-being Gaps",
    description: "Lack of integrated tools to support mental health and sustainable work habits.",
  },
  {
    icon: Users,
    title: "Meeting Bias & Inefficiency",
    description: "Hybrid meetings often exclude remote participants and lack actionable insights.",
  },
  {
    icon: Accessibility,
    title: "Complex Interfaces",
    description: "Non-inclusive designs create barriers for users with diverse needs and abilities.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Challenges We <span className="gradient-text">Solve</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Modern learning and work environments face critical barriers that limit potential and inclusivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card
                key={index}
                className="p-6 card-hover bg-card border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm">{problem.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
