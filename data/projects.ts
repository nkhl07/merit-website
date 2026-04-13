export type ProjectStatus = "Completed" | "In Progress" | "Upcoming";

export interface Project {
  title: string;
  company: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  semester?: string;
}

export const projects: Project[] = [];
