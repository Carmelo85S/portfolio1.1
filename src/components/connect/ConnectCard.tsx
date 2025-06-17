import type { LucideIcon } from "lucide-react";

export type ContactCardsProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  extra?: string
};

const ConnectCard = ({
  icon: Icon,
  title,
  description,
  extra
}: ContactCardsProps) => {
  return (
    <section className="w-full flex flex-col justify-between p-5 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800 to-indigo-500 shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 group hover:scale-[1.02]">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0 p-4 rounded-xl backdrop-blur-md group-hover:scale-110 transform transition-transform duration-300">
          <Icon className="w-12 h-12 text-white" />
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
              {title}
            </h3>
            {extra && (
              <p className="text-sm text-emerald-200">{extra}</p>
            )}
          </div>
          <p className="text-gray-200 text-sm">{description}</p>
        </div>
      </div>
    </section>
  );
};


export default ConnectCard;
