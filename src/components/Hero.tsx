import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export const Hero = () => {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Empowering Student Developers</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Code Wizards
            </span>
            <br />
            <span className="text-foreground mt-2 block">
              {site.tagline}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {site.description} Join us to learn, build, and grow together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gradient-primary text-lg glow-primary">
              <Link to="/registration">
                Join Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg">
              <Link to="/events">View Upcoming Events</Link>
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-16">
            <div className="glass-card p-6 rounded-2xl text-center">
              <AnimatedCounter 
                end={200} 
                suffix="+" 
                className="text-4xl font-bold text-primary mb-1"
              />
              <div className="text-sm text-muted-foreground">Members</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <AnimatedCounter 
                end={20} 
                suffix="+" 
                className="text-4xl font-bold text-primary mb-1"
              />
              <div className="text-sm text-muted-foreground">Events</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <AnimatedCounter 
                end={10} 
                suffix="+" 
                className="text-4xl font-bold text-primary mb-1"
              />
              <div className="text-sm text-muted-foreground">Collaborations</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <AnimatedCounter 
                end={5} 
                suffix="+" 
                className="text-4xl font-bold text-primary mb-1"
              />
              <div className="text-sm text-muted-foreground">Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
