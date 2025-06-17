import { Sparkle } from "lucide-react";
import philosophyData from "./PhilosophyData";
import PhilosophyCard from "./PhilosophyCard";
import Heading from "../ui/Heading";

const Philosophy = () => {
  return (
    <section className="flex flex-col items-center min-h-screen px-6 py-12 bg-cyan-50">
        
            <div className="p-6 bg-purple-800 backdrop-blur-xl rounded-3xl border border-cyan-400/30 shadow-xl shadow-cyan-500/30 mb-8">
                <Sparkle className="w-12 h-12 w-12 h-12 text-white" />
            </div>
        <div className="w-5/6 flex justify-between items-center flex-col pb-12 shadow-xl rounded-lg">
            <div className="text-center mb-12">
                <Heading title={"My approach and development"} color="blue" size="md" subtitle="My approach to creating solutions"/>
            </div>
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {philosophyData.map((item, idx) => (
                <PhilosophyCard key={idx} {...item} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Philosophy;
