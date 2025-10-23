import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-subtle -z-10" />
      
      <div className="container-custom px-6 md:px-12 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                The Future of Learning & Work
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Your Adaptive Digital Workspace for{" "}
              <span className="gradient-text">Inclusive Learning</span> &{" "}
              <span className="gradient-text">Thriving Work</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
              Personalized paths, enhanced well-being, seamless collaboration for every user.
              Transform how your team learns, grows, and succeeds together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Request a Demo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2" size={20} />
                Watch Overview
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-muted-foreground mt-1">User Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">45%</div>
                <div className="text-sm text-muted-foreground mt-1">Productivity Boost</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">AI Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse" />
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Diverse team collaborating in modern digital workspace"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
