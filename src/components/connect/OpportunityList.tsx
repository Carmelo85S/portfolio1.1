import Heading from "../ui/Heading";
import { Offer } from "./OpportunityData";
import OpportunityItem from "./OpportunityItem";

const OpportunityList = () => {
  return (
    <div className="flex flex-col bg-gray-400/30 rounded-3xl shadow-lg p-6 sm:p-8 h-fit w-full max-w-3xl mx-auto">
      <Heading title="Open to.." size="md" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {Offer.map((item, index) => (
          <OpportunityItem key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default OpportunityList;
