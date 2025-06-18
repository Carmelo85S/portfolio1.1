import type { LucideIcon } from "lucide-react";

export type HeadingProps = {
  title: string;
  subtitle?: string;
  color?: "white" | "cyan" | "blue" | "gray";
  size?: "xs" | "sm" | "md" | "lg";
};

export type AchievementCardsProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  extra?: string;
};

export type Achievement = {
  icon: LucideIcon;
  title: string;
  description: string;
  extra?: string;
};


export type CompetenceCardProps = {
    icon: LucideIcon,
    badgeText: string,
    title: string,
    description: string,
    info: string,
    stack: string[],
    color: string,
    level: number,
}

export type ContactCardsProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  extra?: string
};

export type OpportunityItemProps = {
  icon: LucideIcon;
  title: string
};

export type FloatingBadgesProps = {
    award: string
}

export type PhilosophyCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ProjectCardProps = {
  title: string;
  icon: LucideIcon;
  stackInfo: string;
  iconYear: LucideIcon;
  year: string;
  typeOfProject: Array<"Production Ready" | "Creative" | "Team Project">;
  linkGit: string;
  linkLive: string;
  description: string;
  completion: string;
  performance: string;
  type: string;
  ratingIcon: LucideIcon;
  ratingCount: number;
  achievementIcon: LucideIcon;
  achievementInfo1: string;
  achievementInfo2: string;
  achievementInfo3: string;
  achievementInfo4: string;
  techIcon: LucideIcon;
  techInfo: string;
  techTask1: string;
  techTask2?: string;
  techTask3?: string;
  techTask4?: string;
  color: string
  hoverColor: string
};