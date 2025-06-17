import Heading from '../ui/Heading';
import { Offer } from './OpportunityData';
import OpportunityItem from './OpportunityItem';

const OpportunityList = () => {
  return (
    <div className="flex flex-col w-full max-w-lg bg-gradient-to-br from-gray-800 to-indigo-500 rounded-3xl border border-gray-700 shadow-lg p-6 sm:p-8 h-fit">
      <Heading title="Open to.." size="md" />
      <div className="flex flex-col mt-6 space-y-4">
        {Offer.map((item, index) => (
          <OpportunityItem
            key={index}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default OpportunityList;
