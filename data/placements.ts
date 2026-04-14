export interface Placement {
  memberName: string;
  company: string;
  role: string;
  quote: string;
  logo?: string;
  year: number;
  type: "Internship" | "Full-Time";
}

export const placements: Placement[] = [
  {
    memberName: "Cadric Tackey",
    company: "Liberty Mutual",
    role: "Analyst",
    quote: "",
    logo: "/images/placements-photos/Liberty-Mutual_47397411-0401-6FB8-5289559A40ACA7ED-4739734ed8fcd3e_47397ed8-09a6-c97e-a298dd5ecd529446.jpg",
    year: 2025,
    type: "Full-Time",
  },
  {
    memberName: "Sam Eastman",
    company: "Mitsubishi UFJ Financial Group",
    role: "Analyst",
    quote: "",
    logo: "/images/placements-photos/Mitsubishi_UFJ_Financial_Group_logo.gif",
    year: 2025,
    type: "Full-Time",
  },
  {
    memberName: "Michael",
    company: "CSC Global",
    role: "Analyst",
    quote: "",
    logo: "/images/placements-photos/csc-global-420x320-20190911.png",
    year: 2025,
    type: "Full-Time",
  },
  {
    memberName: "Ben Woltman",
    company: "Invictus Capital Partners",
    role: "Analyst",
    quote: "",
    logo: "/images/placements-photos/1631325492077.jpeg",
    year: 2025,
    type: "Full-Time",
  },
  {
    memberName: "Connor Rousset",
    company: "Amazon",
    role: "Analyst",
    quote: "",
    logo: "/images/placements-photos/Amazon_logo.svg.webp",
    year: 2025,
    type: "Full-Time",
  },
  {
    memberName: "Lakhit Soma",
    company: "Verizon",
    role: "Analyst",
    quote: "",
    logo: "/images/placements-photos/Verizon_2024.svg.png",
    year: 2025,
    type: "Full-Time",
  },
];
