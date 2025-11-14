import { MemberCard } from "@/components/MemberCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { core } from "@/data/members";
import { site } from "@/data/site";
import { Users, Calendar, Target, Trophy } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 space-y-20">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold">About {site.name}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {site.description}
          </p>
        </div>

        {/* Club Overview */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <Card>
            <CardContent className="p-8 space-y-4 text-lg text-muted-foreground">
              <p>
                Code Wizards is a vibrant community of passionate student developers, designers, and tech enthusiasts dedicated to fostering a culture of innovation, collaboration, and continuous learning.
              </p>
              <p>
                Founded with the vision of bridging the gap between academic knowledge and industry practices, we conduct workshops, hackathons, mentorship programs, and networking events throughout the year.
              </p>
              <p>
                Our club provides a platform for students to:
              </p>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                <li>Collaborate on meaningful tech projects</li>
                <li>Learn competitive programming</li>
                <li>Gain hands-on experience with cutting-edge technologies</li>
                <li>Build real-world problem-solving skills</li>
                <li>Grow in an inclusive and supportive environment</li>
              </ul>
              <p>
                We believe in learning by doing — where every member can explore, build, and thrive.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Current Initiatives */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8"> Current Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="text-2xl font-bold"> Weekly DSA Sessions</div>
                <p className="text-muted-foreground">
                  Structured problem-solving sessions to strengthen coding fundamentals.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="text-2xl font-bold"> Monthly Hackathons</div>
                <p className="text-muted-foreground">
                  Quick, high-energy competitions to spark creativity and teamwork.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="text-2xl font-bold"> Industry Mentorship Program</div>
                <p className="text-muted-foreground">
                  Guidance from industry professionals through sessions, reviews, and mentoring.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="text-2xl font-bold"> Open Source Contributions</div>
                <p className="text-muted-foreground">
                  Encouraging students to contribute to real-world open-source projects.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="text-2xl font-bold"> Tech Talks Series</div>
                <p className="text-muted-foreground">
                  Inviting experts to share knowledge about modern tools, frameworks, and technologies.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="text-2xl font-bold"> Project Showcases</div>
                <p className="text-muted-foreground">
                  Providing members a stage to present their projects and gain feedback.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats Grid */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <Users className="h-12 w-12 mx-auto text-primary" />
                <div className="text-3xl font-bold">200+</div>
                <div className="text-muted-foreground">Active Members</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <Calendar className="h-12 w-12 mx-auto text-primary" />
                <div className="text-3xl font-bold">20+</div>
                <div className="text-muted-foreground">Events Organized</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <Target className="h-12 w-12 mx-auto text-primary" />
                <div className="text-3xl font-bold">10+</div>
                <div className="text-muted-foreground">Industry Partners</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <Trophy className="h-12 w-12 mx-auto text-primary" />
                <div className="text-3xl font-bold">5+</div>
                <div className="text-muted-foreground">Awards Won</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Team */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Core Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {core.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        {/* Timeline/Agenda */}
        <section className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Updated 2025 Roadmap — Code Wizards</h2>
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 mt-1 rounded-full bg-blue-500" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">January – March: Foundation Phase</h3>
                    <div className="font-semibold text-primary mb-3">Kickstarting the Year</div>
                    <ul className="space-y-2">
                      {["Club Orientation & Member Onboarding", "Weekly DSA Sessions Begin", "Launch of Educational Series (C, Web Dev, JS)", "Internal Skill-Building Challenges", "AlgoZenith Partnership Activation", "Social Media Engagement Drive & Giveaways"].map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 mt-1 rounded-full bg-green-500" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">April – June: Development Sprint</h3>
                    <div className="font-semibold text-primary mb-3">Building Skills & Real Projects</div>
                    <ul className="space-y-2">
                      {["Software Development Activity (4-Part Team Challenge)", "Portfolio-Building Workshops (HTML, CSS, JS)", "Progress Checkpoints & Mentorship Sessions", "Mid-Year Review Meeting", "Website Development Phase (CW Official Website – v1)"].map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 mt-1 rounded-full bg-orange-500" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">July – September: Tech Growth Cycle</h3>
                    <div className="font-semibold text-primary mb-3">Leveling Up</div>
                    <ul className="space-y-2">
                      {["Monthly Hackathons & Problem-Solving Contests", "Open Source Contribution Month", "Algorithm & DSA Booster Sessions", "Pre-Event Preparations for CREATE", "Practice Activities + Mock Evaluations"].map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 mt-1 rounded-full bg-red-500" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">October – November: Major Event Zone</h3>
                    <div className="font-semibold text-primary mb-3">Execution & Excellence</div>
                    <ul className="space-y-2">
                      {["CREATE — Portfolio Quest (October/November)", "Project Submissions & Judging", "IGNITION Event Planning", "Final Website Polish & Deployment", "Event Rehearsals, Agenda Setting & Logistics"].map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 mt-1 rounded-full bg-purple-500" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">November 15, 2025: IGNITION</h3>
                    <div className="font-semibold text-primary mb-3">Main Highlight Event</div>
                    <ul className="space-y-2">
                      {["Prize Distribution Ceremony", "Code Wizard Website Inauguration", "Guest Speech", "Future Plans Announcement", "Club Recognition & Celebration"].map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 mt-1 rounded-full bg-slate-500" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">December: Wrap-Up & Community Building</h3>
                    <div className="font-semibold text-primary mb-3">Reflect, Celebrate, and Prepare</div>
                    <ul className="space-y-2">
                      {["Year-End Community Meetup", "Alumni Interaction Session", "Member Appreciation & Certificates", "2026 Planning Meet (New Roadmap + Roles)"].map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
