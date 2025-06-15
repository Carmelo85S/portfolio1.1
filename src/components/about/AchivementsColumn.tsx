import React from "react";
import Heading from "../ui/Heading";
import AchievementCards from "./AchievementCards";

type Achievement = {
  icon: React.ReactNode;
  title: string;
  description: string;
  extra?: string;
};

type AchievementsColumnProps = {
  achievements: Achievement[];
};

const AchievementsColumn = ({ achievements }: AchievementsColumnProps) => {
  return (
    <div className="flex flex-col justify-center bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-lg p-6 sm:p-10 h-full">
      <Heading title="Key Achievements" size="md" />
      <div className="flex flex-col mx-auto flex-grow mt-8 space-y-10">
        {achievements.map((achievement, index) => (
          <AchievementCards
            key={index}
            icon={achievement.icon}
            title={achievement.title}
            description={achievement.description}
            extra={achievement.extra}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsColumn;
