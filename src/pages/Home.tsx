import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { EventsCarousel } from "@/components/EventsCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Rocket, Brain, Cpu, Lightbulb } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Past Events Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Past Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our journey through workshops, hackathons, and competitions
            </p>
          </div>
          <EventsCarousel />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-16 text-center text-primary-foreground shadow-2xl">
            {/* Floating Animated Tech Icons */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-8 left-28 animate-float">
                <Code className="w-12 h-12" />
              </div>
              <div className="absolute top-1/3 right-12 animate-float" style={{ animationDelay: "0.5s" }}>
                <Zap className="w-10 h-10" />
              </div>
              <div className="absolute bottom-12 left-1/4 animate-float" style={{ animationDelay: "1s" }}>
                <Rocket className="w-12 h-12" />
              </div>
              <div className="absolute bottom-20 right-8 animate-float" style={{ animationDelay: "1.5s" }}>
                <Brain className="w-10 h-10" />
              </div>
              <div className="absolute top-1/2 left-12 animate-float" style={{ animationDelay: "2s" }}>
                <Cpu className="w-11 h-11" />
              </div>
              <div className="absolute top-12 right-20 animate-float" style={{ animationDelay: "2.5s" }}>
                <Lightbulb className="w-10 h-10" />
              </div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold">
                Want to Collaborate With Us?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Whether you want to host a workshop, sponsor an event, or partner with us, we'd love to hear from you!
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg mt-4 shadow-lg hover:shadow-xl"
              >
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
