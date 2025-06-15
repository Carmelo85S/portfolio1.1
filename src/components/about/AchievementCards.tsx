export type AchievementCardsProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  extra?: string;
};

const AchievementCards = ({
  icon,
  title,
  description,
  extra,
}: AchievementCardsProps) => {
  return (
    <section className="w-full max-w-md flex flex-col justify-between p-5 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800 to-indigo-400 shadow-md hover:shadow-cyan-500/30 transition-all duration-300 group hover:scale-[1.02] min-h-[180px]">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 p-4 rounded-xl bg-emerald-600/20 backdrop-blur-md group-hover:scale-105 transform transition-transform duration-300 self-start sm:self-center rounded-xl bg-cyan-600/20 backdrop-blur-md group-hover:scale-105 transform transition-transform duration-300 self-start sm:self-center">
          {icon}
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-between flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-lg font-bold text-cyan-300 group-hover:text-cyan-400 transition-colors duration-300">
              {title}
            </h3>
            {extra && (
              <span className="text-xs px-2 py-1 rounded-full bg-purple-600/20 text-white backdrop-blur-sm">
                {extra}
              </span>
            )}
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementCards;
