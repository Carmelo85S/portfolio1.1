import type { OpportunityItemProps } from "../../type/type";

const OpportunityItem = ({ icon: Icon, title }: OpportunityItemProps) => {
  return (
    <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-400/10 to-gray-600/20 shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 group hover:scale-[1.02]">
      <div className="p-2 bg-emerald-400/20 rounded-full">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
        {title}
      </h3>
    </div>
  );
};

export default OpportunityItem;
