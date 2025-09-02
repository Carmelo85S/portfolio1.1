import type { ProjectCardProps } from "../../type/type";

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
      className={`w-full max-w-7xl p-4 sm:p-6 mb-8 transition-all duration-300 ${color} ${hoverColor} hover:scale-105 hover:shadow-xl rounded-2xl border border-white/20 shadow-lg text-white space-y-6`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <a
            href={linkLive}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 transition px-4 py-2 rounded-lg font-semibold shadow-md text-center"
          >
            Live version
          </a>
          <a
            href={linkGit}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white hover:border-cyan-400 transition px-4 py-2 rounded-lg font-semibold text-center"
          >
            Source code
          </a>
        </div>
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-4 items-center text-base sm:text-lg">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
          <span className="font-semibold">{stackInfo}</span>
        </div>
        <div className="flex items-center gap-2">
          <IconYear className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
          <span className="font-semibold">{year}</span>
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
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{description}</p>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: "Completion", value: completion },
          { label: "Type", value: type },
          {
            label: "Rating",
            value: (
              <div className="flex gap-1 justify-center">
                {Array.from({ length: ratingCount }).map((_, i) => (
                  <RatingIcon key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                ))}
              </div>
            )
          }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center border border-white/20 shadow-md rounded-lg p-4">
            <h3 className="text-lg text-gray-300">
              {typeof item.value === "string" ? item.value : item.value}
            </h3>
            <p className="text-gray-400 text-sm mt-1">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <AchievementIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-300">Key Achievements</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[achievementInfo1, achievementInfo2, achievementInfo3, achievementInfo4].map((text, idx) => (
            <div key={idx} className="border border-white/20 shadow-md rounded-lg p-4">
              <p className="text-sm sm:text-base font-semibold text-gray-200">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <TechIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
          <span className="text-base sm:text-lg font-semibold">{techInfo}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[techTask1, techTask2, techTask3, techTask4]
            .filter(Boolean)
            .map((task, idx) => (
              <div key={idx} className="bg-white/10 border border-white/20 shadow-md rounded-lg p-4">
                <p className="text-sm sm:text-base text-center font-semibold text-gray-200">{task}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
