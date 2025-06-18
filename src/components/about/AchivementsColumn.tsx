import type { Achievement } from "../../type/type";
import Heading from "../ui/Heading";
import AchievementCards from "./AchievementCards";

type AchievementsColumnProps = {
  achievements: Achievement[];
};

const AchievementsColumn = ({ achievements }: AchievementsColumnProps) => {
  return (
    <div className="flex flex-col w-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-lg p-6 sm:p-10 h-full">
      <Heading title="Key Achievements" size="md" />
      <div className="flex flex-col justify-center mt-8 space-y-10">
        {achievements.map((achievement, index) => (
          <div className="flex justify-center" key={index}>
            <AchievementCards
              icon={achievement.icon}
              title={achievement.title}
              description={achievement.description}
              extra={achievement.extra}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsColumn;
