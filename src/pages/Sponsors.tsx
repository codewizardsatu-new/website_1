import { SponsorCard } from "@/components/SponsorCard";
import { Button } from "@/components/ui/button";
import { sponsors } from "@/data/sponsors";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Sponsors = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 space-y-16">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold">Our Sponsors</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're grateful to our amazing sponsors who make our events and initiatives possible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} sponsor={sponsor} />
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <section className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 text-center text-primary-foreground">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:14px_24px]" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-bold">
                Become a Sponsor
              </h2>
              <p className="text-lg opacity-90">
                Partner with Code Wizards to empower the next generation of developers. 
                Reach 200+ talented students and support innovation in tech education.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg"
              >
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sponsors;
