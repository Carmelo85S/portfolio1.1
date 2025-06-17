import type { LucideIcon } from 'lucide-react';

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

const ProjectCard = ({
  title,
  icon: Icon,
  stackInfo,
  iconYear: IconYear,
  year,
  typeOfProject,
  linkGit,
  linkLive,
  description,
  completion,
  performance,
  type,
  ratingIcon: RatingIcon,
  ratingCount,
  achievementIcon: AchievementIcon,
  achievementInfo1,
  achievementInfo2,
  achievementInfo3,
  achievementInfo4,
  techIcon: TechIcon,
  techInfo,
  techTask1,
  techTask2,
  techTask3,
  techTask4,
  color,
  hoverColor
}: ProjectCardProps) => {
  return (
    <section
    className={`w-full max-w-7xl p-6 mb-6 transition-all duration-300 ${color} ${hoverColor} hover:scale-105 hover:shadow-xl rounded-2xl border border-white/20 shadow-lg text-white space-y-6 relative`}
    >      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href={linkLive}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 transition px-5 py-2 rounded-lg font-semibold shadow-md"
          >
            Live version
          </a>
          <a
            href={linkGit}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white hover:border-cyan-400 transition px-5 py-2 rounded-lg font-semibold"
          >
            Source code
          </a>
        </div>
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2">
          <Icon className="w-6 h-6 text-purple-400" />
          <span className="text-lg font-semibold">{stackInfo}</span>
        </div>
        <div className="flex items-center gap-2">
          <IconYear className="w-6 h-6 text-cyan-400" />
          <span className="text-lg font-semibold">{year}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {typeOfProject.map((tag, idx) => (
            <span key={idx} className="text-sm font-medium bg-green-600 bg-opacity-30 rounded-full px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed">{description}</p>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Completion', value: completion },
          { label: 'Performance', value: performance },
          { label: 'Type', value: type },
          {
            label: 'Rating',
            value: (
              <div className="flex gap-1 justify-center">
                {Array.from({ length: ratingCount }).map((_, i) => (
                  <RatingIcon key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
            ),
          },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center border border-white/20 shadow-md rounded-lg p-4">
            <h3 className="text-2xl text-gray-300">
              {typeof item.value === 'string' ? item.value : item.value}
            </h3>
            <p className="text-gray-400 mt-1">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <AchievementIcon className="w-6 h-6 text-purple-400" />
          <h3 className="text-xl font-semibold text-gray-300">Key Achievements</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[achievementInfo1, achievementInfo2, achievementInfo3, achievementInfo4].map((text, idx) => (
            <div key={idx} className="border border-white/20 shadow-md rounded-lg p-4">
              <p className="text-lg font-semibold text-gray-200">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <TechIcon className="w-6 h-6 text-purple-400" />
          <span className="text-lg font-semibold">{techInfo}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[techTask1, techTask2, techTask3, techTask4]
                .filter(Boolean)
                .map((task, idx) => (
                <div key={idx} className="bg-white/10 border border-white/20 shadow-md rounded-lg p-4">
                    <p className="text-lg text-center font-semibold text-gray-200">{task}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
