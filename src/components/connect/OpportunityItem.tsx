import type { LucideIcon } from 'lucide-react';

type OpportunityItemProps = {
  icon: LucideIcon;
  title: string
};

const OpportunityItem = ({ icon: Icon, title }: OpportunityItemProps) => {
  return (
    <div className="w-full flex items-center p-5 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-400 shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 group hover:scale-[1.02]">
      <div className="relative p-2 rounded-full">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">{title}</h3>
    </div>
  );
};

export default OpportunityItem;
