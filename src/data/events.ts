export type Event = {
  slug: string;
  title: string;
  date: string;
  image: string;
  summary: string;
  location?: string;
  registrationOpen?: boolean;
  status?: "coming soon" | "announced soon";
};

export const upcoming: Event[] = [
  // {
  //   slug: "alpha-announce",
  //   title: "Alpha: Future Competitions Reveal",
  //   date: "2025-11-20",
  //   image: "/placeholder.svg",
  //   summary: "Join us for an exciting kickoff session where we announce upcoming competitions, hackathons, and major events for the semester.",
  //   location: "Main Auditorium",
  //   registrationOpen: true,
  //   status: "coming soon",
  // },
  // {
  //   slug: "web-dev-workshop",
  //   title: "Modern Web Development Workshop",
  //   date: "2025-11-27",
  //   image: "/placeholder.svg",
  //   summary: "Learn the latest web technologies including React, TypeScript, and Tailwind CSS in this hands-on workshop.",
  //   location: "Computer Lab 3",
  //   registrationOpen: false,
  //   status: "announced soon",
  // },
  // {
  //   slug: "ai-ml-bootcamp",
  //   title: "AI/ML Bootcamp for Beginners",
  //   date: "2025-12-05",
  //   image: "/placeholder.svg",
  //   summary: "Dive into artificial intelligence and machine learning with practical examples and real-world applications.",
  //   location: "Conference Hall",
  //   registrationOpen: false,
  //   status: "announced soon",
  // },
];

export const past: Event[] = [
  {
    slug: "portfolio-competition",
    title: "CREATE - Portfolio Quest",
    date: "2025-11-12",
    image: "/CREATE.png",
    summary: "Showcase your web development skills by creating a stunning personal portfolio website in this exciting competition.",
  },
  {
    slug: "Webinar on linkedin",
    title: "Linkedin For Beginners",
    date: "2025-11-01",
    image: "/linkdinweb.png",
    summary: "Learn how to effectively use LinkedIn to build your professional network, showcase your skills, and land job opportunities.",
  },
  {
    slug: "Expert Talk",
    title: "How to crack SAAS based company",
    date: "2025-09-20",
    image: "/ex talk 20-09-25.png",
    summary: "Join us for an insightful session with industry experts sharing their journey and tips on succeeding in SAAS-based companies.",
  },
  {
    slug: "Quiz Competition",
    title: "Ultimate Quiz Challenge",
    date: "2025-09-20",
    image: "/quiz 20-06-25 banner.png",
    summary: "A comprehensive hands-on workshop covering graph data structures, traversal algorithms, and practical problem-solving.",
  },
];
