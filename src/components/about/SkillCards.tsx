import React from "react";
import type { LucideIcon } from "lucide-react";

export type SkillCardProps = {
  category: string;
  items: string[];
  icon: LucideIcon;
  color: string;
  level: number;
};

const SkillCard: React.FC<SkillCardProps> = ({
  category,
  items,
  icon: Icon,
  color,
  level,
}) => {
  return (
    <section className="w-full max-w-md flex flex-col justify-between p-5 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800 to-indigo-400 shadow-md hover:shadow-emerald-500/30 transition-all duration-300 group hover:scale-[1.02] min-h-[180px]">
      {/* Header: Icon + Title + Progress */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className={`flex-shrink-0 p-4 rounded-xl bg-emerald-600/20 backdrop-blur-md group-hover:scale-105 transform transition-transform duration-300 self-start sm:self-center ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col justify-center flex-1">
          <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 mb-1">
            {category}
          </h3>
          <div className="w-full bg-slate-800/60 rounded-full h-2">
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${color} transition-all duration-1000`}
              style={{ width: `${level}%` }}
            />
          </div>
          <span className="text-sm text-slate-300 mt-1">{level}% Proficiency</span>
        </div>
      </div>

      {/* Skill Tags */}
      <div className="grid grid-cols-2 gap-3 mt-auto">
        {items.map((item, i) => (
          <span
            key={i}
            className="text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/60 rounded-md px-3 py-1 text-center border border-slate-600 hover:bg-emerald-500/10 hover:border-emerald-400/40 transition"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillCard;
