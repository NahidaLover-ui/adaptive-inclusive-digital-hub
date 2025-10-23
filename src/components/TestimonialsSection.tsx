import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "This platform transformed how we approach personalized learning. Every student now gets the support they need, when they need it.",
    author: "Dr. Sarah Martinez",
    role: "Director of Educational Technology",
    organization: "Lincoln High School",
  },
  {
    quote:
      "The well-being features have been game-changing for our remote team. Productivity is up, and burnout is down.",
    author: "James Chen",
    role: "VP of People Operations",
    organization: "TechVenture Inc.",
  },
  {
    quote:
      "As someone who uses assistive technology, I finally have a platform that works seamlessly for me. It's truly inclusive.",
    author: "Maya Patel",
    role: "Senior Software Engineer",
    organization: "Global Systems",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">Innovators</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real impact from educators, professionals, and organizations worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 card-hover bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="text-primary/20 mb-4" size={40} />
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-primary">{testimonial.organization}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
