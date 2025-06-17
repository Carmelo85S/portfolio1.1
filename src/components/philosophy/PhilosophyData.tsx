import { ChevronsLeftRight, Server, UserLock, Gauge, Component, ShieldCheck } from "lucide-react";
import type { PhilosophyCardProps } from "./PhilosophyCard";

const philosophyData: PhilosophyCardProps[] = [
  {
    icon: ShieldCheck,
    title: "Agile development",
    description:
      "Embracing Agile methodologies to deliver high-quality software solutions that adapt to changing requirements and enhance team collaboration.",
  },
  {
    icon: ChevronsLeftRight,
    title: "Clean Code",
    description:
      "Ensuring data integrity and performance with advanced database solutions, focusing on maintainability and readability.",
  },
  {
    icon: Gauge,
    title: "Performance optimization",
    description: "Implementing best practices for performance optimization to ensure fast and efficient applications.",
  },
  {
    icon: Server,
    title: "Test driven development",
    description: "Ensuring seamless integration and delivery of applications through robust DevOps practices.",
  },
   {
    icon: UserLock,
    title: "Security first",
    description: "Prioritizing security in every aspect of development to protect user data and ensure application integrity.",
  },
   {
    icon: Component,
    title: "Focus on user experience",
    description: "Prioritizing user experience in every aspect of development to create intuitive and engaging applications.",
  }
];

export default philosophyData;
