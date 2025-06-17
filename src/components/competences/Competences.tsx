import { BookmarkCheck } from "lucide-react";
import Heading from "../ui/Heading";
import Underline from "../ui/Underline";
import CompetenceCard from "./CompetenceCard";
import competenceData from "./CompetenceData";

const Competences = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-cyan-300 p-6 sm:p-12 overflow-hidden">
      {/* Icon Header */}
      <div className="p-6 bg-purple-800 backdrop-blur-xl rounded-3xl border border-cyan-400/30 shadow-xl shadow-cyan-500/30 mb-8">
        <BookmarkCheck className="w-12 h-12 text-white" />
      </div>

      {/* Title + Underline */}
      <Heading title="Competences" color="blue" subtitle="My technical skills and expertise" />
      <Underline />

      {/* Cards Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 mx-auto">
        {competenceData.map((comp, idx) => (
          <CompetenceCard key={idx} {...comp} />
        ))}
      </div>
    </section>
  );
};

export default Competences;
