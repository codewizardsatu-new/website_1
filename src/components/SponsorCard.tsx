import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sponsor } from "@/data/sponsors";

interface SponsorCardProps {
  sponsor: Sponsor;
}

export const SponsorCard = ({ sponsor }: SponsorCardProps) => {
  const CardWrapper = sponsor.url ? "a" : "div";
  const cardProps = sponsor.url
    ? { href: sponsor.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <CardWrapper {...cardProps} className="block">
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center h-100 mb-4">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="max-h-full max-w-[180px] object-contain"
            />
          </div>
          <CardTitle>{sponsor.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-center">
            {sponsor.description}
          </CardDescription>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};
