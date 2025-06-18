import Heading from "../ui/Heading";
import Info from "./Info";

const InfoColumn = () => {
  return (
    <div className="flex flex-col w-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-lg p-6 sm:p-10 h-full">
      <Heading title="Info" size="md" />
      <div className="flex flex-col justify-center mt-8 space-y-10">
        <Info />
      </div>
    </div>
  );
};

export default InfoColumn;
