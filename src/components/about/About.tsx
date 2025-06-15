import { Award, Code2, Database, Lightbulb, Target, Users, Zap } from "lucide-react";
import Heading from "../ui/Heading";
import Underline from "../ui/Underline";
import AchievementsColumn from "./AchivementsColumn";
import SkillsColumn from "./SkillColumn";

const About = () => {
  const skills = [
    { category: "Frontend Excellence", items: ["React", "TypeScript", "Tailwind CSS"], icon: Code2, color: "from-cyan-500 to-blue-600", level: 95 },
    { category: "Backend Mastery", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"], icon: Database, color: "from-emerald-500 to-green-600", level: 88 },
    { category: "DevOps & Tools", items: ["Docker", "Git"], icon: Zap, color: "from-purple-500 to-indigo-600", level: 85 },
  ];

  const achievements = [
    { icon: <Award className="w-16 h-16 text-cyan-300 shadow-lg rounded-lg" />, title: "Career Transformation", description: "Transition from a traditional job to a full-stack web developer role.", extra: "Built several projects." },
    { icon: <Target className="w-16 h-16 text-cyan-300 shadow-lg rounded-lg" />, title: "Technical Proficiency", description: "Gained expertise in various programming languages and frameworks.", extra: "Built multiple projects showcasing my skills." },
    { icon: <Lightbulb className="w-16 h-16 text-cyan-300 shadow-lg rounded-lg" />, title: "Mindset", description: "Continuously learning and adapting to new technologies, with a focus on creating user-centric solutions.", extra: "Always learning and improving my skills." },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 p-6 sm:p-10 overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-xl rounded-3xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 mb-8">
        <Users className="w-12 h-12 text-cyan-300" />
      </div>

      <Heading title="About Me" subtitle="Discover my journey as a Full-Stack Web Developer" />
      <Underline />

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 items-stretch">
        <AchievementsColumn achievements={achievements} />
        <SkillsColumn skills={skills} />
      </div>
    </section>
  );
};

export default About;
