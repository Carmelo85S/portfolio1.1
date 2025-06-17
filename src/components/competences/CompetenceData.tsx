import { Code2, DatabaseBackup, Server } from "lucide-react";
import type { CompetenceCardProps } from "./CompetenceCard";

const competenceData: CompetenceCardProps[] = [
  {
    icon: Code2,
    badgeText: "+25 Projects",
    title: "Frontend Development",
    description:
      "Crafting intuitive and responsive UIs with React, TypeScript, and modern CSS tooling for seamless user experiences.",
    info: "UI/UX Excellence",
    stack: ["React", "TypeScript", "Tailwind CSS", "State Management", "Responsive Design"],
    level: 90,
    color: "bg-blue-500",
  },
  {
    icon: DatabaseBackup,
    badgeText: "Active learning",
    title: "Backend Development",
    description:
      "Ensuring data integrity and performance with advanced database solutions.",
    info: "Data Excellence",
    stack: ["SQL", "NoSQL", "Database Design", "API Development"],
    level: 65,
    color: "bg-green-600",
  },
  {
    icon: Server,
    badgeText: "DevOps",
    title: "Dev Ops & Deployment",
    description: "Ensuring seamless integration and delivery of applications through robust DevOps practices.",
    info: "End-to-End Solutions",
    stack: ["Docker", "CI/CD", "Version Control", "Agile Methodologies", "SCRUM"],
    level: 75,
    color: "bg-gradient-to-r from-purple-500 to-indigo-600",
  },
];

export default competenceData;
