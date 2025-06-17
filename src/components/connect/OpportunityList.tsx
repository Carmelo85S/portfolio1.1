import Heading from '../ui/Heading';
import { Offer } from './OpportunityData';
import OpportunityItem from './OpportunityItem';

const OpportunityList = () => {
  return (
    <div className="flex flex-col w-full max-w-lg bg-gray-400/30 rounded-3xl shadow-lg p-6 sm:p-8 h-fit">
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
