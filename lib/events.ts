export type Event = {
  slug: string;
  title: string;
  date: string; // ISO
  location: string;
  summary: string;
  details: string[];
  status: "upcoming" | "past";
};

export const events: Event[] = [
  {
    slug: "community-mixer",
    title: "Community Mixer (Sample)",
    date: "2026-04-20",
    location: "San Francisco, CA",
    summary: "A welcoming gathering for mentees, mentors, and partners to connect and share stories.",
    details: [
      "Lightning introductions and small-group conversations.",
      "Optional networking prompts for first-time attendees.",
      "Accessibility notes and quiet space available."
    ],
    status: "upcoming"
  },
  {
    slug: "career-story-night",
    title: "Career Story Night (Sample)",
    date: "2025-05-12",
    location: "Virtual",
    summary: "Professionals share honest stories about detours, growth, and building a career without a roadmap.",
    details: [
      "Short talks followed by Q&A.",
      "Resources shared afterward."
    ],
    status: "past"
  }
];
