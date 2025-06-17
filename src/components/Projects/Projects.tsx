import { Award } from "lucide-react"
import Heading from "../ui/Heading"
import Underline from "../ui/Underline"
import ProjectCard from "./ProjectCard"
import projectsList from "./ProjectsList"

const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 p-10 relative overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-xl rounded-3xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 mb-8">
        <Award className="w-12 h-12 text-cyan-300" />
      </div>
      <Heading title="My projects" subtitle="A quick look to some of my projects" />
      <Underline />
      {projectsList.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  )
}

export default Projects
