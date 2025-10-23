import { Target, Lightbulb, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const visionPoints = [
  {
    icon: Target,
    title: "Adaptive Environments",
    description: "Systems that evolve with user needs, learning styles, and abilities in real-time.",
  },
  {
    icon: Lightbulb,
    title: "Inclusive by Design",
    description: "Technology that removes barriers and empowers every individual to succeed.",
  },
  {
    icon: Globe,
    title: "Engaging Experiences",
    description: "Interactions that inspire, motivate, and sustain long-term growth and well-being.",
  },
];

const VisionSection = () => {
  return (
    <section id="vision" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-6">
            Fostering Adaptive, Inclusive & Engaging Digital Ecosystems
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We envision a future where technology seamlessly adapts to human needs, where every
            learner and professional has equal access to growth opportunities, and where digital
            environments enhance rather than hinder well-being and collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center card-hover bg-gradient-subtle border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 shadow-soft">
                  <Icon className="text-primary-foreground" size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
