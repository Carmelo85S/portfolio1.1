import Heading from '../ui/Heading';
import ConnectCard from './ConnectCard';
import { contact } from './ConnectData';

const ConnectList = () => {
  return (
    <div className="flex flex-col w-full max-w-lg bg-gray-400/30 rounded-3xl shadow-lg p-6 sm:p-8 h-fit">
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
