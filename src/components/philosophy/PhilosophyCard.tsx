import type { PhilosophyCardProps } from "../../type/type";


const PhilosophyCard = ({ icon: Icon, title, description }: PhilosophyCardProps) => {
  return (
    <div className="flex flex-col items-center text-center bg-white/80 border border-gray-200 shadow-md rounded-2xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="bg-blue-100 text-blue-500 rounded-full p-3 mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default PhilosophyCard;
