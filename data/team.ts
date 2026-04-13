export interface TeamMember {
  name: string;
  title: string;
  description: string;
  photo?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Darshan Gokulraj",
    title: "President",
    description:
      "Leads the executive team and runs board meetings. Serves as the main representative and primary point of contact with advisors, university administration, and industry partners.",
    photo: "/images/exec-team-photos/darsahn linkedin pfp.jpeg",
  },
  {
    name: "Noah Kornfeld",
    title: "Vice President",
    description:
      "Supports the president in all organizational matters, manages member interviews and onboarding, oversees the club website, and ensures ongoing member engagement.",
    photo: "/images/exec-team-photos/noah linkedin pfp.jpeg",
  },
  {
    name: "Isaiah Cato",
    title: "Chief Marketing Officer",
    description:
      "Manages social media presence and promotional materials, builds MERIT's public image on and off campus, and organizes and leads club meetings.",
    photo: "/images/exec-team-photos/isaiah linkedin pfp.jpeg",
  },
  {
    name: "Max Tucker",
    title: "Chief Risk Officer",
    description:
      "Identifies risks related to events and operations, ensures compliance with university rules and safety procedures, advises the board on high-risk decisions, and handles issue resolution.",
    photo: "/images/exec-team-photos/max linkedin pfp.png",
  },
  {
    name: "Nikhil Mahanti",
    title: "Chief Technology Officer",
    description:
      "Leads all technical initiatives for MERIT, including the club website and digital infrastructure. Evaluates and integrates new tools to support club operations, and advises the board on technology strategy and execution.",
    photo: "/images/exec-team-photos/nikhil linkedin pfp.jpeg",
  },
  {
    name: "Salahuddin (Sal) Allah",
    title: "Treasurer",
    description:
      "Manages club finances and financial records, tracks income, expenses, and reimbursements, collects dues, prepares financial reports, and ensures all spending aligns with the budget.",
    photo: "/images/exec-team-photos/sal linkedin pfp.png",
  },
];
