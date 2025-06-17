import Heading from '../ui/Heading';
import ConnectCard from './ConnectCard';
import { contact } from './ConnectData';

const ConnectList = () => {
  return (
    <div className="flex flex-col w-full max-w-lg bg-gradient-to-br from-gray-800 to-indigo-500 rounded-3xl border border-gray-700 shadow-lg p-6 sm:p-8 h-fit">
      <Heading title="Contact information" size="md" />
      <div className="flex flex-col mt-6 space-y-6">
        {contact.map((item, index) => (
          <ConnectCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            extra={item.extra}
          />
        ))}
      </div>
    </div>
  );
};

export default ConnectList;
