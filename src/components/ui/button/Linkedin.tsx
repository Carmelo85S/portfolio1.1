import { LinkedinIcon } from "lucide-react";

const Linkedin = () => {
  return (
    <div className="flex justify-center gap-6 mb-16">
      <button
        className="flex items-center gap-3 animate-pulse border text-white text-lg px-8 py-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        onClick={() => window.open("https://www.linkedin.com/in/carmelo-salis/", "_blank")}
      >
        <LinkedinIcon className="w-5 h-5" />
        <span>LinkedIn</span>
      </button>
    </div>
  );
};

export default Linkedin;
