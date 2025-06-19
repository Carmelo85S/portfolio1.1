import Heading from "../ui/Heading"

const Title = () => {
  return (
    <div className="mb-10">
      <Heading
        title="Full-Stack Web Developer"
        subtitle="Technologies I work with"
      />

      {/* Tech stack with enhanced styling */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {['React','TypeScript','Node.js','Express.Js','MongoDB','Docker'].map((tech) => (
          <div key={tech} className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-default group">
            <span className="group-hover:text-cyan-300 transition-colors">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Title
