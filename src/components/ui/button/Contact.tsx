import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex justify-center gap-6 mb-16">
      <button
        className="flex items-center gap-3 animate-pulse bg-gradient-to-r from-blue-500 to-blue-800 text-white text-xl px-12 py-3 rounded-lg shadow-lg transition-all hover:from-blue-400 hover:to-blue-200 hover:shadow-xl duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        onClick={() => window.location.href = "mailto:carmelo.salis85@gmail.com"}
      >
        <Mail className="w-5 h-5" />
        <span>Contact me</span>
      </button>
    </div>
  );
};

export default Contact;
