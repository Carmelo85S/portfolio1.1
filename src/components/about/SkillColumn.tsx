import Heading from "../ui/Heading";
import SkillCard from "./SkillCards";
import type { LucideIcon } from "lucide-react";

type SkillGroup = {
  category: string;
  items: string[];
  icon: LucideIcon;
  color: string;
  level: number;
};

type SkillsColumnProps = {
  skills: SkillGroup[];
};

const SkillsColumn = ({ skills }: SkillsColumnProps) => {
  return (
    <div className="flex flex-col w-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-lg p-6 sm:p-10 h-full">
      <Heading title="Technical Skills" size="md" />
      <div className="flex flex-col justify-center mt-8 space-y-10">
        {skills.map((skillGroup, index) => (
          <div className="flex justify-center" key={index}>
            <SkillCard
              category={skillGroup.category}
              items={skillGroup.items}
              icon={skillGroup.icon}
              color={skillGroup.color}
              level={skillGroup.level}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsColumn;
