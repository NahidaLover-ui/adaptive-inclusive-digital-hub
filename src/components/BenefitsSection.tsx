import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Building2, CheckCircle } from "lucide-react";

const educationBenefits = [
  "Personalized learning paths adapt to each student's pace and style",
  "Real-time feedback helps educators identify and address learning gaps",
  "Improved student engagement through interactive, accessible content",
  "Streamlined administrative workflows and data-driven insights",
  "Inclusive design ensures every student can participate fully",
  "AI-powered analytics track progress and predict outcomes",
];

const workplaceBenefits = [
  "Continuous skill development aligned with career goals",
  "Enhanced productivity through integrated well-being tools",
  "Stronger remote team cohesion with hybrid collaboration features",
  "Data-driven talent development and performance insights",
  "Reduced meeting fatigue with intelligent scheduling and summaries",
  "Accessible platform supports diverse workforce needs",
];

const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState<"education" | "workplace">("education");

  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who <span className="gradient-text">Benefits</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Transforming outcomes for educational institutions and modern workplaces alike.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={activeTab === "education" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveTab("education")}
            className="gap-2"
          >
            <GraduationCap size={20} />
            For Education
          </Button>
          <Button
            variant={activeTab === "workplace" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveTab("workplace")}
            className="gap-2"
          >
            <Building2 size={20} />
            For Workplaces
          </Button>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-elevated animate-fade-in">
            {activeTab === "education" ? (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <GraduationCap className="text-primary" size={32} />
                    Empowering Educational Excellence
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Supporting teachers, students, and administrators with tools that make
                    personalized learning accessible and effective for everyone.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {educationBenefits.map((benefit, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Building2 className="text-primary" size={32} />
                    Transforming Modern Workplaces
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Enabling L&D, HR, and employees with solutions that boost productivity,
                    well-being, and collaboration across distributed teams.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {workplaceBenefits.map((benefit, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
