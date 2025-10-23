import { Brain, Heart, TrendingUp, Accessibility, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import aiLearningImg from "@/assets/ai-learning.jpg";
import wellbeingImg from "@/assets/wellbeing.jpg";
import collaborationImg from "@/assets/collaboration.jpg";

const features = [
  {
    icon: Brain,
    title: "AI-Driven Personalized Learning",
    subtitle: "Intelligent Personalization for Every Journey",
    description:
      "Our AI creates custom learning and development paths tailored to individual needs, identifies mistakes in real-time, and suggests relevant resources to accelerate growth.",
    image: aiLearningImg,
    imageAlt: "AI-powered personalized learning dashboard showing adaptive paths",
  },
  {
    icon: Heart,
    title: "Enhanced Digital Well-being",
    subtitle: "Thrive with Integrated Well-being",
    description:
      "Integrated tools support your team's mental and physical health with smart break reminders, focus modes, and posture suggestions for sustainable productivity.",
    image: wellbeingImg,
    imageAlt: "Digital well-being interface with mindful break timers and wellness features",
  },
  {
    icon: TrendingUp,
    title: "Advanced Evaluation & Feedback",
    subtitle: "Smarter Insights, Better Growth",
    description:
      "AI-powered analytics provide continuous feedback and track skill mastery, enabling data-driven decisions that accelerate individual and team development.",
    image: null,
  },
  {
    icon: Accessibility,
    title: "Universally Accessible UI/UX",
    subtitle: "Designed for Everyone",
    description:
      "Multi-modal interaction including voice commands, gesture controls, and customizable themes ensure the platform works for users of all abilities.",
    image: null,
  },
  {
    icon: Users,
    title: "Hybrid Collaboration Suite",
    subtitle: "Connect, Collaborate, Anywhere",
    description:
      "Seamless virtual meetings with intelligent transcription, real-time translation, and asynchronous collaboration tools that keep everyone connected.",
    image: collaborationImg,
    imageAlt: "Virtual meeting interface with diverse team members collaborating",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for <span className="gradient-text">Modern Teams</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to create adaptive, inclusive, and engaging digital environments.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`space-y-6 animate-fade-in ${isEven ? "" : "lg:col-start-2"}`}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary shadow-soft">
                    <Icon className="text-primary-foreground" size={32} />
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-primary font-medium mb-4">{feature.subtitle}</p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Image or Placeholder */}
                <div className={`${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                  {feature.image ? (
                    <Card className="overflow-hidden shadow-elevated card-hover animate-scale-in">
                      <img
                        src={feature.image}
                        alt={feature.imageAlt}
                        className="w-full h-auto object-cover"
                      />
                    </Card>
                  ) : (
                    <Card className="p-12 bg-gradient-subtle shadow-soft animate-scale-in">
                      <div className="aspect-video flex items-center justify-center">
                        <Icon className="text-primary/20" size={120} />
                      </div>
                    </Card>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
