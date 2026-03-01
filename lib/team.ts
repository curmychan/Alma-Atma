export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedIn?: string;
};

export const team: TeamMember[] = [
  {
    name: "Chrissie Li",
    role: "Founder",
    bio:
      "Immigrated to the U.S. at 21 and experienced firsthand how mentors, scholarships, and professional communities can change life trajectories. Founded Alma Atma Network in 2022 to expand access for late-arrival, first-generation students."
  },
  {
    name: "Volunteer Lead (Placeholder)",
    role: "Programs",
    bio:
      "Supports mentorship operations, matching workflows, and beneficiary experience. Replace with your team members."
  },
  {
    name: "Volunteer Lead (Placeholder)",
    role: "Community & Partnerships",
    bio:
      "Builds relationships with professional communities, event partners, and donors to expand access."
  }
];
