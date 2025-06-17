import { MessageSquare } from "lucide-react";
import Heading from "../ui/Heading";
import Underline from "../ui/Underline";
import Contact from "../ui/button/Contact";
import Linkedin from "../ui/button/Linkedin";

const Ready = () => {
  return (
    <section className="w-full max-w-5xl flex flex-col items-center bg-gradient-to-br from-gray-950 via-indigo-950 to-slate-950 p-6 rounded-3xl border-t-8 border-indigo-400 sm:p-10 overflow-hidden">
      {/* Icon wrapper */}
      <div className="p-6 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-xl rounded-3xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 mb-8">
        <MessageSquare className="w-12 h-12 text-cyan-300" />
      </div>

      {/* Heading and underline */}
      <Heading
        title="Ready to start a conversation?"
        subtitle="I'm excited to discuss how my skills, passion, and unique perspective can contribute to your team's success and drive innovation forward."
      />
      <Underline />

      {/* Button row */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6 mt-10">
        <Contact />
        <Linkedin />
      </div>
      <Heading
        title="Available for immediate start • Open to remote and on-site opportunities"
        size="xs"
        />
    </section>
  );
};

export default Ready;
