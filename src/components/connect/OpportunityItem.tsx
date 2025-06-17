import type { LucideIcon } from 'lucide-react';

type OpportunityItemProps = {
  icon: LucideIcon;
  title: string
};

const OpportunityItem = ({ icon: Icon, title }: OpportunityItemProps) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-800 to-indigo-500 shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 group hover:scale-[1.02]">
      <div className="p-2 rounded-full">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <p className="text-white text-sm font-medium">{title}</p>
    </div>
  );
};

export default OpportunityItem;
