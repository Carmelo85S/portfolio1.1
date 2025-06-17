import type { LucideIcon } from "lucide-react"
import FloatingBadges from "../hero/FloatingBadges"

export type CompetenceCardProps = {
    icon: LucideIcon,
    badgeText: string,
    title: string,
    description: string,
    info: string,
    stack: string[],
    color: string,
    level: number,
}

const CompetenceCard = ({
  icon: Icon,
  badgeText,
  title,
  description,
  info,
  stack,
  color,
  level
}: CompetenceCardProps) => {
  return (
    <section className={`relative flex flex-col justify-center items-start p-5 py-8 rounded-xl border border-gray-200 bg-cyan-50 shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-cyan-100/90`}>
      <FloatingBadges award={badgeText} />
      <div className="w-full flex items-center flex-col justify-center mx-auto mb-4">
        <Icon className={`w-16 h-16 text-cyan-300 ${color} rounded-xl p-2 mb-4 animate-pulse`} />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
        <p className={`w-full rounded-full p-2 bg-blue-500 text-md text-white text-center font-bold mb-6 ${color}`}>{info}</p>
        <p className="text-md text-center font-light text-gray-500 mb-6">{description}</p>
      <div className="w-full flex justify-between items-center p-2 mb-4">
        <ul className="flex justify-center flex-wrap gap-2">
          {stack.map((item, index) => (
            <li key={index} className="list-none text-xs text-center text-gray-700 border border-gray shadow-md rounded-lg px-2 py-3">{item}</li>
          ))}
        </ul>
      </div>
        <h4 className="text-xs font-semibold">Expertise Level:</h4>
        <div className="w-full bg-slate-800/60 rounded-full h-2">
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${color} transition-all duration-1000`}
              style={{ width: `${level}%` }}
            />
          <span className="text-sm text-gray-500">{level}% Proficiency</span>
        </div>
    </section>
  )
}

export default CompetenceCard
